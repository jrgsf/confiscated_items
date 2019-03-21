import React, { Component } from "react";
import { Form, Label, Input, Button } from "reactstrap";

class EntryForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Label>Item Name</Label>
        <Input
          name="itemName"
          type="text"
          value={this.props.value}
          onChange={this.props.handleChange}
        />
        <br />
        <Label>Item Description</Label>
        <Input
          name="itemDescription"
          type="textarea"
          value={this.props.value}
          onChange={this.props.handleChange}
        />
        <br />
        <Label>Image</Label>
        <input name="filename" type="file" onChange={this.props.onChange} />
        <br />
        <Button color="primary">Submit</Button>
      </Form>
    );
  }
}

export default EntryForm;
