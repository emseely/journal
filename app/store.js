import { createStore, applyMiddleware } from "redux";
import entriesReducer from "./redux/allEntries";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const store = createStore(
  entriesReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store;
