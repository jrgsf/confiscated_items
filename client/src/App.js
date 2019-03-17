import React, { Component } from "react";
import Test from "./testytest.js";
import EntryForm from "./EntryForm.js";
// test comment
class App extends Component {
  // constructor(props){
  //     super(props)
  //     this.state = {thing: ""}
  // }
  //
  // componentDidMount(){
  //   this.setState({thing: "some other dang state"});
  // }
  //
  // displayComponent(putting_thing_here) {
  //   console.log("first log check", putting_thing_here)
  //   if (!putting_thing_here){
  //     return <div>That not here solly</div>
  //   }
  //   return <Test thing={putting_thing_here} />;
  // }

  render() {
    console.log("check render");
    return <EntryForm />;
  }
}

export default App;
