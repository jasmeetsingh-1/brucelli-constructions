import "./css/card.css";
function Card(props) {
//   const cssClasses = "card " + props.className;
  const cssClasses = `card ${props.className ? props.className : ""}`;
  return <div className={cssClasses}>{props.children}</div>;
}

export default Card;