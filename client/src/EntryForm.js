import React, { Component } from "react";
import { Form, Label, Input, Button } from "reactstrap";
import * as itemsActions from "./redux/actions/itemsActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = { itemName: "", itemDescription: "", pictures: [] };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
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
      location: this.props.location
    };
    formText = JSON.stringify(formText);
    const blob = new Blob([formText], {
      type: "application/json"
    });
    formData.append("document", blob);
    this.props.itemsActions.addItem(formData);
    event.target.reset();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  onChange(event) {
    const files = Array.from(event.target.files);
    this.setState({ pictures: files });
  }
  render() {
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
        <Label>Image</Label>
        <input name="filename" type="file" onChange={this.onChange} />
        <br />
        <Button color="primary">Submit</Button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
    location: state.location
  };
}

function mapDispatchToProps(dispatch) {
  return {
    itemsActions: bindActionCreators(itemsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntryForm);
