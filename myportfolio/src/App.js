import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import Section from "./components/Section";
import resume from "./Resume";
import aboutMe from "./Aboutme";
import projects from "./Projects";
import contacts from "./Contacts";

function App() {
  return (
    <>
    <Particles
    className = "particles-canvas"
     params = {{
       particles:  {
         number: {
           value:30,
           density: {
             enable: true,
             value_area: 900
           }

         },
         shape: {
           type: "circle",
           stroke: {
             width: 6,
             color: "#f9ab00"
           }
         }
       }

     }}
    />
    <Navbar/>
    <Header/>
        <Section
          title="Home"
          subtitle={Header}
          dark={true}
          id="header"
        />
        <Section
          title="Resume"
          subtitle={resume}
          
          id="resume"
        />
        <Section
          title="About Me"
          subtitle={aboutMe}
          
          id="aboutme"
        />
        <Section
          title="Projects"
          subtitle={projects}
          
          id="projects"
        />
        <Section
          title="Contacts"
          subtitle={contacts}
          
          id="contacts"
        />
    </>
  );
}

export default App;
