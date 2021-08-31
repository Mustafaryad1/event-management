import * as TYPES from "../types/types";

export default (state = {
  isLogged:localStorage.getItem('token')?true:false,
  isAdmin:(localStorage.getItem('role')==='admin')?true:false,
  username:localStorage.getItem('username')?localStorage.getItem('username'):''
}, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return {
        ...action.payload,
      };
      break;
    case TYPES.LOGOUT:
      console.log("logout loginReducer")
      return {
        ...action.payload
      };
    default:
      return state;
  }
};
