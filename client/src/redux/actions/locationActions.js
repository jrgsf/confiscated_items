import * as types from "./actionTypes";

export function receiveLocation(position) {
  const location = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude
  };
  return {
    type: types.RECEIVE_LOCATION,
    location: location
  };
}

export function getLocation() {
  return dispatch => {
    const geolocation = navigator.geolocation;
    geolocation.getCurrentPosition(position => {
      dispatch(receiveLocation(position));
    });
  };
}
