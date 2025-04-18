import "./navbar.css";
import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import Mode from "./Mode";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const [modeActive, setMode] = useState(false);
  const handleMode = (isModeActive: boolean) => {
    setMode(isModeActive);
    console.log(isModeActive ? "Mode is active" : "Mode is not active");
  };

  useEffect(() => {
    document.body.dataset.theme = modeActive ? "dark" : "light";
  }, [modeActive]);

  return (
    <div>
      <div onClick={handleNav} className="p-2 m-5">
        {!nav ? (
          <FiMenu size={30} className="transistion duration-150" />
        ) : (
          <FiMenu
            size={30}
            className="rotate-90 transistion duration-150 burger"
          />
        )}
      </div>
      <div className={!nav ? "hidden" : "navbar-class"}>
        <div>
          <ul className="p-2 m-5">
            <li>home.</li>
            <li>about.</li>
            <li>overview.</li>
            <li>projects.</li>
            <li>contact.</li>
          </ul>
          <Mode onToggle={handleMode} />
        </div>
      </div>
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
