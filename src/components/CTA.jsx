import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="get-started" className="relative w-full bg-[#0B0E13] py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.05] p-8 text-center shadow-2xl backdrop-blur-xl md:p-12"
        >
          <h3 className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">
            Experience accessibility that feels magical
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Start translating signs into expressive text and lifelike speech in moments.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 px-6 py-3 text-base font-medium text-white shadow-lg shadow-indigo-500/20 transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
            >
              Launch Demo
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white/90 backdrop-blur-md transition-colors hover:bg-white/10"
            >
              Explore features
            </a>
          </div>
          <p className="mt-4 text-xs text-white/50">No sign-in required. Works in your browser.</p>
        </motion.div>

        <div className="mt-10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} WaveToMe. Designed for inclusivity.
        </div>
      </div>
    </section>
  );
};

export default CTA;
