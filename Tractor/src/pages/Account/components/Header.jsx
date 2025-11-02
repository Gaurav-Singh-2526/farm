import React from "react";

const Header = ({ onMenuClick }) => {
  return (
    <header className="header">
      <button className="menu-btn" onClick={onMenuClick}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <button className="theme-btn">
        <i className="fa-solid fa-moon"></i>
      </button>
    </header>
  );
};

export default Header;
