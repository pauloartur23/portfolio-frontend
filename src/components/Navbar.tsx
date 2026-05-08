import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Início', 'Sobre', 'Skills', 'Projetos', 'Contato'];
  const hrefs = ['#hero', '#sobre', '#skills', '#projetos', '#contato'];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '1rem 2rem',
      background: scrolled ? 'rgba(10,10,15,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(108,99,255,0.15)' : 'none',
      transition: 'all 0.3s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-1px' }}>
        &lt;pauloartur /&gt;
      </span>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0 }}>
        {links.map((link, i) => (
          <li key={i}>
            <a href={hrefs[i]} style={{
              color: 'var(--muted)', textDecoration: 'none', fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)', letterSpacing: '0.05em', transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >{link}</a>
          </li>
        ))}
      </ul>

      <a href="https://github.com/pauloartur23" target="_blank" rel="noreferrer" style={{
        background: 'var(--accent)', color: '#fff', padding: '0.45rem 1.2rem',
        borderRadius: '4px', textDecoration: 'none', fontSize: '0.8rem',
        fontFamily: 'var(--font-mono)', fontWeight: 700, transition: 'opacity 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      >GitHub</a>
    </nav>
  );
};

export default Navbar;
