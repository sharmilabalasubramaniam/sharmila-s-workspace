'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, MapPin, ChevronDown } from 'lucide-react';
import { site } from '@/data/site';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12, delayChildren: prefersReducedMotion ? 0 : 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative overflow-hidden py-24 md:py-32" aria-labelledby="hero-heading">
      {/* Data-inspired SVG background */}
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div className="absolute inset-0 bg-radial-accent" aria-hidden="true" />
      <svg
        className="absolute left-0 top-0 h-full w-full opacity-[0.07]"
        aria-hidden="true"
        viewBox="0 0 800 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7C6CF6" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
        {/* Network nodes */}
        <circle cx="120" cy="150" r="4" fill="url(#lineGrad)" />
        <circle cx="300" cy="80" r="3" fill="url(#lineGrad)" />
        <circle cx="500" cy="200" r="5" fill="url(#lineGrad)" />
        <circle cx="650" cy="100" r="3" fill="url(#lineGrad)" />
        <circle cx="200" cy="350" r="4" fill="url(#lineGrad)" />
        <circle cx="450" cy="420" r="3" fill="url(#lineGrad)" />
        <circle cx="700" cy="380" r="5" fill="url(#lineGrad)" />
        <circle cx="350" cy="500" r="3" fill="url(#lineGrad)" />
        {/* Connecting lines */}
        <line x1="120" y1="150" x2="300" y2="80" stroke="url(#lineGrad)" strokeWidth="1" />
        <line x1="300" y1="80" x2="500" y2="200" stroke="url(#lineGrad)" strokeWidth="1" />
        <line x1="500" y1="200" x2="650" y2="100" stroke="url(#lineGrad)" strokeWidth="1" />
        <line x1="200" y1="350" x2="450" y2="420" stroke="url(#lineGrad)" strokeWidth="1" />
        <line x1="450" y1="420" x2="700" y2="380" stroke="url(#lineGrad)" strokeWidth="1" />
        <line x1="500" y1="200" x2="450" y2="420" stroke="url(#lineGrad)" strokeWidth="1" />
        <line x1="350" y1="500" x2="200" y2="350" stroke="url(#lineGrad)" strokeWidth="1" />
        {/* Data bars */}
        <rect x="560" y="450" width="12" height="40" rx="2" fill="url(#lineGrad)" opacity="0.5" />
        <rect x="580" y="430" width="12" height="60" rx="2" fill="url(#lineGrad)" opacity="0.5" />
        <rect x="600" y="470" width="12" height="20" rx="2" fill="url(#lineGrad)" opacity="0.5" />
        <rect x="620" y="420" width="12" height="70" rx="2" fill="url(#lineGrad)" opacity="0.5" />
        <rect x="640" y="460" width="12" height="30" rx="2" fill="url(#lineGrad)" opacity="0.5" />
      </svg>

      <div className="container-page relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          {/* Availability + location badges */}
          <motion.div variants={item} className="mb-6 flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface/50 px-4 py-1.5 text-content">
              <span className="relative flex h-2 w-2">
                {!prefersReducedMotion && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                )}
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              Open to freelance projects
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted">
              <MapPin size={15} /> Chennai, India
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="heading-xl"
          >
            Build modern websites and{' '}
            <span className="text-gradient">intelligent digital solutions.</span>
          </motion.h1>

          <motion.p variants={item} className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            {site.subheadline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/projects" className="btn-primary">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="/contact" className="btn-secondary">
              Book a Free Consultation
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 flex justify-center"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-1 text-muted/50">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown size={18} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
