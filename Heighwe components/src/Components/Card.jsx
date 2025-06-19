import React from "react";

function Card({ ...props }) {
  console.log(props);

  return <div>{props.title}</div>;
}

export default Card;
