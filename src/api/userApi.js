import axios from "../axios-default";

export const Login = async (data) => {
  try {
    return axios.post("/auth/login", data).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const Signup = async (data) => {
  try {
    return axios.put("/auth/signup", data).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
