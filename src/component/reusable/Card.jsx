import "./css/card.css";


function GeneralCard(props) {
  const cssClasses = `card ${props.className ? props.className : ""}`;
  return <div className={cssClasses}>{props.children}</div>;
}

export const Card = GeneralCard;
