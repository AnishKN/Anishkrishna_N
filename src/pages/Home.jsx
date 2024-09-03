import React from 'react'
import HeroSection from '../components/HeroSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';

function Home() {
  return (
    <div className='min-h-screen'>
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  )
}

export default Home
