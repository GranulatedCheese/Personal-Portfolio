import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import React from "react";

export default function App() {
  return (
    <div className="min-h-screen" id="theme-id">
      <Hero />
      <Navbar />
    </div>
  );
}
