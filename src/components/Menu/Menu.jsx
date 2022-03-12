import React, { useState } from "react";
import logo from './logo.jpg'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from "react-router";

function Menu(){

  const navigate = useNavigate();

  return(
    <div className="navbar">
        <img className = "logo" src={logo} width="50" height="50" />
          <div className="buttonGroup">
            <Button sx={{
                color: '#FFFFFF',
                bgcolor: '#171923',
                mr: '40px',
                fontSize: '15px'
              }} style={{textTransform: 'none', fontFamily: 'Segoe UI'}}
              onClick={() => {
                  navigate('/');
              }}>Home</Button>
            <Button sx={{
                color: '#FFFFFF',
                bgcolor: '#171923',
                mr: '40px',
                fontSize: '15px'
            }} style={{textTransform: 'none', fontFamily: 'Segoe UI'}}
            onClick={() => {
                navigate('/Work');
            }}>Work</Button>
            <Button sx={{
                color: '#FFFFFF',
                bgcolor: '#171923',
                fontSize: '15px'
            }} style={{textTransform: 'none', fontFamily: 'Segoe UI'}}
            onClick={() => {
                navigate('/About');
            }}>About</Button>
          </div>
    </div>
  );
}

export default Menu
