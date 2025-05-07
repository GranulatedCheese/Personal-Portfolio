import "./mediabar.css";
import React, { useState } from "react";
import { FiAperture, FiLinkedin, FiGithub } from "react-icons/fi";

export default function Mediabar() {
  const menuSize = window.innerHeight >= 500 ? 55 / 1.5 : 45 / 1.5;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="fixed top-6 right-0 z-500 media-button">
        <button onClick={toggleMenu}>
          <FiAperture
            size={menuSize}
            className={`transition duration-1000 ease-in-out ${
              isMenuOpen ? "rotate-270" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`transition duration-1000 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 translate-x-[100%]"
        }`}
      >
        <nav className="mediabar-class">
          <ul className="mt-20 media">
            <button className="media-nav-button">
              <FiLinkedin size={menuSize / 1.3} />
            </button>

            <button className="media-nav-button">
              <FiGithub size={menuSize / 1.3} />
            </button>
          </ul>
        </nav>
      </div>
    </>
  );
}
