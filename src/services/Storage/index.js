export const saveItem = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const loadItem = (key) => {
  let res = JSON.parse(window.localStorage.getItem(key));
  return res;
};

export const removeItem = (key) => {
  window.localStorage.removeItem(key);
};

export const getUser = () => {
  return loadItem("user");
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const saveToken = (token) => {
  return localStorage.setItem("token", token);
};

export const removeToken = () => {
  return localStorage.removeItem("token");
};

export const removeAll = () => {
  return localStorage.clear();
}
