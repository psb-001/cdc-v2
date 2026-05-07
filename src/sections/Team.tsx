import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';
import { govind, prathamesh, aayush, atharv, mohil, ayush, dnyanratna } from '../assets/index';

const team = [
  { id: 'MBR-01', name: 'Govind Gandhi',       role: 'President',            photo: govind,      linkedin: '#', email: '#' },
  { id: 'MBR-02', name: 'Prathamesh Bhujbal',  role: 'Head of Software',     photo: prathamesh,  linkedin: '#', email: '#' },
  { id: 'MBR-03', name: 'Aayush Kandhare',     role: 'Secretary',            photo: aayush,      linkedin: '#', email: '#' },
  { id: 'MBR-04', name: 'Atharv Chougule',     role: 'Head of Finance',      photo: atharv,      linkedin: '#', email: '#' },
  { id: 'MBR-05', name: 'Mohil Kamble',        role: 'Head of Hardware',     photo: mohil,       linkedin: '#', email: '#' },
  { id: 'MBR-06', name: 'Ayush Nimbare',       role: 'Digital & Media',      photo: ayush,       linkedin: '#', email: '#' },
  { id: 'MBR-07', name: 'Dnyanratna Mathpati', role: 'Head of Social Media', photo: dnyanratna,  linkedin: '#', email: '#' },
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
      whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)', transition: { duration: 0.2 } }}
      className="group bg-brutal-black p-6 sm:p-8 flex flex-col items-center text-center cursor-default"
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
        <motion.a
          href={member.linkedin}
          aria-label={`${member.name} LinkedIn`}
          whileHover={{ scale: 1.15, borderColor: '#FF4D00', color: '#FF4D00' }}
          transition={{ type: 'spring', stiffness: 400 }}
          className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/40"
        >
          <Linkedin className="w-3.5 h-3.5" />
        </motion.a>
        <motion.a
          href={member.email}
          aria-label={`${member.name} Email`}
          whileHover={{ scale: 1.15, borderColor: '#FF4D00', color: '#FF4D00' }}
          transition={{ type: 'spring', stiffness: 400 }}
          className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/40"
        >
          <Mail className="w-3.5 h-3.5" />
        </motion.a>
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
