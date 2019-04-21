import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import EntryForm from "./EntryForm.js";
import Entries from "./Entries";
import * as itemsActions from "./redux/actions/itemsActions";
import * as locationActions from "./redux/actions/locationActions";

class Main extends Component {
  componentDidMount() {
    // this.props.itemsActions.fetchItems();
    this.props.locationActions.getLocation();
  }

  displayEntries(items) {
    if (!items) {
      return <div />;
    }

    items = Object.values(items);
    return <Entries items={items} />;
  }

  displayEntryForm(location) {
    if (!location) {
      return <div>Allow location to submit form</div>;
    }

    return <EntryForm location={location} />;
  }
  render() {
    return (
      <div className="container">
        {/* <h1 style={{ textAlign: "center" }}>Confiscated Items</h1>
        {this.displayEntries(this.props.items)}
        <br /> */}
        {/* <h2 style={{ textAlign: "center" }}>Enter new confiscated item</h2> */}
        {this.displayEntryForm(this.props.location)}
      </div>
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
    itemsActions: bindActionCreators(itemsActions, dispatch),
    locationActions: bindActionCreators(locationActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
