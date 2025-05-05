import "./sidebar.css";
import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import Mode from "../Mode/Mode";

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleDarkTheme = (enabled: boolean) => setIsDarkTheme(enabled);

  useEffect(() => {
    const theme = isDarkTheme ? "dark" : "light";
    document.body.dataset.theme = theme;
  }, [isDarkTheme]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <div className="fixed top-6 left-6 z-500">
        <button onClick={toggleMenu}>
          <FiMenu
            size={45}
            className={`transition duration-150 ${
              isMenuOpen ? "rotate-90 burger" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black/40 z-490 overlay-class ${
          isMenuOpen ? "show" : ""
        }`}
      />

      <div
        className={`transition duration-300 ease-in-out ${
          isMenuOpen ? "" : "-translate-x-[100%]"
        }`}
      >
        <nav className="sidebar-class">
          <ul className="mt-15">
            <button
              className="nav-button"
              onClick={() => scrollToSection("home")}
            >
              home.
            </button>
            <button
              className="nav-button"
              onClick={() => scrollToSection("about")}
            >
              about.
            </button>
            <button
              className="nav-button"
              onClick={() => scrollToSection("overview")}
            >
              overview.
            </button>
            <button
              className="nav-button"
              onClick={() => scrollToSection("projects")}
            >
              projects.
            </button>
            <button
              className="nav-button"
              onClick={() => scrollToSection("contact")}
            >
              contact.
            </button>
          </ul>
          <div className="theme-button">
            <Mode />
          </div>
        </nav>
      </div>
    </>
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
