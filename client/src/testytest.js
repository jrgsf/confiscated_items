import React from "react"

/// arrow function: 
const Test = props => (
  <div>
      Random text
      <div>{props.thing}</div>
      /// "thing" is in App.js
  </div>
  // needs outer wrapping div
)

export default Test;

//// This isn't a class, so doesn't need a render()
//// (Prentational component) that only displays jsx: "thing" from App.js
//// not for writing or calling functions
