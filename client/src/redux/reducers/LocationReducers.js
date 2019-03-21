import initialState from "./initialState";
import { GET_LOCATION, RECEIVE_LOCATION } from "../actions/actionTypes";

export default function location(state = initialState.location, action) {
  switch (action.type) {
    case GET_LOCATION:
      return action;
    case RECEIVE_LOCATION:
      console.log("reducer", action);
      return Object.assign({}, state, action.location);
    default:
      return state;
  }
}
