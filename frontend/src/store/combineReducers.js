import { combineReducers } from "redux";
import categoryReducer from "./reducers/categoryReducer";
import loginReducer from "./reducers/loginReducer";
import sideBarReducer from "./reducers/sideBarReducer";
import permissionReducer from "./reducers/permissionReducer";

export default combineReducers({
  category : categoryReducer,
  login: loginReducer,
  sidebarShow:sideBarReducer,
  permissionReducer
});
