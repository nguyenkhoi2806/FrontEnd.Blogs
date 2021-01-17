import axios from "../axios-default";

export const CreatePost = async (data) => {
  try {
    return axios.post("/post/create", data).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const MyPostList = async (page = 1) => {
  try {
    return axios.get("/post/my-post-list?page=" + page).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const GetPostEdit = async (id) => {
  try {
    return axios.get("/post/get-post-edit/" + id).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const UpdatePost = async (data, id) => {
  try {
    return axios.put("/post/update/" + id, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const DeletePost = async (id) => {
  try {
    return axios.delete("/post/delete/" + id).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const GetAll = async (page = 1) => {
  try {
    return axios.get("/post/get-all?page=" + page).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const GetPostView =  async (id) => {
  try {
    return axios.get("/post/get-post-view/" + id).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
}
