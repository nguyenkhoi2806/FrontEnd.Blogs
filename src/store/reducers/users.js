import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  user: {},
  messageError: "",
  isLogin: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_USER:
      return updateObject(state, action);
    case actionTypes.LOGOUT:
      return updateObject(state, action);
    default:
      return state;
  }
};

export default reducer;
