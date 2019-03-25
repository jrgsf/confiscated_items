import React, { Component } from "react"
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios"

var logvar = 0

class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = { itemName: "", itemDescription: ""}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();  /// careful fucking typpo gaaaaaaaa
    // otherwise will automatically submit / refresh page before user enters anything!!!
//    event.target.reset();
    // makes form blank
    const entry = this.state
    axios.post("http://localhost:5000/api/add-entry", entry)
    console.log("Form submitted!", this.state.itemName)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    // records keystrokes entered into form -- repeats for every field
    console.log(event.target.value, this.state)
  }

  render() {
    logvar += 1
    // this function happens for every keystroke!  This is what user sees on page.
    // everything that shows up on screen must be here or be called here
    // HAS TO RETURN SOMETHING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    console.log("did it add????", logvar)
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>Item Name</Label>
        <Input
          name="itemName"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Label>Item Description</Label>
        <Input
          name="itemDescription"
          type="textarea"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Button>Submit</Button>
      </Form>
    )
  }
}

export default EntryForm
