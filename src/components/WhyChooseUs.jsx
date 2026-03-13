import { motion } from "framer-motion";
import { whyChooseUs } from "../data/content";

const WhyChooseUs = () => (
  <section id="why" className="relative bg-charcoal">
    <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <div className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.4em] text-gold">Why Choose Us</p>
        <h2 className="font-display text-3xl md:text-4xl">A legacy of excellence since 1977.</h2>
        <p className="max-w-2xl text-ink/70">
          Built on trust, capability, and long-term delivery for government, commercial, and private clients.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {whyChooseUs.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="font-display text-xl">{item.title}</h3>
            <p className="mt-3 text-sm text-ink/70">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
