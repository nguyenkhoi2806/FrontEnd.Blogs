import jwt_decode from "jwt-decode";
import * as Storage from "../Storage";

export const checkTokenExpiration = () => {
  const token = Storage.getToken();
  if (token === null) return true;
  if (jwt_decode(token).exp < Date.now() / 1000) {
    return true;
  }

  return false;
};
