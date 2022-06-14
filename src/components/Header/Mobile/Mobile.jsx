import React from "react";
import "./Mobile.css";
import { useDarkMode, useSetDarkMode } from "../../../Context/DarkMode";

const Mobile = ({ isOpen, setIsOpen }) => {
  const darkMode = useDarkMode();
  const setDarkMode = useSetDarkMode();

  const handleClick = () => {
    setDarkMode(!darkMode);
    setIsOpen(false);
  };

  return (
    <div className={darkMode ? "mobile dark-mobile" : "mobile"}>
      <div
        className="close-icon"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <i className="far fa-times-circle" />
      </div>
      <div
        className={
          darkMode ? "mobile-options dark-mob-options" : "mobile-options"
        }
      >
        <div className="mobile-option" onCanPlay={() => setIsOpen(false)}>
          <a href="#Projects">
            <i className="fas fa-edit option-icon" />
          </a>
        </div>
        <div className="mobile-option" onCanPlay={() => setIsOpen(false)}>
          <a href="#Skills">
            <i className="fas fa-laptop option-icon" />
          </a>
        </div>
        <div className="mobile-option" onCanPlay={() => setIsOpen(false)}>
          <a href="#Projects">
            <i className="fas fa-briefcase option-icon" />
          </a>
        </div>
        <div className="mobile-option" onCanPlay={() => setIsOpen(false)}>
          <a href="#Projects">
            <i className="fas fa-user-edit option-icon" />
          </a>
        </div>
        <div
          className="mobile-option light-dark-option-mobile"
          onClick={handleClick}
        >
          <i className="fas fa-adjust option-icon" />
          (darkMode ? 'Light': 'Dark')
        </div>
      </div>
      {isOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => {
            setIsOpen(false);
          }}
        ></div>
      )}
    </div>
  );
};

export default Mobile;
