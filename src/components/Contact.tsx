import React from 'react';

const Contact: React.FC = () => {
  const links = [
    {
      label: 'GitHub',
      desc: 'github.com/pauloartur23',
      url: 'https://github.com/pauloartur23',
      color: '#fff',
      icon: '⌥',
    },
    {
      label: 'LinkedIn',
      desc: 'Paulo Artur Aragão Sousa',
      url: 'https://www.linkedin.com/in/paulo-artur-a96899297/',
      color: '#0a66c2',
      icon: 'in',
    },
  ];

  return (
    <section id="contato" style={{
      padding: '8rem 2rem 6rem',
      background: 'linear-gradient(to bottom, transparent, rgba(108,99,255,0.04))',
    }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.2em', marginBottom: '1rem' }}>
          04. CONTATO
        </p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
          Vamos construir algo<br />
          <span style={{ color: 'var(--accent)' }}>juntos?</span>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '3.5rem' }}>
          Estou aberto a oportunidades, projetos e colaborações. Me encontre nas redes abaixo!
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
          {links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: '1rem',
              background: 'var(--card-bg)', border: '1px solid var(--border)',
              borderRadius: '12px', padding: '1.5rem 2rem', textDecoration: 'none',
              transition: 'all 0.3s', backdropFilter: 'blur(8px)', minWidth: '220px',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = link.color === '#fff' ? 'var(--accent)' : link.color;
              el.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = 'var(--border)';
              el.style.transform = 'translateY(0)';
            }}
            >
              <div style={{
                width: '44px', height: '44px', borderRadius: '8px',
                background: 'var(--bg3)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 800,
                color: link.color === '#0a66c2' ? '#0a66c2' : 'var(--accent)',
              }}>
                {link.icon}
              </div>
              <div style={{ textAlign: 'left' }}>
                <p style={{ color: 'var(--text)', fontWeight: 700, fontFamily: 'var(--font-display)', marginBottom: '2px' }}>{link.label}</p>
                <p style={{ color: 'var(--muted)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>{link.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ textAlign: 'center', borderTop: '1px solid var(--border)', paddingTop: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--muted)' }}>
          Desenvolvido por{' '}
          <span style={{ color: 'var(--accent)' }}>Paulo Artur Aragão Sousa</span>
          {' '} · Java + Spring Boot · React + TypeScript
        </p>
      </div>
    </section>
  );
};

export default Contact;
