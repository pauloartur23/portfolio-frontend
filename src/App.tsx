import React, { useEffect, useState } from 'react';
import './styles/global.css';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Project, Skill } from './types';
import { api } from './services/api';

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    api.getProjects().then(setProjects).catch(() => setProjects([]));
    api.getSkills().then(setSkills).catch(() => setSkills([]));
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact />
      </main>
    </>
  );
};

export default App;
