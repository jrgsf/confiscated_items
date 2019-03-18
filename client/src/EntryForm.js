import React, { Component } from "react";

class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = { itemName: "", itemDescription: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let formData = {
      itemName: this.state.itemName,
      itemDescription: this.state.itemDescription
    };

    fetch("http://localhost:5000/api/add-entry", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then(response => response.json());
  }
  // otherwise will automatically submit before user enters anything!!!
  //    event.target.reset();
  // makes form blank

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Item Name</label>
        <input
          name="itemName"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <label>Item Description</label>
        <input
          name="itemDescription"
          type="textarea"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default EntryForm;
