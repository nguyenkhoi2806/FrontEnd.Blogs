import axios from "../axios-default";

export const SavePost = async (data) => {
  try {
    return axios.post("/post/create", data).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};


export const MyPost = async (page = 1) => {
  try {
    return axios.get("/post/my-post?page=" + page).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
}
