import React from "react";

function Card(props){

  const items = props.technologies.map((item, idx) =>
          <li key={idx}>{item}</li>
  );

  return (
    <>
      <div className="card">
        <h2 className="titleP">{props.title}</h2>
        <h3>{props.company}</h3>
        <p className="wDesc">{props.description}</p>
        <h4>Technologies: </h4>
        <ul className="wDesc">{items}</ul>
      </div>
    </>
  );
}

export default Card;
