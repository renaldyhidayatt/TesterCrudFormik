import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducers from "redux/reducers";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
