import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, Type, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-5 w-5 text-indigo-300" />,
    title: 'Premium Accuracy',
    desc: 'Modern models interpret gestures with precision for reliable, real-time results.',
  },
  {
    icon: <Type className="h-5 w-5 text-indigo-300" />,
    title: 'Text Transcription',
    desc: 'Fluid recognition translates signs into beautifully formatted text.',
  },
  {
    icon: <Volume2 className="h-5 w-5 text-indigo-300" />,
    title: 'Natural Voice',
    desc: 'Clear, expressive speech reads your message out loud in a voice you choose.',
  },
  {
    icon: <Shield className="h-5 w-5 text-indigo-300" />,
    title: 'Privacy First',
    desc: 'Strong protections and local-first options keep your communications secure.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * i, duration: 0.5 } }),
};

const Features = () => {
  return (
    <section className="relative w-full bg-[#0B0E13] py-20" id="features">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-center text-3xl font-semibold text-transparent md:text-4xl"
        >
          Built for clarity, crafted for elegance
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 backdrop-blur-xl transition-transform duration-200 hover:scale-[1.02]"
            >
              <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-indigo-500/10 p-2 ring-1 ring-inset ring-indigo-400/20">
                {f.icon}
              </div>
              <h3 className="text-lg font-medium text-white">{f.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-white/60">{f.desc}</p>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(99,102,241,0.12), transparent 40%)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
