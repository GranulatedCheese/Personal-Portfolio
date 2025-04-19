import "./navbar.css";
import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import Mode from "./Mode";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleModeToggle = (enabled: boolean) => {
    setIsDarkMode(enabled);
  };

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.body.dataset.theme = theme;

    const themeElement = document.getElementById("theme-id");
    if (themeElement) themeElement.dataset.theme = theme;
  }, [isDarkMode]);

  return (
    <div>
      <button onClick={toggleMenu} className="p-2 m-5">
        <FiMenu
          size={30}
          className={`transition duration-150 ${
            isMenuOpen ? "rotate-90 burger" : ""
          }`}
        />
      </button>

      {isMenuOpen && (
        <nav className="navbar-class" id="theme-id">
          <ul className="p-2 m-5">
            <li>home.</li>
            <li>about.</li>
            <li>overview.</li>
            <li>projects.</li>
            <li>contact.</li>
          </ul>
          <Mode onToggle={handleModeToggle} />
        </nav>
      )}
    </div>
  );
}

//Setup md and lg screen. Set up Dark mode and light mode
/*
Dark Mode Colors:
  Primary: #10191e
  Secondary: #9193c5
  Accent One: #ff9705
  Accent Two: #2a6cf8

Light Mode Colors:
  Primary: #fbf9f9
  Secondary: #404d5e
  Accent One: #ec8918
  Accent Two: #73a40a
*/
