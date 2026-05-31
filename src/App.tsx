import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SkillsGrid from './components/SkillsGrid';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsShowcase from './components/ProjectsShowcase';
import Certifications from './components/Certifications';
import ServicesPanel from './components/ServicesPanel';
import HobbiesAndGoals from './components/HobbiesAndGoals';
import GithubStats from './components/GithubStats';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  // Gentle parallax background filter movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;

      const blueOrb = document.querySelector('.orb-blue') as HTMLElement;
      const violetOrb = document.querySelector('.orb-violet') as HTMLElement;
      const orangeOrb = document.querySelector('.orb-orange') as HTMLElement;

      if (blueOrb) {
        blueOrb.style.transform = `translate(${x * 40}px, ${y * 40}px)`;
      }
      if (violetOrb) {
        violetOrb.style.transform = `translate(${-x * 30}px, ${-y * 30}px)`;
      }
      if (orangeOrb) {
        orangeOrb.style.transform = `translate(${x * 20}px, ${-y * 20}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-primary selection:text-on-primary">
      {/* Editorial atmospheric particles background */}
      <div className="parallax-bg">
        <div className="orb orb-blue" />
        <div className="orb orb-violet" />
        <div className="orb orb-orange" />
        {/* Subtle vintage newspaper grid mesh overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(26,26,26,0.5) 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      {/* Floating header navigation overlay */}
      <Header onScrollTo={handleScrollTo} />

      {/* Main Narrative Elements */}
      <main className="relative z-10">

        {/* 1. HERO SECTION */}
        <Hero onScrollTo={handleScrollTo} />

        {/* 2. ABOUT ME SECTION */}
        <About />

        {/* 3. SKILLS SECTION */}
        <SkillsGrid />

        {/* 4. EXPERIENCE SECTION */}
        <ExperienceTimeline />

        {/* 5. PROJECTS SECTION */}
        {/* <ProjectsShowcase /> */}

        {/* 8. LANGUAGES, HOBBIES, & OBJECTIVES SECTIONS */}
        <HobbiesAndGoals />

        {/* 9. GITHUB STATS SECTION */}
        <GithubStats />

        {/* 10. CONTACT SECTION & RESUME MANIFEST DISPATCH */}
        <ContactForm />

      </main>

      {/* Footer Branding Area */}
      <Footer />
    </div>
  );
}
