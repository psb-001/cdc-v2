import React from 'react';
import { motion } from 'motion/react';
import { makrandJadhav, amol } from '../assets/index';

const leaders = [
  {
    id: 'LEAD-01',
    name: 'Prof. Dr. Makrand Jadhav',
    role: 'Principal',
    credentials: 'Ph.D, M.Tech',
    photo: makrandJadhav,
    quote: "The Career Development Cell represents our commitment to holistic education. Technical knowledge, combined with professional skills and the right mindset, creates engineers who don't just find jobs, they build careers and shape industries.",
  },
  {
    id: 'LEAD-02',
    name: 'Prof. Amol Ingle',
    role: 'Faculty Coordinator',
    credentials: 'CDC Faculty Coordinator',
    photo: amol,
    quote: "Our goal at CDC is simple: to ensure no student leaves MLCOE unprepared for the professional world. Through structured programs, industry exposure, and peer mentorship, we are building a generation of engineers who are confident and capable.",
  },
];

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="border-b border-white/10 bg-brutal-black">
      {/* Header */}
      <div className="border-b border-white/10 px-4 sm:px-6 py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-neon-orange font-mono text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
                <div className="h-1 w-8 bg-neon-orange" />
                WORDS_OF_WISDOM
              </div>
              <h2 className="font-display text-[32px] sm:text-[48px] lg:text-[72px] xl:text-[88px] leading-[1.05] tracking-[-0.01em] uppercase text-white">
                Leadership &amp; Guidance.
              </h2>
            </div>
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest lg:text-right flex-shrink-0 max-w-xs">
              Guiding students with wisdom, experience, and vision.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Leader cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
        {leaders.map((leader, i) => (
          <motion.div
            key={leader.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group bg-brutal-black hover:bg-white/[0.02] transition-colors"
          >
            {/* Banner */}
            <div className="relative bg-white/5 border-b border-white/10 p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="absolute top-2 right-2 font-display text-[80px] sm:text-[120px] opacity-[0.03] leading-none tracking-tighter pointer-events-none select-none">
                {leader.id.split('-')[1]}
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-white/20 overflow-hidden bg-white/10 flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={leader.photo}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = 'none';
                    const parent = img.parentElement;
                    if (parent) {
                      const span = document.createElement('span');
                      span.textContent = leader.name.split(' ').map(n => n[0]).slice(0, 2).join('');
                      span.className = 'text-white font-display text-2xl sm:text-3xl';
                      parent.appendChild(span);
                    }
                  }}
                />
              </motion.div>
              <div>
                <div className="font-mono text-[9px] font-bold text-neon-orange uppercase tracking-[0.3em] mb-1">{leader.id}</div>
                <div className="font-display text-xl sm:text-2xl text-white uppercase tracking-tight leading-none mb-1">{leader.name}</div>
                <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">{leader.role} · {leader.credentials}</div>
              </div>
            </div>

            {/* Quote */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="font-display text-4xl sm:text-5xl text-neon-orange/20 leading-none mb-4">"</div>
              <p className="text-sm font-medium text-white/60 leading-relaxed uppercase tracking-tight">{leader.quote}</p>
              <div className="mt-8 h-px w-full bg-white/10 relative overflow-hidden">
                <motion.div
                  initial={{ left: '-25%' }}
                  animate={{ left: '125%' }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 1.2, ease: 'linear' }}
                  className="absolute inset-0 bg-neon-orange"
                  style={{ width: '25%' }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
