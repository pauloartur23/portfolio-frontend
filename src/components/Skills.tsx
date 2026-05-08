import React, { useEffect, useRef, useState } from 'react';
import { Skill } from '../types';

interface Props {
  skills: Skill[];
}

const skillsStatic = [
  { name: 'Java', category: 'Backend', proficiencyLevel: 80 },
  { name: 'Spring Boot', category: 'Backend', proficiencyLevel: 70 },
  { name: 'JPA / Hibernate', category: 'Backend', proficiencyLevel: 65 },
  { name: 'REST API', category: 'Backend', proficiencyLevel: 75 },
  { name: 'Maven', category: 'Backend', proficiencyLevel: 70 },
  { name: 'React', category: 'Frontend', proficiencyLevel: 60 },
  { name: 'TypeScript', category: 'Frontend', proficiencyLevel: 55 },
  { name: 'HTML / CSS', category: 'Frontend', proficiencyLevel: 75 },
  { name: 'JavaScript', category: 'Frontend', proficiencyLevel: 65 },
  { name: 'Git / GitHub', category: 'Ferramentas', proficiencyLevel: 75 },
  { name: 'MySQL', category: 'Banco de Dados', proficiencyLevel: 65 },
  { name: 'H2 Database', category: 'Banco de Dados', proficiencyLevel: 70 },
];

const categories = ['Backend', 'Frontend', 'Ferramentas', 'Banco de Dados'];

const categoryColors: Record<string, string> = {
  Backend: '#6c63ff',
  Frontend: '#ff6584',
  Ferramentas: '#43e97b',
  'Banco de Dados': '#f9ca24',
};

const Skills: React.FC<Props> = ({ skills }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const data = skills.length > 0 ? skills : skillsStatic;

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} style={{ padding: '8rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.2em', marginBottom: '1rem' }}>
        02. HABILIDADES
      </p>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '3.5rem' }}>
        Stack & <span style={{ color: 'var(--accent)' }}>Tecnologias</span>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
        {categories.map(cat => {
          const catSkills = data.filter(s => s.category === cat);
          if (!catSkills.length) return null;
          const color = categoryColors[cat] || 'var(--accent)';
          return (
            <div key={cat} style={{
              background: 'var(--card-bg)', border: '1px solid var(--border)',
              borderRadius: '12px', padding: '2rem', backdropFilter: 'blur(8px)',
              transition: 'border-color 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = color)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.15em', color, marginBottom: '1.5rem', textTransform: 'uppercase' }}>
                {cat}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {catSkills.map((skill, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 600 }}>{skill.name}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)' }}>{skill.proficiencyLevel}%</span>
                    </div>
                    <div style={{ height: '4px', background: 'var(--bg3)', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{
                        height: '100%', borderRadius: '2px',
                        background: `linear-gradient(90deg, ${color}, ${color}88)`,
                        width: visible ? `${skill.proficiencyLevel}%` : '0%',
                        transition: `width 1s ease ${i * 0.1}s`,
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
