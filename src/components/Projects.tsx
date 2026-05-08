import React, { useState } from 'react';
import { Project } from '../types';

interface Props {
  projects: Project[];
}

const projectsStatic: Project[] = [
  {
    id: 1,
    title: 'Employee Management System',
    description: 'Sistema completo de gerenciamento de funcionários em Java com Spring Boot. Cadastro, edição, listagem e remoção de colaboradores com persistência em banco de dados.',
    technologies: 'Java · Spring Boot · JPA · REST API · Maven',
    githubUrl: 'https://github.com/pauloartur23/employee-management-system',
    category: 'Java',
    featured: true,
  },
  {
    id: 2,
    title: 'Gerenciamento de Ingressos Full Stack',
    description: 'Aplicação full stack para gerenciamento e venda de ingressos. Back-end em Java com Spring Boot e controle de eventos e disponibilidade.',
    technologies: 'Java · Spring Boot · JPA · REST API · Full Stack',
    githubUrl: 'https://github.com/pauloartur23/gerenciamento-ingressos-fullstack',
    category: 'Full Stack',
    featured: true,
  },
  {
    id: 3,
    title: 'Universal Data Converter',
    description: 'Ferramenta Java para conversão universal de dados entre diferentes formatos. Solução robusta e reutilizável para transformação e processamento de dados.',
    technologies: 'Java · Spring Boot · Maven · REST API',
    githubUrl: 'https://github.com/pauloartur23/universal-data-converter',
    category: 'Java',
    featured: true,
  },
  {
    id: 4,
    title: 'CondoDesk Dunnas',
    description: 'Sistema de gestão condominial em Java. Controle de moradores, reservas, ocorrências e comunicados para facilitar a administração de condomínios.',
    technologies: 'Java · Spring Boot · JPA · MySQL · Maven',
    githubUrl: 'https://github.com/pauloartur23/condodesk-dunnas',
    category: 'Java',
    featured: true,
  },
  {
    id: 5,
    title: 'App Delivery React',
    description: 'Aplicação de delivery com React e JavaScript. Interface moderna para listagem de produtos, carrinho de compras e fluxo de pedidos.',
    technologies: 'JavaScript · React · CSS · HTML',
    githubUrl: 'https://github.com/pauloartur23/app-delivery-react',
    category: 'Frontend',
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Java: '#6c63ff',
  'Full Stack': '#ff6584',
  Frontend: '#43e97b',
  Web: '#f9ca24',
};

const Projects: React.FC<Props> = ({ projects }) => {
  const [filter, setFilter] = useState('Todos');
  const data = projects.length > 0 ? projects : projectsStatic;
  const categories = ['Todos', ...Array.from(new Set(data.map(p => p.category)))];
  const filtered = filter === 'Todos' ? data : data.filter(p => p.category === filter);

  return (
    <section id="projetos" style={{ padding: '8rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.2em', marginBottom: '1rem' }}>
        03. PROJETOS
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>
          Projetos em <span style={{ color: 'var(--accent)' }}>Destaque</span>
        </h2>
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} style={{
              background: filter === cat ? 'var(--accent)' : 'transparent',
              color: filter === cat ? '#fff' : 'var(--muted)',
              border: `1.5px solid ${filter === cat ? 'var(--accent)' : 'var(--border)'}`,
              padding: '0.35rem 1rem', borderRadius: '20px', cursor: 'pointer',
              fontFamily: 'var(--font-mono)', fontSize: '0.75rem', transition: 'all 0.2s',
            }}>{cat}</button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {filtered.map((project, i) => {
          const color = categoryColors[project.category] || 'var(--accent)';
          return (
            <div key={project.id} style={{
              background: 'var(--card-bg)', border: '1px solid var(--border)',
              borderRadius: '12px', overflow: 'hidden', backdropFilter: 'blur(8px)',
              transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s',
              display: 'flex', flexDirection: 'column',
              animation: `fadeUp 0.5s ease ${i * 0.1}s both`,
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.transform = 'translateY(-6px)';
              el.style.borderColor = color;
              el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.transform = 'translateY(0)';
              el.style.borderColor = 'var(--border)';
              el.style.boxShadow = 'none';
            }}
            >
              <div style={{ height: '6px', background: `linear-gradient(90deg, ${color}, ${color}44)` }} />
              <div style={{ padding: '1.8rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.1em',
                    color, border: `1px solid ${color}44`,
                    padding: '0.25rem 0.75rem', borderRadius: '20px', textTransform: 'uppercase',
                  }}>{project.category}</span>
                  {project.featured && (
                    <span style={{
                      marginLeft: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                      color: '#f9ca24', border: '1px solid #f9ca2444',
                      padding: '0.25rem 0.75rem', borderRadius: '20px',
                    }}>★ Destaque</span>
                  )}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.8rem', lineHeight: 1.3 }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.7, flex: 1, marginBottom: '1.5rem' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {project.technologies.split('·').map((tech, ti) => (
                    <span key={ti} style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                      background: 'var(--bg3)', color: 'var(--muted)',
                      padding: '0.2rem 0.6rem', borderRadius: '4px',
                    }}>{tech.trim()}</span>
                  ))}
                </div>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" style={{
                  textAlign: 'center', background: color, color: '#fff', padding: '0.6rem',
                  borderRadius: '6px', textDecoration: 'none',
                  fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >Ver no GitHub ↗</a>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a href="https://github.com/pauloartur23" target="_blank" rel="noreferrer" style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent)',
          textDecoration: 'none', borderBottom: '1px solid var(--accent)', paddingBottom: '2px',
        }}>Ver todos os repositórios no GitHub →</a>
      </div>
    </section>
  );
};

export default Projects;

