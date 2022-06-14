import React from "react";
import Web from "./Web/Web";
import Mobile from "./Mobile/Mobile";
import { useDarkMode } from "../../Context/DarkMode";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Your Name</div>
      <div className="menu"></div>
      <div className="web-menu">
        <Web />
      </div>
      <div className="mobile-menu"></div>
    </div>
  );
};

export default Header;
