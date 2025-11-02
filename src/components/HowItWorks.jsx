import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'Open the camera',
    desc: 'WaveToMe uses your device camera to observe gestures with privacy-respecting controls.',
  },
  {
    step: '02',
    title: 'Sign naturally',
    desc: 'Express yourself as you normally would. Subtle motions and context are captured in real-time.',
  },
  {
    step: '03',
    title: 'Read & listen',
    desc: 'Your message appears as text and is read aloud with a natural, clear voice.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative w-full bg-[#0B0E13] py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 h-72 w-72 translate-x-10 -translate-y-10 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-center text-3xl font-semibold text-transparent md:text-4xl"
        >
          How it works
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
            >
              <div className="text-sm font-mono uppercase tracking-wider text-indigo-300/80">{s.step}</div>
              <h3 className="mt-2 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-white/60">{s.desc}</p>
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/10 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
