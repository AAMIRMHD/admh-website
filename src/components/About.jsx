import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="relative min-h-screen overflow-hidden">
    <div
      className="absolute inset-0 h-full w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg1.jpg')",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/70 to-white/90" />

    <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6 py-24 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="glass max-w-3xl rounded-3xl p-10"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-gold">About ADMH</p>
        <h2 className="mt-4 font-display text-3xl md:text-4xl">Abna Abdullah Darwish</h2>
        <p className="mt-6 text-ink/70">
          Abdullah Darwish Sons Co. for Trading & Contracting was established as a national company to work in
          commercial building contracting and government projects across the Sultanate. The company is classified at
          the level of first grade and contributes to the renaissance of development, urbanization, and construction
          in Oman.
        </p>
        <div className="mt-6 space-y-5 text-sm text-ink/70">
          <div>
            <p className="font-semibold text-ink">AADMH services and history</p>
            <p>
              Our company was established in 1977 by the late founder, Mr. Abdullah Bin Droush (may he rest in peace),
              who laid its foundation on a clear vision and dedication to hard work. Since then, we have diligently
              worked to build our reputation as a leader in the construction industry.
            </p>
            <p className="mt-3">
              The company quickly grew and cemented itself as the new golden standard in commercial construction.
              Today we continue to build on that legacy and strive for excellence at everything we do.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink">AADMH people and culture</p>
            <p>
              Our company continues to evolve, expanding services to include ready-mix concrete production, operating
              crushers, fuel stations, tourism branches, and retail activities including food, construction materials,
              and gifts. We take pride in our long history of success and dedication to serving our clients and the
              local community.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
