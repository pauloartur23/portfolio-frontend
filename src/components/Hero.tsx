import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; alpha: number; size: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.1,
        size: Math.random() * 2 + 0.5,
      });
    }

    let frame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(108,99,255,${p.alpha})`;
        ctx.fill();
      });
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(108,99,255,${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      frame = requestAnimationFrame(animate);
    };
    animate();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', handleResize); };
  }, []);

  return (
    <section id="hero" style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
    }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      {/* Glowing orb */}
      <div style={{
        position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)',
        top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        animation: 'glow-pulse 4s ease-in-out infinite',
        zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '2rem' }}>
        {/* Tag line */}
        <p className="fade-up fade-up-1" style={{
          fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.85rem',
          letterSpacing: '0.2em', marginBottom: '1.5rem', textTransform: 'uppercase',
        }}>
          {'// Desenvolvedor Java · Back-end · Full Stack'}
        </p>

        <h1 className="fade-up fade-up-2" style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(2.8rem, 7vw, 6rem)', lineHeight: 1.05,
          letterSpacing: '-0.03em', marginBottom: '0.5rem',
        }}>
          Paulo Artur
        </h1>
        <h1 className="fade-up fade-up-3" style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(2.8rem, 7vw, 6rem)', lineHeight: 1.05,
          letterSpacing: '-0.03em', marginBottom: '2rem',
          WebkitTextStroke: '1.5px var(--accent)',
          color: 'transparent',
        }}>
          Aragão Sousa
        </h1>

        <p className="fade-up fade-up-4" style={{
          color: 'var(--muted)', fontSize: '1.05rem', maxWidth: '480px',
          margin: '0 auto 3rem', lineHeight: 1.7, fontFamily: 'var(--font-display)',
        }}>
          Estudante de desenvolvimento apaixonado por construir soluções robustas com
          Java & Spring Boot. Explorando o universo Back-end com código limpo e arquiteturas sólidas.
        </p>

        <div className="fade-up fade-up-5" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projetos" style={{
            background: 'var(--accent)', color: '#fff', padding: '0.85rem 2.2rem',
            borderRadius: '4px', textDecoration: 'none', fontWeight: 700,
            fontSize: '0.9rem', fontFamily: 'var(--font-mono)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--glow)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >Ver Projetos →</a>

          <a href="https://www.linkedin.com/in/paulo-artur-a96899297/" target="_blank" rel="noreferrer" style={{
            border: '1.5px solid var(--border)', color: 'var(--text)', padding: '0.85rem 2.2rem',
            borderRadius: '4px', textDecoration: 'none', fontWeight: 700,
            fontSize: '0.9rem', fontFamily: 'var(--font-mono)', background: 'transparent',
            transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; }}
          >LinkedIn</a>
        </div>

        {/* Scroll indicator */}
        <div style={{ marginTop: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.15em' }}>SCROLL</span>
          <div style={{
            width: '1px', height: '50px',
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
            animation: 'pulse 2s ease-in-out infinite',
          }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
