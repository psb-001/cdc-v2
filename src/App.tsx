import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './sections/Hero.tsx';
import { About } from './sections/About.tsx';
import { Programs } from './sections/Programs.tsx';
import { Events } from './sections/Events.tsx';
import { Leadership } from './sections/Leadership.tsx';
import { Team } from './sections/Team.tsx';
import { Contact } from './sections/Contact.tsx';
import { Footer } from './sections/Footer.tsx';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Events />
        <Leadership />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
