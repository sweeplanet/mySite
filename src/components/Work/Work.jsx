import React, { useState } from "react";
import Menu from '../Menu/Menu.jsx'
import positions from "../../workPositions.js";
import Card from "./Card.jsx";
import Footer from '../Footer/Footer.jsx'


function createCard(position){
  return(
    <Card
      key={position.id}
      title={position.title}
      company={position.company}
      description={position.description}
      technologies={position.technologies}
    />
  );
}

function Work(){
  return(
    //We have to include de '<>' to add in cascade more than one element in the return.
    <>
    <Menu />
    <div className="workBox">
      <h1 className="titleW">Profesional Experience</h1>
      <div className="container">
      {positions.map(createCard)}
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Work;
