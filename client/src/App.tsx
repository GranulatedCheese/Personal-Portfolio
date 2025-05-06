import { useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Mediabar from "./components/Mediabar/Mediabar";

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
      {/* <Mediabar /> */}

      <div className="animated-circle" id="theme-id" />

      <div className="font-bold text-4xl relative z-40">
        <section className="min-h-screen border-1">
          <Home />
        </section>

        <section className="min-h-screen border-1" id="home">
          <h1>Hero</h1>
        </section>

        <section className="min-h-screen border-1" id="about">
          <h1>About Me</h1>
        </section>

        <section className="min-h-screen flex border-1" id="overview">
          <h1>Overview</h1>
        </section>

        <section className="min-h-screen flex border-1" id="projects">
          <h1>Projects</h1>
        </section>

        <section className="min-h-screen flex border-1" id="contact">
          <h1>Contact</h1>
        </section>
      </div>
    </div>
  );
}
