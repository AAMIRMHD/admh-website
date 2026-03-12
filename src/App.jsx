import { motion } from "framer-motion";
import OpeningLoader from "./components/OpeningLoader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="text-white bg-charcoal"
  >
    <OpeningLoader />
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Projects />
    <Stats />
    <Contact />
    <Footer />
  </motion.div>
);

export default App;
