import { combineReducers } from "redux";
import entries from "./allEntries";
import entry from "./singleEntry";

const appReducer = combineReducers({
  entries: entries,
  entry: entry,
});

export default appReducer;
