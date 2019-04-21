import * as types from "./actionTypes";
function itemsApi() {
  return `http://localhost:5000/api/entries`;
}

function deleteItemApi() {
  return "http://localhost:5000/api/delete-entry";
}
export function receiveItems(items) {
  return { type: types.RECEIVE_ITEMS, items: items };
}


// export function fetchItems() {
//   console.log("fetching items");
//   return dispatch => {
//     return fetch(itemsApi(), {
//       method: "GET",
//       mode: "cors",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       }
//     })
//       .then(response => response.json())
//       .then(items => dispatch(receiveItems(items)));
//   };
// }

export function addItem(entry) {
  return dispatch => {
    return fetch(itemsApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    })
      .then(response => response.json())
      // .then(() => dispatch(fetchItems()));
  };
}

export function deleteItem(item) {
  return dispatch => {
    return fetch(deleteItemApi(), {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: item
    })
      .then(response => response.json())
      // .then(() => dispatch(fetchItems()));
  };
}

export function answered(answer) {
  return {
    type: types.ANSWER,
    payload: {
      answer: answer
    }
  };
}