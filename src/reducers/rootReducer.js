import { combineReducers } from "redux";
import userReducer from "./userReducer";
import usersReducer from "./usersReducer";
import friendsReducer from "./friendsReducer";

const rootReducer = combineReducers({
    user: userReducer,
    users: usersReducer,
    friends: friendsReducer
  });
  
  export default rootReducer;