import React, { Component } from "react";
import EntryForm from "./EntryForm.js";
import Entries from "./Entries";

class App extends Component {
  render() {
    return (
      <div>
        <Entries />
        <EntryForm />
      </div>
    );
  }
}

export default App;
