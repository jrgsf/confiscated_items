import React from "react";
const FormPage = props => (
  <div
    className="container"
  >
    <div
   
    >
      <div>{props.displayField(props.formFields[props.idx])}</div>
    </div>
      <button
   
        onClick={e =>
          props.handleTestClick(e, props.formFields[props.idx], props.idx)
        }
        value="next"
      >
        Next
      </button>
    
    <button
      onClick={e => props.submitForm(e)}
    >
    Submit
    </button>
  </div>
);
export default FormPage;
