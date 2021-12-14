import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProjectList from "./components/projectsList/ProjectList";
import { Contact } from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
  <div>
    <Intro />
    <About />
    <ProjectList />
    <Contact />
    <Footer />
  </div>
  );
};

export default App;