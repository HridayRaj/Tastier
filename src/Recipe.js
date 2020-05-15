import React from "react";

export default function Recipe(props) {
  return (
    <div>
      <h3> {props.title} </h3>
      <h6> {props.calories} </h6>
      <img src={props.image} alt=" " />
      <ol>
        {props.process.map(proces => (
          <li>{proces}</li>
        ))}
      </ol>
      <br /> <br />
    </div>
  );
}
