import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NotFound from "../NotFound/NotFound.jsx"
import LandingPage from "../LandingPage/LandingPage.jsx"
import Work from "../Work/Work.jsx"
import About from "../About/About.jsx"

function App(){

  return(
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Work" element={<Work />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
