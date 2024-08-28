import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import service from "../services/user.service";
import { useDispatch } from "react-redux";
import { signInFailure, signInSuccess } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const { status, data } = await service.oAuthSignIn({
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      });
      if (status === 200) {
        alert("Logged in successfully");

        dispatch(signInSuccess(data));
        navigate("/");
      } else {
        console.error(data.message);
        dispatch(signInFailure(data.message));
      }

      dispatch(signInSuccess());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleAuth}
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
    >
      continue with google
    </button>
  );
};

export default OAuth;
