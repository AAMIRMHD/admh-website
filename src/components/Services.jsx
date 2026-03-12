import { motion } from "framer-motion";
import { services } from "../data/content";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => (
  <section id="services" className="relative bg-charcoal">
    <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <div className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.4em] text-gold">Services</p>
        <h2 className="font-display text-3xl md:text-4xl">Integrated engineering capabilities.</h2>
        <p className="max-w-2xl text-white/70">
          Our team delivers comprehensive contracting and MEP services with premium execution, intelligent
          coordination, and refined outcomes.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass group rounded-3xl p-8 transition hover:-translate-y-2 hover:border-gold/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold shadow-glow">
                <Icon size={20} />
              </div>
              <h3 className="mt-6 font-display text-xl">{service.title}</h3>
              <p className="mt-3 text-sm text-white/70">{service.description}</p>
              <div className="mt-6 h-[1px] w-full gold-line opacity-0 transition duration-300 group-hover:opacity-100" />
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
