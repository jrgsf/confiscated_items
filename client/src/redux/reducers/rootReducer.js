import { combineReducers } from "redux";
import items from "./ItemsReducers";
import location from "./LocationReducers";
const rootReducer = combineReducers({
  location,
  items
});

export default rootReducer;
