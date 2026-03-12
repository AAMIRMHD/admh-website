import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import ThreeBackdrop from "./ThreeBackdrop";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 120]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        poster="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
      >
        <source src="https://cdn.coverr.co/videos/coverr-construction-site-1530/1080p.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90" />
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute left-10 top-32 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute bottom-20 right-16 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-8 px-6 pt-32 md:px-10">
        <div className="glass w-fit rounded-full px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/70">
          Muscat, Oman
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-display text-4xl md:text-6xl"
        >
          Engineering Excellence. Building the Future.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-2xl text-base text-white/70 md:text-lg"
        >
          Professional contracting and MEP solutions delivering quality infrastructure across Oman. We combine
          precision engineering, luxury finishes, and elite technical teams to deliver exceptional results.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#projects" className="glow-button">View Projects</a>
          <a
            href="#contact"
            className="rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:-translate-y-1 hover:border-gold hover:text-gold"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      <ThreeBackdrop />

      <div className="absolute right-10 top-32 hidden flex-col gap-4 lg:flex">
        {["MEP Excellence", "Gold-Standard QA/QC", "Elite Engineering Teams"].map((label) => (
          <div
            key={label}
            className="glass animate-float rounded-full px-5 py-2 text-xs uppercase tracking-[0.3em] text-white/70"
          >
            {label}
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.4em] text-white/60"
      >
        <span>Scroll</span>
        <FiArrowDown className="animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
