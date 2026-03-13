import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../data/content";

const Projects = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="relative bg-[#f2efe9]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Our Projects</p>
          <h2 className="font-display text-3xl md:text-4xl">Proven delivery across public and private sectors.</h2>
          <p className="max-w-2xl text-ink/70">
            From government infrastructure to commercial complexes and private residences, we build with precision and
            accountability.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <motion.button
              key={project.title}
              whileHover={{ scale: 1.02 }}
              onClick={() => setActive(project)}
              className="group relative h-64 overflow-hidden rounded-3xl border border-black/10 bg-white/80 text-left shadow-panel"
            >
              <img src={project.image} alt={project.title} className="h-full w-full object-cover opacity-85" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
              <div className="absolute bottom-6 left-6">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">{project.category}</p>
                <h3 className="mt-2 font-display text-xl text-white">{project.title}</h3>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="glass max-w-2xl overflow-hidden rounded-3xl"
              onClick={(event) => event.stopPropagation()}
            >
              <img src={active.image} alt={active.title} className="h-72 w-full object-cover" />
              <div className="space-y-4 p-8">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-700">{active.category}</p>
                <h3 className="font-display text-3xl font-semibold text-ink">{active.title}</h3>
                <p className="text-base font-medium text-ink/80">{active.description}</p>
                <button
                  onClick={() => setActive(null)}
                  className="rounded-full border border-ink/30 px-5 py-2 text-xs uppercase tracking-[0.3em] text-ink/80 transition hover:border-gold hover:text-gold"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
