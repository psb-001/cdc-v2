import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';
import { logo } from '../assets/index';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-brutal-black min-h-screen flex items-center justify-center px-4 sm:px-6">
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-6 lg:grid-cols-12 grid-rows-6 opacity-10">
        {Array.from({ length: 72 }).map((_, i) => (
          <div key={i} className="border-r border-b border-white/10 h-full w-full" />
        ))}
      </div>

      {/* Floating animated dots */}
      {[
        { top: '15%', left: '8%' },
        { top: '25%', right: '10%' },
        { bottom: '30%', left: '6%' },
        { top: '60%', right: '8%' },
        { bottom: '15%', right: '20%' },
        { bottom: '20%', left: '25%' },
      ].map((pos, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -14, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 3 + i * 0.6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-1.5 h-1.5 rounded-full bg-neon-orange pointer-events-none"
          style={pos as React.CSSProperties}
        />
      ))}

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full py-20 sm:py-24 gap-5 sm:gap-6">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={logo}
            alt="MES MLCOE Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
            style={{ mixBlendMode: 'screen' }}
          />
        </motion.div>

        {/* College badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="inline-flex items-center gap-2 border border-white/15 px-4 py-1.5 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-white/50"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-neon-orange animate-pulse" />
          MES Mukunddas Lohia College of Engineering, Pune
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[48px] sm:text-[68px] md:text-[84px] lg:text-[100px] leading-[1.05] tracking-[-0.02em] uppercase text-white"
        >
          CAREER<br />
          <span className="text-neon-orange">DEVELOPMENT</span><br />
          CELL
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-12 h-0.5 bg-neon-orange"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-white/60"
        >
          Preparing Students for{' '}
          <span className="text-neon-orange">Professional Success</span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42 }}
          className="text-sm sm:text-base text-white/40 leading-relaxed max-w-lg font-medium"
        >
          CDC at MLCOE acts as a bridge between academic learning and industry
          requirements, fostering professional growth through structured training
          and placement support.
        </motion.p>

        {/* Address chip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 border border-white/10 px-4 py-2 font-mono text-[10px] text-white/30 uppercase tracking-widest"
        >
          <MapPin size={10} className="text-neon-orange flex-shrink-0" />
          S. No.1, Abasaheb Garware College, Garware Campus, Karve Rd, Pune — 411004
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <button
            onClick={() => document.querySelector('#programs')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-neon-orange px-7 sm:px-8 py-3 sm:py-4 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-brutal-black transition-all"
          >
            Explore Programs
            <ArrowRight size={14} />
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-white/20 hover:border-white px-7 sm:px-8 py-3 sm:py-4 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-white transition-all"
          >
            Connect
          </button>
        </motion.div>

      </div>
    </section>
  );
};
