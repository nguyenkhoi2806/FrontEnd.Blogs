import * as actionTypes from "./actionTypes";
import * as StorageService from "../../services/Storage";


export const saveUser = (user) => {
  return {
    type: actionTypes.SAVE_USER,
    user: user,
    isLogin: true
  };
};

export const logout = () => {
  StorageService.removeToken();
  return {
    type: actionTypes.LOGOUT,
    user: {},
    isLogin: false
  };
}
