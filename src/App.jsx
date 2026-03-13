import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import WhyChooseUs from "./components/WhyChooseUs";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="text-ink bg-charcoal"
  >
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Projects />
    <WhyChooseUs />
    <Clients />
    <Contact />
    <Footer />
  </motion.div>
);

export default App;
