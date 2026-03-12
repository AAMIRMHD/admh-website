import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const OpeningLoader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal"
        >
          <div className="absolute inset-0 bg-hero-gradient opacity-60" />
          <div className="relative flex w-full max-w-4xl flex-col items-center gap-10 px-6">
            <div className="w-full rounded-[28px] border border-white/10 bg-black/50 p-8 shadow-panel">
              <svg viewBox="0 0 900 260" className="h-48 w-full" aria-hidden="true">
                <defs>
                  <linearGradient id="gold" x1="0" x2="1">
                    <stop offset="0%" stopColor="#b88927" />
                    <stop offset="50%" stopColor="#d4af37" />
                    <stop offset="100%" stopColor="#f5df9b" />
                  </linearGradient>
                </defs>

                <rect x="20" y="170" width="860" height="6" fill="rgba(212,175,55,0.3)" />

                <motion.g
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <rect x="60" y="70" width="34" height="110" fill="url(#gold)" />
                  <rect x="54" y="170" width="46" height="16" fill="#0f172a" />
                  <rect x="110" y="40" width="24" height="140" fill="url(#gold)" />
                  <rect x="102" y="170" width="40" height="18" fill="#0f172a" />
                </motion.g>

                <motion.g
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1 }}
                >
                  <rect x="170" y="80" width="44" height="90" fill="url(#gold)" />
                  <rect x="160" y="170" width="64" height="20" fill="#0f172a" />
                  <rect x="230" y="60" width="38" height="110" fill="url(#gold)" />
                  <rect x="220" y="170" width="58" height="22" fill="#0f172a" />
                </motion.g>

                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <rect x="320" y="40" width="24" height="150" fill="url(#gold)" />
                  <rect x="310" y="170" width="44" height="22" fill="#0f172a" />
                  <motion.rect
                    x="332"
                    y="50"
                    width="220"
                    height="8"
                    fill="url(#gold)"
                    animate={{ rotate: [0, -3, 0] }}
                    transform="rotate(0 332 50)"
                    transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.line
                    x1="520"
                    y1="58"
                    x2="520"
                    y2="150"
                    stroke="#d4af37"
                    strokeWidth="3"
                    animate={{ y2: [120, 150, 130] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.rect
                    x="506"
                    y="150"
                    width="28"
                    height="18"
                    fill="#d4af37"
                    animate={{ y: [140, 150, 142] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.g>

                <motion.g
                  initial={{ x: -80 }}
                  animate={{ x: [0, 50, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <rect x="600" y="150" width="120" height="28" fill="#0f172a" />
                  <rect x="720" y="140" width="52" height="38" fill="#d4af37" />
                  <circle cx="630" cy="182" r="10" fill="#d4af37" />
                  <circle cx="690" cy="182" r="10" fill="#d4af37" />
                  <circle cx="740" cy="182" r="10" fill="#0f172a" />
                </motion.g>

                <motion.g
                  initial={{ x: 60 }}
                  animate={{ x: [0, -40, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <rect x="760" y="148" width="90" height="26" fill="#0f172a" />
                  <rect x="820" y="130" width="26" height="18" fill="#d4af37" />
                  <circle cx="780" cy="178" r="9" fill="#d4af37" />
                  <circle cx="820" cy="178" r="9" fill="#d4af37" />
                </motion.g>
              </svg>
            </div>

            <div className="h-px w-72 gold-line" />
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="text-center"
            >
              <p className="font-display text-2xl tracking-[0.5em] text-gold">ADMH</p>
              <p className="mt-4 text-xs uppercase tracking-[0.4em] text-white/70">
                Building landmark infrastructure with precision engineering
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.35em] text-white/50">
                General Contracting • MEP • Technical Excellence
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpeningLoader;
