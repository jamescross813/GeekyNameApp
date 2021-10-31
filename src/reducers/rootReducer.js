import { combineReducers } from "redux";

const rootReducer = combineReducers({
    user: userReducer,
    users: usersReducer
  });
  
  export default rootReducer;