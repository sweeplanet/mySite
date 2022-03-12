import React, { useState } from "react";
import stars from './stars.png'
import deadSt from './deadstar.png'

function NotFound(){
  return(
    <>
    <div style={{backgroundImage: 'url('+stars+')', height: "97vh"}}>
       <div className="listSt">
        <p className="notF">4  </p>{" "}
        <img className="imgDeadSt" src={deadSt} width="160" height="160" />{" "}
        <p className="notF">4</p>
       </div>

       <div className="textSt">
        <h2>THIS PAGE IS NOT FULLY ARMED AND OPERATIONAL</h2>
        <h1>TRY SOMETHING ELSE?</h1>
       </div>
    </div>
    </>
  );
}

export default NotFound;
