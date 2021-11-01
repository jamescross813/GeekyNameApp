import { combineReducers } from "redux";
import userReducer from "./userReducer";
import usersReducer from "./usersReducer";
import friendsReducer from "./friendsReducer";

const rootReducer = combineReducers({
  userInfo: userReducer,
  usersInfo: usersReducer,
  friendsInfo: friendsReducer
  });
  
  export default rootReducer;