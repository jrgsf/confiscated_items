import React, { Component } from "react";
import { Form, Label, Input, Button } from "reactstrap";
import * as itemsActions from "./redux/actions/itemsActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FormPage from "./FormPage"

const formFields = [
  {name:"name", type: "text", placeholder: "name", label: "Claimant's Name"},
  {name: "address1", type: "text",  placeholder: "address", label: "Claimant's Home Address"},
  {name: "city1",type: "text", placeholder: "city", label: "City" }, 
  {name: "state1", type: "text", placeholder: "state", label: "State"},
  {name: "dayPhone1", type:"tel", placeholder: "daytime phone",  label: "Telephone"},
  {name: "evePhone1", type:"tel", placeholder: "evening phone",  label: "Telephone"},
  {name: "cellPhone1", type:"tel", placeholder: "cellular phone",  label: "Telephone"},
  {name: "address2", type: "textArea", placeholder: "address", label: "Send Official Notices and Correspondence to:"},
  {name: "city2",type: "text", placeholder: "city", label: "City" }, 
  {name: "state2", type: "text", placeholder: "state", label: "State"},
  {name: "dayPhone2", type:"tel", placeholder: "daytime phone",  label: "Telephone"},
  {name: "evePhone2", type:"tel", placeholder: "evening phone",  label: "Telephone"},
  {name: "cellPhone2", type:"tel", placeholder: "cellular phone",  label: "Telephone"},
  {name: "dob", type: "date", placeholder: "date of birth", label: "Date of Birth"},
  {name: "ssn", type: "password", placeholder: "social security number", label: "Social Security Number"},
  {name: "doi", type: "date", placeholder: "date of incident", label: "Date of Incident"},
  {name: "toi", type: "time", placeholder:"time of incident", label: "Time of Incident"},
  {name: "location", type: "text", placeholder: "location", label:"Location of Incident or Accident"},
  {name: "vehicle", type: "text", placeholder:"license plate #, type, mileage, and year ", label: "Claimant Vehicle License Plate #, Type, Mileage, and Year"},
  {name: "basisOfClaim", type: "textArea", placeholder: "State in detail all the facts and circumstances of the incident. Identify all persons, property, and City departments involved.  State why you believe the City is responsible for the alleged injury, property damage, or loss", label: "Basis of Claim"},
  {name: "cityEmployee", type: "text", placeholder: "", label: "Name, I.D, Number and City Department of City Employee who allegedly caused injury or loss"},
  {name: "description", type: "textArea", placeholder: "description", label: "Description of Claimant's injury damage or loss"},
  {name: "item1", type: "text", placeholder: "item", label:"item"},
  {name: "amount1", type: "text", placeholder: "amount", label:"$"},
  {name: "item2", type: "text", placeholder: "item", label:"item"},
  {name: "amount2", type: "text", placeholder: "amount", label:"$"},
  {name: "item3", type: "text", placeholder: "item", label:"item"},
  {name: "amount3", type: "text", placeholder: "amount", label:"$"},
  {name: "item4", type: "text", placeholder: "item", label:"item"},
  {name: "amount4", type: "text", placeholder: "amount", label:"$"},
  {name: "total", type: "text", placeholder: "total", label:"$"},
  {name: "witness1", type: "text", placeholder: "witness 1", label: "Witnesses (if any) Name"},
  {name: "witnessAddress1", type: "text", placeholder: "witness address", label: ""},
  {name: "witnessPhone1", type: "tel", placeholder: "witness phone", label: ""},
  {name: "witness2", type: "text", placeholder: "witness 2", label: "Witnesses (if any) Name"},
  {name: "witnessAddress2", type: "text", placeholder: "witness address", label: ""},
  {name: "witnessPhone2", type: "tel", placeholder: "witness phone", label: ""}
]

// const fields = ["name", "address","city", "state", "zip", "phone1", "phone2", "phone3", "correspondenceAddress", "city2", "state2", "zip2", "phone4", "phone5", "phone6"]
// const types = ["text", "textArea", "text", "text", "text", "tel", "tel", "tel", "textArea"]
// const placeholders = ["name", "address","city", "state", "zip", "daytime phone", "evening phone", "cellular phone"]
// const labels = ["Claimant's Name", "Claimant's Home Address", "City", "State", "Zip", "Telephone", "", "", "Send Official Notices and Correspondence to:"]
class EntryForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        idx: 0
      };
      this.incrementIdx = this.incrementIdx.bind(this);
      this.handleTestClick = this.handleTestClick.bind(this);
      this.submitForm = this.submitForm.bind(this);
    }
  
    displayField(formFields) {
      if (!formFields) {
        return (
          <div className="test-complete-message">
          </div>
        );
      }
  
      return formFields;
    }
  
    incrementIdx(idx) {
      let new_idx = idx + 1;
      this.setState({ idx: new_idx });
    }


    submitForm(event) {
        event.preventDefault();
        // let files = this.state.pictures;
        // const formData = new FormData();
        // files.forEach((file, i) => {
        //   formData.append(i, file);
        // });
        // let formText = {
        //   itemName: this.state.itemName,
        //   itemDescription: this.state.itemDescription,
        //   location: this.props.location
        // };
        // formText = JSON.stringify(formText);
        // const blob = new Blob([formText], {
        //   type: "application/json"
        // });
        // formData.append("document", blob);
        // this.props.itemsActions.addItem(formData);
        // event.target.reset();
      }



    handleTestClick(e, idx) {
      e.preventDefault();
      console.log(e)
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
          formFields={formFields}
          handleTestClick={this.handleTestClick}
          submitForm={this.submitForm}
          incrementIdx={this.incrementIdx}
          // displayField={this.displayField}
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
