import axios from "../axios-default";
export const SaveComment = async (data) => {
  try {
    return axios.post("/comment/save", data).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
