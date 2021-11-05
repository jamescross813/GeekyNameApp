import { combineReducers } from "redux";
import userReducer from "./userReducer";
import usersReducer from "./usersReducer";
import friendsReducer from "./friendsReducer";
import groupsReducer from "./groupsReducer";
import eventsReducer from "./eventReducer";

const rootReducer = combineReducers({
  userInfo: userReducer,
  usersInfo: usersReducer,
  friendsInfo: friendsReducer,
  groupsInfo: groupsReducer,
  eventsInfo: eventsReducer
  });
  
  export default rootReducer;