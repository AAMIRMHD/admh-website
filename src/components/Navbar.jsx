import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "Home", href: "#home" },
  { label: " About", href: "#about" },
  { label: " Services", href: "#services" },
  { label: " Projects", href: "#projects" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = links.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const getActive = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      let current = sections[0].id;

      sections.forEach((section) => {
        if (scrollPos >= section.offsetTop) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    getActive();
    window.addEventListener("scroll", getActive, { passive: true });
    window.addEventListener("resize", getActive);
    return () => {
      window.removeEventListener("scroll", getActive);
      window.removeEventListener("resize", getActive);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "backdrop-blur-2xl bg-white/70 border-b border-black/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <div className="flex items-center gap-3">
          <img src="/logo.avif" alt="ADMH logo" className="h-10 w-10 rounded-full border border-gold/40 object-contain" />
          <div className="font-display text-lg tracking-[0.4em] text-gold">ADMH</div>
        </div>
        <div className="hidden items-center gap-6 text-[0.72rem] font-semibold uppercase tracking-[0.32em] md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`group relative transition ${
                activeSection === link.href.replace("#", "")
                  ? "text-gold"
                  : "text-ink/70 hover:text-gold"
              }`}
            >
              {link.label}
              <span className="absolute left-0 top-full mt-2 h-[2px] w-full origin-left scale-x-0 bg-gold transition duration-300 group-hover:scale-x-100" />
              {activeSection === link.href.replace("#", "") && (
                <span className="absolute left-0 top-full mt-2 h-[2px] w-full bg-gold" />
              )}
            </a>
          ))}
        </div>
        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="fixed right-0 top-0 h-screen w-72 bg-white/95 px-8 py-24 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-6 text-sm uppercase tracking-[0.3em]">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`transition ${
                    activeSection === link.href.replace("#", "")
                      ? "text-gold"
                      : "text-ink/70 hover:text-gold"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
