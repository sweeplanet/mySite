import React, { useState } from "react";
import Menu from '../Menu/Menu.jsx';
import Footer from '../Footer/Footer.jsx';
import fotoNfq from './FotoNfq.jpg';
import badgeFRM from './frm.png';
import badgeAWS from './aws.png';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';



function About(){
  return(
    <>
    <Menu />
    <div className="containerAb">
      <div className="fbloque">
        <img src={fotoNfq} className="fotonfq"/>
        <div>
          <h1>Daniel Moreno Medina</h1>
          <h3 className="frm">FRM (Financial Risk Manager Certified)</h3>
        </div>
      </div>
      <div>
        <p className="sbloque">
        In my current position I am developing both my functional and technical skills as a director of solvency regulatory
        reporting.
        </p>
        <br/>
        <p className="sbloque2">How does a software engineer get to this position? After finish my degree in computer science I moved to Amsterdam
        to enjoy my first job opportunity. It was an intership where besides to learn a lot about trading derivatives (futures and options), I
        coded a connection to the exchange with the alternative financial market Chi-X.
        I realized that I wanted to learn more about the financial world, so I decided to enroll in a Master Degree in Finances
        to build my financial knolewdge. After that I start working in projects to some retail banks in liquidity and credit
        risk.
        </p>
        <br />
        <p className="sbloque2">In my free time I love coding projects to start ups and companies and help them achive their technical
        and functional requirements. My first programming language is Javascript and the second one Python. Furthermore I am improving
        my skills in cloud computing with some AWS certifications.
        </p>
        <br />
        <p className="sbloque2">I am very proactive person with a strong transveral attitudes in order to build up
        a successful career. My last achievements:
        </p>
      </div>
      <div className="containerCV">
        <a href="https://mygarp.force.com/DigitalBadgeFRM?id=0034000001aeOxUAAU" target="_blank">
          <img src={badgeFRM} width="150"/>
        </a>
        <a href="https://www.credly.com/badges/7bc96ad5-ed67-4b74-b9a3-004443ff5cf4?source=linked_in_profile" target="_blank">
          <img src={badgeAWS} width="150"/>
        </a>
      </div>
      <div className="buttonsCV">
        <Stack direction="row" spacing={2}>
          <Button  sx={{
            textTransform: 'none'
          }}
          size="large"
          variant="outlined"
          startIcon={<GitHubIcon />}
          href="https://github.com/sweeplanet"
          target="_blank">
            Github
          </Button>
          <Button sx={{
            textTransform: 'none'
          }}
          variant="contained"
          startIcon={<LinkedInIcon   />}
          href="https://www.linkedin.com/in/daniel-moreno-medina-frm-b4ab0b26/"
          target="_blank">
            LinkedIn
          </Button>
        </Stack>
      </div>
    <Footer />
    </div>
    </>
  );
}


export default About;
