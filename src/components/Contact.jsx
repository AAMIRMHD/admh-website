import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Contact = () => (
  <section id="contact" className="relative bg-charcoal">
    <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <div className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.4em] text-gold">Contact</p>
        <h2 className="font-display text-3xl md:text-4xl">Let’s build something exceptional.</h2>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass grid gap-4 rounded-3xl p-10"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white" placeholder="Full Name" required />
            <input
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white"
              placeholder="Email Address"
              type="email"
              required
            />
          </div>
          <input className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white" placeholder="Company" />
          <textarea
            className="min-h-[160px] rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white"
            placeholder="Project Requirements"
            required
          ></textarea>
          <button type="submit" className="glow-button w-fit">Send Inquiry</button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass flex flex-col gap-6 rounded-3xl p-8"
        >
          <div className="flex items-start gap-4">
            <FiMapPin className="mt-1 text-gold" />
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">Address</p>
              <p className="text-sm text-white/80">
                P.O. Box 1, PC 811, Near Madeena Market, KH Asab Area, Muscat, Oman
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FiPhone className="mt-1 text-gold" />
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">Phone</p>
              <p className="text-sm text-white/80">+968 0000 0000</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FiMail className="mt-1 text-gold" />
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">Email</p>
              <p className="text-sm text-white/80">info@admh.om</p>
            </div>
          </div>
          <iframe
            title="Muscat Map"
            className="h-64 w-full rounded-2xl border border-white/10"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15066.02506029696!2d58.407!3d23.588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ff3f1b05b8b1%3A0x8cf3fd1a2cb1a231!2sMuscat%2C%20Oman!5e0!3m2!1sen!2som!4v1680000000000"
          ></iframe>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;
