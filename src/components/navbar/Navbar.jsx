import React from "react";
import "./navbar.scss";
import MainLogo from "../../imgs/logo/logo.png";
import SecondLogo from "../../imgs/logo/Logo_RBG_Full-Colour.png";
import { AccountCircleOutlined } from "@mui/icons-material";
import { red } from '@mui/material/colors';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <a href=""><img className="logo1 logo1-speparate" src={MainLogo} alt="Logo1" /></a>
        <img className="logo2" src={SecondLogo} alt="Logo2" />
        
      </div>

      <div className="right">
          <div className="account"><AccountCircleOutlined sx={{color : red[500]}}/></div>
          <a href="#" className="login">sign in</a>
      </div>
    </div>
  );
};

export default Navbar
