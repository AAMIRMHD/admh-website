import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="relative bg-charcoal sm:bg-navy/50">
    <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2 md:px-10">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute -left-6 top-10 h-72 w-56 rounded-3xl border border-gold/40 bg-gold/10 blur-2xl" />
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
          alt="ADMH engineering"
          className="relative z-10 h-full w-full rounded-3xl object-cover shadow-panel"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="glass rounded-3xl p-10"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-gold">About ADMH</p>
        <h2 className="mt-4 font-display text-3xl">Luxury-grade contracting with engineered precision.</h2>
        <p className="mt-6 text-white/70">
          Abna Abdulla Darwish Mohammed Hussain for Trading & Contracting is a premium construction and MEP
          partner headquartered in Muscat. We are recognized for delivering complex builds with meticulous quality,
          technical depth, and world-class project leadership.
        </p>
        <div className="mt-8 grid gap-4 text-sm text-white/70">
          <div>
            <p className="font-semibold text-white">Mission</p>
            <p>Deliver exceptional contracting and MEP services with uncompromising quality and reliability.</p>
          </div>
          <div>
            <p className="font-semibold text-white">Vision</p>
            <p>Shape Oman’s infrastructure with engineering excellence and luxury-grade craftsmanship.</p>
          </div>
          <div>
            <p className="font-semibold text-white">Expertise</p>
            <p>General contracting, MEP delivery, technical staffing, and import logistics for premium materials.</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
