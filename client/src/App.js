import React, { Component } from 'react';
import Test from './testytest.js'
import EntryForm from './EntryForm.js'
import Entries from './Entries.js'

class App extends Component {
constructor(props){
    super(props)
    this.state = {thing: ""}
}
//// ^^^^ created a state (empty string to simulate getting data from user:
////// initializes as empty, in case that data is going to come later,
////// e.g., something user enters)

componentDidMount(){
  this.setState({thing: "some other dang state"});
}
///// ^^^^ would be result after user did something or something happened

displayComponent(putting_thing_here) {
  console.log("first log check", putting_thing_here)
  if (!putting_thing_here){
    return <div>That not here solly</div>
    /// if this "if" not here, will run error if data isn't there, can break.
  }
  return <Test thing={putting_thing_here} />;
}
///// ^^^^ thing that would happen.
////// This called in render() with this.displayComponent(this.state.thing)

  render() {
    /// everything needs a render()
    console.log("check render")
    //// Gotta wrap in div becuz who knows (rule in react)
    return <div> <EntryForm/> <Entries/> </div>
  }
}

export default App;
