import { motion } from "framer-motion";
import { clients } from "../data/content";

const Clients = () => (
  <section id="clients" className="relative bg-[#f2efe9]">
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <div className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.4em] text-gold"></p>
        <h2 className="font-display text-3xl md:text-4xl">Trusted by </h2>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {clients.map((client) => (
          <div
            key={client}
            className="glass rounded-2xl px-5 py-4 text-center text-xs uppercase tracking-[0.3em] text-ink/70"
          >
            {client}
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Clients;
