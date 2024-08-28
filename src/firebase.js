// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "urbanroots-e9b98.firebaseapp.com",
  projectId: "urbanroots-e9b98",
  storageBucket: "urbanroots-e9b98.appspot.com",
  messagingSenderId: "211462859560",
  appId: "1:211462859560:web:bd5916c7dbe4cb3bb7fe1d",
  measurementId: "G-1DJP8M4HVN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
