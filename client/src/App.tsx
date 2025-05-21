import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";

export default function App() {
  useEffect(() => {
    const onLoadFunction = () => {
      const mode = localStorage.getItem("theme");
      document.body.dataset.theme = mode!;
    };

    onLoadFunction();
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <Sidebar />

      <div className="animated-circle" id="theme-id" />

      <div className="font-bold text-4xl relative z-40">
        <section className="min-h-screen">
          <Home />
        </section>

        <section className="min-h-screen" id="home">
          <h1>Hero</h1>
        </section>

        <section className="min-h-screen" id="about">
          <h1>About Me</h1>
        </section>

        <section className="min-h-screen flex" id="overview">
          <h1>Overview</h1>
        </section>

        <section className="min-h-screen flex" id="projects">
          <h1>Projects</h1>
        </section>

        <section className="min-h-screen flex" id="contact">
          <h1>Contact</h1>
        </section>
      </div>
    </div>
  );
}
