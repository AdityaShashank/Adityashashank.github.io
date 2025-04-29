import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import {Skills} from "./components/Skills";  
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import StatsSection, { Reviews } from "./components/Reviews";  
import { Footer } from "./components/Footer";

// Ensure consistent casing in imports
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />  {/* Correct usage for default export */}
      <Projects />
      <Contact/>
      <StatsSection/>
      <Footer />
    </div>
  );
}

export default App;
