import "./navbar.css";
import React, { useState } from "react";
import { FiMenu, FiSun, FiMoon } from "react-icons/fi";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const [mode, setMode] = useState(false);
  const handleMode = () => {
    setMode(!mode);
  };

  return (
    <div className="root-class">
      <div onClick={handleNav} className="p-2 m-5">
        {!nav ? (
          <FiMenu size={30} className="transistion duration-75" />
        ) : (
          <FiMenu size={30} className="rotate-90 transistion duration-75" />
        )}
      </div>
      <div className={!nav ? "md:hidden" : "navbar-class"}>
        <div>
          <ul className="p-2 m-5">
            <li>home.</li>
            <li>about.</li>
            <li>overview.</li>
            <li>projects.</li>
            <li>contact.</li>
          </ul>
          <div onClick={handleMode} className="p-2 m-5 fixed bottom-0">
            {!mode ? <FiSun size={30} /> : <FiMoon size={30} />}
          </div>
        </div>
      </div>
    </div>
  );
}

// Work on mode button. Setup md and lg screen

export default Navbar;
