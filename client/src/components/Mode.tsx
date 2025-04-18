import "./navbar.css";
import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

interface NavbarProps {
  onToggle: (isModeActive: boolean) => void;
}

export default function Mode({ onToggle }: NavbarProps) {
  const [isModeActive, setMode] = useState(false);
  const toggleMode = () => {
    const newState = !isModeActive;
    setMode(newState);
    onToggle(newState);
  };

  return (
    <div>
      <div onClick={toggleMode} className="p-2 m-5 fixed bottom-0 ">
        {!isModeActive ? <FiSun size={30} /> : <FiMoon size={30} />}
      </div>
    </div>
  );
}
