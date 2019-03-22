import initialState from "./initialState";
import update from "immutability-helper";
import { FETCH_ITEMS, RECEIVE_ITEMS } from "../actions/actionTypes";

export default function items(state = initialState.items, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return action;
    case RECEIVE_ITEMS:
      return update(state, { $set: action.items });
    default:
      return state;
  }
}
