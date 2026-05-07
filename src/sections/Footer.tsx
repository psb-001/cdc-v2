import React from 'react';
import { logo } from '../assets/index';

const footerLinks = [
  { label: 'ABOUT',    href: '#about' },
  { label: 'PROGRAMS', href: '#programs' },
  { label: 'EVENTS',   href: '#events' },
  { label: 'TEAM',     href: '#team' },
  { label: 'CONTACT',  href: '#contact' },
];

export const Footer: React.FC = () => {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/10 bg-brutal-black px-4 sm:px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* Brand */}
          <div className="sm:col-span-2 space-y-6">
            <div className="flex items-center gap-3 border-l-2 border-neon-orange pl-4">
              <img src={logo} alt="CDC Logo" className="h-10 w-10 object-contain opacity-90" style={{ mixBlendMode: 'screen' }} />
              <div>
                <div className="font-display text-2xl tracking-tighter text-white leading-none">CDC</div>
                <div className="font-mono text-[9px] text-neon-orange uppercase tracking-[0.2em]">MES MLCOE · PUNE</div>
              </div>
            </div>
            <p className="max-w-md font-mono text-xs font-medium leading-relaxed text-white/50 uppercase tracking-wider">
              Career Development Cell at MES Mukunddas Lohia College of Engineering, Pune.
              Empowering students with skills, guidance, and industry connections to build
              successful careers.
            </p>
            {/* Orange accent line */}
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-neon-orange" />
              <span className="font-mono text-[9px] text-neon-orange uppercase tracking-[0.3em]">Est. 2025</span>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase text-neon-orange mb-6">QUICK_LINKS</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="font-mono text-[11px] font-bold text-white/50 hover:text-neon-orange transition-colors uppercase tracking-widest flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-neon-orange transition-all duration-200 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase text-neon-orange mb-6">CONTACT</h4>
            <div className="space-y-3 font-mono text-[11px] text-white/50">
              <div className="hover:text-neon-orange transition-colors cursor-default">cdcclub.admin@proton.me</div>
              <div className="hover:text-neon-orange transition-colors cursor-default">9158574903</div>
              <div className="leading-relaxed text-white/30">
                CTS, 30, F.P.28,<br />
                Karve Road, Pune 411004
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-2">
          <div className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-white/30">
            © 2026 <span className="text-neon-orange">Career Development Cell</span>, MES MLCOE
          </div>
          <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/20">
            Karve Rd, Pune — 411004
          </div>
        </div>
      </div>
    </footer>
  );
};
