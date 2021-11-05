import { combineReducers } from "redux";
import userReducer from "./userReducer";
import usersReducer from "./usersReducer";
import friendsReducer from "./friendsReducer";
import groupsReducer from "./groupsReducer"

const rootReducer = combineReducers({
  userInfo: userReducer,
  usersInfo: usersReducer,
  friendsInfo: friendsReducer,
  groupsInfo: groupsReducer
  });
  
  export default rootReducer;