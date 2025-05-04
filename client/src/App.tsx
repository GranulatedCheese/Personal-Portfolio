import Sidebar from "./components/Sidebar/Sidebar";
export default function App() {
  return (
    <div id="theme-id" className="relative overflow-x-hidden">
      <Sidebar />

      <section
        className="min-h-screen flex items-center justify-center"
        id="home"
      >
        <h1 className="text-4xl font-bold">Hero Section</h1>
      </section>
      <section
        className="min-h-screen flex items-center justify-center"
        id="about"
      >
        <h1 className="text-4xl font-bold">About Me</h1>
      </section>
      <section
        className="min-h-screen flex items-center justify-center"
        id="overview"
      >
        <h1 className="text-4xl font-bold">Overview</h1>
      </section>
      <section
        className="min-h-screen flex items-center justify-center"
        id="projects"
      >
        <h1 className="text-4xl font-bold">Projects</h1>
      </section>
      <section
        className="min-h-screen flex items-center justify-center"
        id="contact"
      >
        <h1 className="text-4xl font-bold">Contact</h1>
      </section>
    </div>
  );
}
