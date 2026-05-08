import React from 'react';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { govind, prathamesh, aayush, atharv, mohil, ayush, dnyanratna, gourish} from '../assets/index';

const team = [
  { id: 'MBR-01', name: 'Govind Gandhi',       role: 'President',            photo: govind,      linkedin: '#', email: '#' },
  { id: 'MBR-02', name: 'Prathamesh Bhujbal',  role: 'Head of Software',     photo: prathamesh,  linkedin: '#', email: '#' },
  { id: 'MBR-03', name: 'Aayush Kandhare',     role: 'Secretary',            photo: aayush,      linkedin: '#', email: '#' },
  { id: 'MBR-04', name: 'Atharv Chougule',     role: 'Head of Finance',      photo: atharv,      linkedin: '#', email: '#' },
  { id: 'MBR-05', name: 'Mohil Kamble',        role: 'Head of Hardware',     photo: mohil,       linkedin: '#', email: '#' },
  { id: 'MBR-06', name: 'Ayush Nimbare',       role: 'Digital & Media',      photo: ayush,       linkedin: '#', email: '#' },
  { id: 'MBR-07', name: 'Dnyanratna Mathpati', role: 'Head of Social Media', photo: dnyanratna,  linkedin: '#', email: '#' },
  { id: 'MBR-08', name: 'Gourish Katkar', role: 'Head of Communications/Outreach', photo: gourish,  linkedin: '#', email: '#' },
];

const getInitials = (name: string) => name.split(' ').map(n => n[0]).slice(0, 2).join('');

const MemberCard: React.FC<{ member: typeof team[0]; index: number }> = ({ member, index }) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-brutal-black p-6 sm:p-8 hover:bg-white/[0.03] flex flex-col items-center text-center cursor-default transition-colors"
    >
      <motion.div
        whileHover={{ scale: 1.06, borderColor: 'rgba(255,77,0,0.5)' }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-white/20 overflow-hidden bg-white/5 flex items-center justify-center mb-5 flex-shrink-0"
      >
        {!imgError ? (
          <img src={member.photo} alt={member.name} className="w-full h-full object-cover" onError={() => setImgError(true)} />
        ) : (
          <span className="font-display text-2xl text-white">{getInitials(member.name)}</span>
        )}
      </motion.div>

      <div className="font-mono text-[9px] font-bold text-neon-orange uppercase tracking-[0.3em] mb-1">{member.id}</div>
      <div className="font-display text-lg text-white uppercase tracking-tight leading-tight mb-1 group-hover:text-neon-orange transition-colors">{member.name}</div>
      <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-5">{member.role}</div>

      <div className="flex gap-2">
        <a
          href={member.linkedin}
          aria-label={`${member.name} LinkedIn`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/40 hover:border-neon-orange hover:text-neon-orange transition-colors"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a
          href={member.email}
          aria-label={`${member.name} Email`}
          className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/40 hover:border-neon-orange hover:text-neon-orange transition-colors"
        >
          <Mail className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
};

export const Team: React.FC = () => {
  return (
    <section id="team" className="border-b border-white/10 bg-brutal-black overflow-hidden">
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
                OUR_LEADERSHIP
              </div>
              <h2 className="font-display text-[32px] sm:text-[48px] lg:text-[72px] xl:text-[88px] leading-[1.05] tracking-[-0.01em] uppercase text-white">
                The CDC Team.
              </h2>
            </div>
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest lg:text-right flex-shrink-0 max-w-xs">
              Seven members driving career development at MLCOE.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10">
        {team.map((member, i) => (
          <MemberCard key={member.id} member={member} index={i} />
        ))}
      </div>
    </section>
  );
};
