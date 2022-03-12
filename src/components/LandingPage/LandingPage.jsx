import React, { useState } from "react";
import Menu from '../Menu/Menu.jsx';
import Footer from '../Footer/Footer.jsx'
import styled from "styled-components";
import { keyframes } from "styled-components";


function LandingPage(){
  return(
    //We have to include de '<>' to add in cascade more than one element in the return.
    <>
    <Menu />
    <div className="boxTextMain">
      <AnimatedGradientText>
        Hello, I'm Daniel
      </AnimatedGradientText>
      <div className = "introBox">
        <h1>
          I'm a
          <span style={{color:'#CBD5E0'}}> software engineer </span>
          working in
          <br/>
          a bank in the
          <span style={{color:'#CBD5E0'}}> capital area. </span>
          Furthermore, I help
          <br/>
          <span style={{color:'#CBD5E0'}}> companies and startups </span>
          with theirs projects
          <br/>
          <span style={{color:'#CBD5E0'}}> as a full stack developer. </span>
        </h1>
      </div>
    </div>
    <Footer />
    </>
  );
}

// Styled components for text gradient animation - based off https://codepen.io/caseycallow/pen/yMNqPY
const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;
const AnimatedGradientText = styled.h1`
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: "Segoe UI"
  font-feature-settings: "kern";
  font-size: 48px;
  font-weight: 700;
  line-height: 48px;
  overflow-wrap: break-word;
  text-align: center;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
`;



export default LandingPage;
