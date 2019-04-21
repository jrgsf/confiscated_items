import initialState from "./initialState";
import update from "immutability-helper";
import { FETCH_ITEMS, RECEIVE_ITEMS, ANSWER } from "../actions/actionTypes";

export default function items(state = initialState.items, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return action;
    case RECEIVE_ITEMS:
      return update(state, { $set: action.items });

    case ANSWER:
      const answer = action.payload;
      console.log(answer)
      return Object.assign({}, state, {
        // testItems: [
        //   ...state.testItems,
        //   {
        //     testItems: testResult.testItem,
        //     answeredCorrectly: testResult.answeredCorrectly
        //         }
              // ]
            });
    default:
      return state;
  }

}