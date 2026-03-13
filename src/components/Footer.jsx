import { FiLinkedin, FiInstagram, FiGlobe } from "react-icons/fi";

const Footer = () => (
  <footer className="border-t border-black/10 bg-white">
    <div className="gold-line h-px" />
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:px-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo.avif" alt="ADMH logo" className="h-12 w-12 rounded-full border border-gold/40 object-contain" />
          <div>
            <p className="font-display text-xl tracking-[0.4em] text-gold">ADMH</p>
            <p className="mt-2 text-sm text-ink/60">
              Abna Abdulla Darwish Mohammed Hussain for Trading & Contracting
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-ink/70 lg:flex lg:gap-6 lg:tracking-[0.3em]">
          <a href="#about" className="hover:text-gold">About</a>
          <a href="#services" className="hover:text-gold">Services</a>
          <a href="#projects" className="hover:text-gold">Projects</a>
          <a href="#why" className="hover:text-gold">Why Us</a>
          <a href="#clients" className="hover:text-gold">Clients</a>
          <a href="#contact" className="hover:text-gold">Contact</a>
        </div>
      </div>
      <div className="flex flex-col gap-4 border-t border-black/10 pt-6 md:flex-row md:items-center md:justify-between">
        <p className="text-xs uppercase tracking-[0.3em] text-ink/50">© 2026 ADMH. All rights reserved.</p>
        <div className="flex gap-4 text-gold">
          <FiLinkedin />
          <FiInstagram />
          <FiGlobe />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
