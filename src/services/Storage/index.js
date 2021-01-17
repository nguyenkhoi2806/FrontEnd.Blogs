export const saveItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadItem = (key) => {
  try {
    let res = JSON.parse(localStorage.getItem(key));
    return res;
  } catch (error) {
    return null;
  }
};

export const removeItem = (key) => {
  localStorage.removeItem(key);
};

export const getUser = () => {
  return loadItem("user");
};

export const getToken = () => {
  return loadItem("token");
};

export const saveToken = (token) => {
  return localStorage.setItem("token", token);
};

export const removeToken = () => {
  return localStorage.removeItem("token");
};

export const removeAll = () => {
  return localStorage.clear();
};
