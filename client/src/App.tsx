import Hero from "./components/Hero/Hero";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  return (
    <div id="theme-id" className="relative overflow-x-hidden">
      <Sidebar />

      <div className="animated-circle" />

      <div className="font-bold text-4xl relative z-40">
        <section className="min-h-screen flex items-center justify-center" />

        <section
          className="min-h-screen flex items-center justify-center"
          id="home"
        >
          <Hero />
        </section>

        <section
          className="min-h-screen flex items-center justify-center"
          id="about"
        >
          <h1>About Me</h1>
        </section>

        <section
          className="min-h-screen flex items-center justify-center"
          id="overview"
        >
          <h1>Overview</h1>
        </section>

        <section
          className="min-h-screen flex items-center justify-center"
          id="projects"
        >
          <h1>Projects</h1>
        </section>

        <section
          className="min-h-screen flex items-center justify-center"
          id="contact"
        >
          <h1>Contact</h1>
        </section>
      </div>
    </div>
  );
}
