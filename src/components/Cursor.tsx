import React, { useEffect, useRef } from 'react';

const Cursor: React.FC = () => {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ringX = 0, ringY = 0;
    let dotX = 0, dotY = 0;
    let animFrame: number;

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
    };
    window.addEventListener('mousemove', onMove);

    const animate = () => {
      ringX += (dotX - ringX) * 0.12;
      ringY += (dotY - ringY) * 0.12;
      if (dot.current) {
        dot.current.style.left = `${dotX - 6}px`;
        dot.current.style.top = `${dotY - 6}px`;
      }
      if (ring.current) {
        ring.current.style.left = `${ringX - 18}px`;
        ring.current.style.top = `${ringY - 18}px`;
      }
      animFrame = requestAnimationFrame(animate);
    };
    animate();

    const onEnter = () => { if (ring.current) ring.current.style.transform = 'scale(1.6)'; };
    const onLeave = () => { if (ring.current) ring.current.style.transform = 'scale(1)'; };
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
};

export default Cursor;
