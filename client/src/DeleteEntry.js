import React, { Component } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Button } from "react-bootstrap";
import * as itemsActions from "./redux/actions/itemsActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { Glyphicon } from "react-bootstrap";

class DeleteEntry extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submit = this.submit.bind(this);
  }

  getOptions(item) {
    if (!item) {
      return <div />;
    }
    return (
      <form
        style={{
          display: "inline-block",
          marginLeft: 5,
          marginRight: 5
        }}
        id="delete-button"
      >
        {/* <Glyphicon */}
          onClick={this.submit}
          glyph="glyphicon glyphicon-trash"
          id="trash-can"
        />
      </form>
    );
  }

  handleSubmit() {
    const item = this.props.item;
    this.props.itemsActions.deleteItem(item);
  }
  submit = event => {
    event.preventDefault();
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: event => this.handleSubmit()
        },
        {
          label: "No",
          onClick: () => console.log("no")
        }
      ]
    });
  };

  render() {
    return this.getOptions(this.props.item);
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
)(DeleteEntry);
