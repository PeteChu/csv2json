import React from "react";

const TextInput = props => {
  return (
    <textarea
      className={props.styleName}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.text}
    ></textarea>
  );
};

export default TextInput;
