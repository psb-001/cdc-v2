import React from 'react';
import { motion } from 'motion/react';
import { Compass, TrendingUp, Target, Handshake } from 'lucide-react';

const pillars = [
  { icon: Compass,    tag: 'GUID',  title: 'CAREER GUIDANCE',   desc: 'Personalized counseling and roadmaps to help students navigate their career paths with clarity.' },
  { icon: TrendingUp, tag: 'SKILL', title: 'SKILL DEVELOPMENT', desc: 'Workshops, bootcamps, and training sessions to build industry-relevant technical and soft skills.' },
  { icon: Target,     tag: 'PLACE', title: 'PLACEMENT PREP',    desc: 'Mock interviews, resume reviews, and aptitude training to prepare students for campus placements.' },
  { icon: Handshake,  tag: 'INDUS', title: 'INDUSTRY CONNECT',  desc: 'Bridging students with industry professionals through guest lectures, internships, and networking.' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="border-b border-white/10 bg-brutal-black overflow-hidden">
      <div className="border-b border-white/10 overflow-hidden">
        <div className="flex flex-col sm:flex-row">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 p-8 sm:p-12 lg:p-20 border-b sm:border-b-0 sm:border-r border-white/10"
          >
            <div className="text-neon-orange font-mono text-[10px] font-bold mb-8 tracking-[0.4em] uppercase">[ABOUT_THE_CELL]</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl leading-[1.1] tracking-tight uppercase text-white mb-6 sm:mb-8">
              NURTURING<br />ACADEMIC<br />EXCELLENCE.
            </h2>
            <p className="text-white/60 text-sm leading-relaxed uppercase font-medium mb-4 max-w-lg">
              The Career Development Cell at MES MLCOE is a student-driven initiative dedicated
              to transforming raw academic talent into industry-ready professionals.
            </p>
            <p className="text-white/60 text-sm leading-relaxed uppercase font-medium max-w-lg">
              Through structured programs, mentorship, and industry partnerships, CDC equips
              students with the skills, confidence, and connections needed to excel in today's
              competitive job market.
            </p>
          </motion.div>

          {/* Right: vision card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-2/5 p-8 sm:p-12 lg:p-20 bg-white/[0.02] flex flex-col justify-between"
          >
            <div className="font-mono text-[10px] font-bold text-white/50 uppercase tracking-[0.3em] mb-12">VISION_STATEMENT</div>
            <div>
              <div className="font-display text-5xl sm:text-6xl lg:text-7xl text-neon-orange/20 leading-none mb-4">"</div>
              <blockquote className="text-base sm:text-lg lg:text-xl font-medium text-white/70 leading-relaxed uppercase tracking-tight mb-8">
                To be the catalyst that transforms every MLCOE student into a confident,
                skilled, and industry-ready professional — ready to lead and innovate.
              </blockquote>
              <div className="font-mono text-[10px] text-white/50 uppercase tracking-widest">— CDC / MES MLCOE</div>
            </div>
            <div className="mt-12 h-px w-full bg-white/10 relative overflow-hidden">
              <motion.div
                initial={{ left: '-33.333%' }}
                animate={{ left: '133.333%' }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-neon-orange"
                style={{ width: '33.333%' }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Four pillars */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)', transition: { duration: 0.2 } }}
            className="group bg-brutal-black p-6 sm:p-8 lg:p-10 cursor-default"
          >
            <div className="text-neon-orange font-mono text-[10px] font-bold mb-6 tracking-[0.4em] uppercase">[{pillar.tag}]</div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="bg-white/5 border border-white/10 text-white w-12 h-12 flex items-center justify-center mb-6 group-hover:border-neon-orange/40 transition-colors"
            >
              <pillar.icon className="h-5 w-5" />
            </motion.div>
            <h3 className="font-display text-xl sm:text-2xl mb-4 text-white leading-none tracking-tight uppercase group-hover:text-neon-orange transition-colors">{pillar.title}</h3>
            <p className="text-sm font-medium leading-relaxed text-white/60 uppercase tracking-tight">{pillar.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
