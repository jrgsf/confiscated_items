import initialState from "./initialState";
import { FETCH_ITEMS, RECEIVE_ITEMS } from "../actions/actionTypes";

export default function items(state = initialState.items, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return action;
    case RECEIVE_ITEMS:
      return Object.assign({}, state, action.items);
    default:
      return state;
  }
}
