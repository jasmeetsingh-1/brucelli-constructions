import React from "react";
import "../css/customButton.css";


function CustomButton(props) {
  const cssClasses = "customButton " + props.className;
  return <button onClick={props.onClick} className={cssClasses}>{props.children}</button>;
}

export default CustomButton;