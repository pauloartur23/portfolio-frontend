import React from 'react';

const About: React.FC = () => {
  const stats = [
    { value: 'Java', label: 'Linguagem Principal' },
    { value: 'Spring', label: 'Framework' },
    { value: 'REST', label: 'APIs' },
    { value: 'JPA', label: 'Persistência' },
  ];

  return (
    <section id="sobre" style={{ padding: '8rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>

        {/* Left: text */}
        <div>
          <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.2em', marginBottom: '1rem' }}>
            01. SOBRE MIM
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '2rem' }}>
            Construindo o futuro<br />
            <span style={{ color: 'var(--accent)' }}>uma linha por vez</span>
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1rem' }}>
            Sou Paulo Artur, desenvolvedor em formação com foco em desenvolvimento Back-end com
            Java e Spring Boot. Estou construindo minha carreira com projetos práticos que
            consolidam o aprendizado em APIs RESTful, persistência de dados e arquiteturas modernas.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '1rem' }}>
            Acredito que código bem escrito é a base de qualquer bom produto.
            Estou sempre buscando aprender novas tecnologias e contribuir com projetos reais.
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            <a href="https://github.com/pauloartur23" target="_blank" rel="noreferrer" style={linkStyle('#fff', 'var(--bg3)', '1.5px solid var(--border)')}>
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/paulo-artur-a96899297/" target="_blank" rel="noreferrer" style={linkStyle('var(--accent)', 'transparent', '1.5px solid var(--accent)')}>
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Right: stats grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              background: 'var(--card-bg)', border: '1px solid var(--border)',
              borderRadius: '8px', padding: '1.8rem 1.5rem', backdropFilter: 'blur(8px)',
              transition: 'border-color 0.3s, transform 0.3s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--accent)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
            >
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '0.4rem' }}>{s.value}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.05em' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const linkStyle = (color: string, bg: string, border: string): React.CSSProperties => ({
  color, background: bg, border, padding: '0.6rem 1.5rem',
  borderRadius: '4px', textDecoration: 'none', fontSize: '0.85rem',
  fontFamily: 'var(--font-mono)', fontWeight: 700, transition: 'opacity 0.2s',
});

export default About;
