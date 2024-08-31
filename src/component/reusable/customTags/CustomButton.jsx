import React from "react";
import "../css/customButton.css";


function CustomButton(props) {
  const cssClasses = "card " + props.className;
  return <div className={cssClasses}>{props.children}</div>;
}

export default CustomButton;