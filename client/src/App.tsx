import Navbar from "./components/Navbar";
import React, { useState } from "react";

export default function App() {
  const [modeActive, setMode] = useState(false);
  const handleMode = (isModeActive: boolean) => {
    setMode(isModeActive);
    console.log(isModeActive ? "Mode is active" : "Mode is not active");
  };

  return (
    <body data-theme={modeActive ? "dark" : "light"}>
      <div>
        <Navbar onToggle={handleMode} />
      </div>
    </body>
  );
}
