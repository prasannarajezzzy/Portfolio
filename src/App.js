import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Experience } from "./components/Experience";
import { Research } from "./components/Research";
import WorkExperience from "./components/workExperience/WorkExperience";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <WorkExperience />
      <Research />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
