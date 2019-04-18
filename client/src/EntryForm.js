import React, { Component } from "react";
import { Form, Label, Input, Button } from "reactstrap";
import * as itemsActions from "./redux/actions/itemsActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FormPage from "./FormPage"

class EntryForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        formField: this.props.formField,
        idx: 0
      };
      this.incrementIdx = this.incrementIdx.bind(this);
      this.handleTestClick = this.handleTestClick.bind(this);
      this.submitForm = this.submitForm.bind(this);
    }
  
    displayField(studentTestItems) {
      if (!studentTestItems) {
        return (
          <div className="test-complete-message">
          </div>
        );
      }
  
      return studentTestItems;
    }
  
    incrementIdx(idx) {
      let new_idx = idx + 1;
      this.setState({ idx: new_idx });
    }


    submitForm(event) {
        event.preventDefault();
        if (this.props.studentTest.testItems.length === 0) {
            this.props.history.push(`/details/${this.props.match.params.id}`);
            return;
          }
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



    handleTestClick(e, studentTestItems, idx) {
      e.preventDefault();
      this.incrementIdx(idx);
  
      // this.props.studentTestActions.answerQuestion(
      //   studentTestItems,
      //   answeredCorrectly
      // );
    }
  
    render() {
      const idx = this.state.idx;
      return (
        <FormPage
          idx={idx}
          // studentTestItems={studentTestItems}
          handleTestClick={this.handleTestClick}
          submitForm={this.submitForm}
          incrementIdx={this.incrementIdx}
          displayField={this.displayField}
        />
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
  