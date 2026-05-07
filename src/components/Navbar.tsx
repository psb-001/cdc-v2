import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { logo } from '../assets/index';

const navLinks = [
  { label: 'ABOUT', href: '#about' },
  { label: 'PROGRAMS', href: '#programs' },
  { label: 'EVENTS', href: '#events' },
  { label: 'LEADERSHIP', href: '#leadership' },
  { label: 'TEAM', href: '#team' },
  { label: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-brutal-black/80 backdrop-blur-md px-6 py-4"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 group"
        >
          <img
            src={logo}
            alt="CDC Logo"
            className="h-9 w-9 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            style={{ mixBlendMode: 'screen' }}
          />
          <div>
            <div className="font-display text-xl tracking-tighter text-white leading-none">C.D.C</div>
            <div className="font-mono text-[9px] text-white/40 uppercase tracking-[0.2em] leading-none mt-0.5">MES MLCOE</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="font-mono text-[10px] font-bold tracking-[0.2em] text-white/70 hover:text-white transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="hidden md:block border border-white/20 bg-transparent px-6 py-2 font-mono text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-brutal-black"
          >
            CONNECT
          </a>
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-brutal-black px-6 pb-6 pt-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="block border-b border-white/10 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
