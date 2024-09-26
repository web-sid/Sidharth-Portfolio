import About from "./About";
import Header from "./Header";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import ParticlesContainer from "./ParticlesContainer";

const App = () => {
  return (
    <div className="w-full xl:w-[1280px] py-32 px4 lg:px-12 pr-4 lg:pr-[32]">
      <ParticlesContainer id="particles" />
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
