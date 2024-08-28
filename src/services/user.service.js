import { instance } from "./instance";

const service = {
  signUp: async (data) => {
    try {
      const response = await instance.post("/users/signup", data);
      return {
        status: response.status,
        data: response.data,
      };
    } catch (error) {
      return {
        status: error.response.data.statusCode,
        data: error.response.data,
      };
    }
  },
  signIn: async (data) => {
    try {
      const response = await instance.post("/users/signin", data, {
        withCredentials: true,
      });
      return {
        status: response.status,
        data: response.data,
      };
    } catch (error) {
      return {
        status: error.response.data.statusCode,
        data: error.response.data,
      };
    }
  },
  oAuthSignIn: async (data) => {
    try {
      const response = await instance.post("/users/google", data, {
        withCredentials: true,
      });
      return {
        status: response.status,
        data: response.data,
      };
    } catch (error) {
      return {
        status: error.response.data.statusCode,
        data: error.response.data,
      };
    }
  },
};

export default service;
