import React from 'react';
import { motion } from 'motion/react';
import { FileText, MessageSquare, Users, Code2, Building2, Brain } from 'lucide-react';

const programs = [
  { id: 'PROG-01', icon: FileText,     title: 'PROFESSIONAL DOCUMENTATION', desc: 'Master the art of crafting compelling resumes, cover letters, and portfolios that stand out to recruiters.', outcomes: ['Resume writing & optimization', 'LinkedIn profile building', 'Cover letter crafting', 'Portfolio development'] },
  { id: 'PROG-02', icon: MessageSquare,title: 'INTERVIEW PREPARATION',       desc: 'Comprehensive training covering technical rounds, HR interviews, group discussions, and presentation skills.', outcomes: ['Mock interview sessions', 'HR round preparation', 'Group discussion practice', 'Body language & communication'] },
  { id: 'PROG-03', icon: Users,        title: 'PEER MENTORING PROGRAM',      desc: 'Senior students and alumni guide juniors through academic challenges, career decisions, and personal growth.', outcomes: ['One-on-one mentorship', 'Alumni connect sessions', 'Career path guidance', 'Academic support'] },
  { id: 'PROG-04', icon: Code2,        title: 'TECHNICAL UPSKILLING',        desc: 'Hands-on workshops on emerging technologies, programming languages, and tools demanded by the industry.', outcomes: ['Coding bootcamps', 'Technology workshops', 'Project-based learning', 'Certification guidance'] },
  { id: 'PROG-05', icon: Building2,    title: 'INDUSTRY RELATIONS',          desc: 'Building bridges between students and industry through guest lectures, company visits, and internship drives.', outcomes: ['Guest lecture series', 'Company visits & tours', 'Internship facilitation', 'Industry networking events'] },
  { id: 'PROG-06', icon: Brain,        title: 'APTITUDE TRAINING',           desc: 'Structured training in quantitative aptitude, logical reasoning, and verbal ability for placement exams.', outcomes: ['Quantitative aptitude', 'Logical reasoning', 'Verbal ability', 'Mock placement tests'] },
];

export const Programs: React.FC = () => {
  return (
    <section id="programs" className="border-b border-white/10 bg-brutal-black overflow-hidden">
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
                CDC_INITIATIVES
              </div>
              <h2 className="font-display text-[32px] sm:text-[48px] lg:text-[72px] xl:text-[88px] leading-[1.05] tracking-[-0.01em] uppercase text-white">
                Our Training Programs.
              </h2>
            </div>
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest lg:text-right flex-shrink-0 max-w-xs">
              Six structured programs to prepare students for industry.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
        {programs.map((prog, i) => (
          <motion.div
            key={prog.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)', transition: { duration: 0.2 } }}
            className="group bg-brutal-black p-6 sm:p-8 lg:p-10 flex flex-col cursor-default"
          >
            <div className="flex items-start justify-between mb-8">
              <motion.div
                whileHover={{ scale: 1.1, borderColor: 'rgba(255,77,0,0.4)' }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="bg-white/5 border border-white/10 text-neon-orange w-12 h-12 flex items-center justify-center"
              >
                <prog.icon className="h-5 w-5" />
              </motion.div>
              <span className="font-mono text-[10px] font-bold text-white/30 tracking-[0.2em]">{prog.id}</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl mb-4 text-white leading-none tracking-tight group-hover:text-neon-orange transition-colors uppercase">
              {prog.title}
            </h3>
            <p className="text-sm font-medium text-white/50 mb-8 leading-relaxed uppercase tracking-tight flex-1">{prog.desc}</p>
            <div className="border-t border-white/10 pt-6">
              <div className="font-mono text-[9px] font-bold text-white/30 uppercase tracking-[0.3em] mb-3">KEY_OUTCOMES</div>
              <ul className="space-y-1.5">
                {prog.outcomes.map((o) => (
                  <li key={o} className="flex items-center gap-2 font-mono text-[10px] text-white/50 uppercase tracking-wide">
                    <span className="w-1 h-1 bg-neon-orange rounded-full flex-shrink-0" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
