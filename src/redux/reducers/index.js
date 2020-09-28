import { combineReducers } from "redux";
import { users } from "./users.reducers";
import { auth } from "./auth.reducers";
import { message } from "./message.reducer";

const rootReducer = combineReducers({
  users,
  auth,
  message
});

export default rootReducer;
