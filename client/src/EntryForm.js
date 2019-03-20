import React, { Component } from "react";
import { Form, Label, Input, Button } from "reactstrap";
import ImageUploader from "react-images-upload";

class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: "",
      itemDescription: "",
      lat: null,
      lng: null,
      uploading: false,
      pictures: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      err => console.log(err)
    );
  }

  onChange(event) {
    const files = Array.from(event.target.files);
    this.setState({ pictures: files });
  }
  // onChange = e => {
  //   const files = Array.from(e.target.files);
  //   this.setState({ uploading: true, images: files[0] });
  // };

  handleSubmit(event) {
    event.preventDefault();
    let files = this.state.pictures;
    const formData = new FormData();
    files.forEach((file, i) => {
      formData.append(i, file);
    });
    let formText = {
      itemName: this.state.itemName,
      itemDescription: this.state.itemDescription,
      latitude: this.state.lat,
      longitude: this.state.lng
    };
    formText = JSON.stringify(formText);
    const blob = new Blob([formText], {
      type: "application/json"
    });
    formData.append("document", blob);
    fetch("http://localhost:5000/api/add-entry", {
      method: "POST",
      mode: "cors",
      body: formData
    });
  }
  // otherwise will automatically submit before user enters anything!!!
  //    event.target.reset();
  // makes form blank

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    console.log("state", this.state);
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>Item Name</Label>
        <Input
          name="itemName"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <br />
        <Label>Item Description</Label>
        <Input
          name="itemDescription"
          type="textarea"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <br />
        <input name="filename" type="file" onChange={this.onChange} />

        <Button color="primary">Submit</Button>
      </Form>
    );
  }
}

export default EntryForm;
