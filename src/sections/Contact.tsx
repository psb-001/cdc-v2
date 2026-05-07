import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

const contacts = [
  { id: 'CON-01', icon: Mail,   label: 'EMAIL',   value: 'cdcclub.admin@proton.me',                  href: 'mailto:cdcclub.admin@proton.me' },
  { id: 'CON-02', icon: Phone,  label: 'PHONE',   value: '9158574903',                               href: 'tel:9158574903' },
  { id: 'CON-03', icon: MapPin, label: 'ADDRESS', value: 'CTS, 30, F.P.28, Karve Road, Pune 411004', href: 'https://maps.google.com/?q=Karve+Road+Pune+411004' },
];

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="border-b border-white/10 bg-brutal-black overflow-hidden">
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
                GET_IN_TOUCH
              </div>
              <h2 className="font-display text-[32px] sm:text-[48px] lg:text-[72px] xl:text-[88px] leading-[1.05] tracking-[-0.01em] uppercase text-white">
                Connect With Us.
              </h2>
            </div>
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest lg:text-right flex-shrink-0 max-w-xs">
              Reach out for programs, collaborations, or any queries.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
        {contacts.map((contact, i) => (
          <motion.a
            key={contact.id}
            href={contact.href}
            target={contact.label === 'ADDRESS' ? '_blank' : undefined}
            rel={contact.label === 'ADDRESS' ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)', transition: { duration: 0.2 } }}
            className="group bg-brutal-black p-8 sm:p-10 lg:p-14 flex flex-col"
          >
            <div className="flex items-start justify-between mb-10">
              <motion.div
                whileHover={{ scale: 1.1, borderColor: 'rgba(255,77,0,0.5)' }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="bg-white/5 border border-white/10 text-neon-orange w-12 h-12 flex items-center justify-center"
              >
                <contact.icon className="h-5 w-5" />
              </motion.div>
              <span className="font-mono text-[10px] font-bold text-white/30 tracking-[0.2em]">{contact.id}</span>
            </div>

            <div className="font-mono text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] mb-3">{contact.label}</div>
            <div className="font-display text-xl sm:text-2xl text-white uppercase tracking-tight group-hover:text-neon-orange transition-colors leading-tight">
              {contact.value}
            </div>

            <div className="mt-auto pt-8 border-t border-white/10" />
          </motion.a>
        ))}
      </div>
    </section>
  );
};
