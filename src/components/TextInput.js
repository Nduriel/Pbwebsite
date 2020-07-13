import React from "react";
import { Control, LocalForm, Errors } from "react-redux-form";

function TextInput(props) {
  return (
    <Control.TextInput
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      className="form-control"
      placeHolder={props.placeHolder}
    />
  );
}

export default TextInput;
