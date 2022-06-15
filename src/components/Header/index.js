import React, { useState } from "react";
import { useDarkMode } from "../../Context/DarkMode";
import "./Header.css";
import Mobile from "./Mobile";
import Web from "./Web";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const darkMode = useDarkMode();
  return (
    <div className="header">
      <div className={darkMode ? "logo dark-logo" : "logo"}>Your Name</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <i className="fi-rr-apps menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
