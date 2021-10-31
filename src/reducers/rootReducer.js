import { combineReducers } from "redux";
import userReducer from "./userReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
    user: userReducer,
    users: usersReducer
  });
  
  export default rootReducer;