import React from "react";
const FormPage = props => (
  <div
    className="container"
  >
  {console.log("PROPS", props.idx)}
      <input type={props.formFields[props.idx].type} name={props.formFields[props.idx].name} 
      placeholder={props.formFields[props.idx].placeholder} />
      <button
   
        onClick={e =>
          props.handleTestClick(e,  props.idx)
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
