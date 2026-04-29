import { useEffect, useRef } from 'react';

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number;
    const mouse = { x: null as number | null, y: null as number | null };
    const COUNT = 85;
    const MAX_DIST = 140;
    // Azul que encaja con cyan/blue del portfolio pero sobre fondo claro
    const NODE_COLOR = '42, 82, 190';

    interface Node {
      x: number; y: number;
      vx: number; vy: number;
      r: number;
    }

    let W: number, H: number;
    let nodes: Node[] = [];

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const makeNode = (): Node => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.32,
      vy: (Math.random() - 0.5) * 0.32,
      r: Math.random() * 1.6 + 0.5,
    });

    const init = () => {
      resize();
      nodes = Array.from({ length: COUNT }, makeNode);
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < nodes.length; i++) {
        // Líneas entre nodos
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.15;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${NODE_COLOR}, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }

        // Líneas al ratón
        if (mouse.x !== null && mouse.y !== null) {
          const dx = nodes[i].x - mouse.x;
          const dy = nodes[i].y - mouse.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST * 1.6) {
            const alpha = (1 - d / (MAX_DIST * 1.6)) * 0.28;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${NODE_COLOR}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Nodos
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${NODE_COLOR}, 0.45)`;
        ctx.fill();
      }
    };

    const update = () => {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }
    };

    const loop = () => {
      update();
      draw();
      animFrameId = requestAnimationFrame(loop);
    };

    const onMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onMouseLeave = () => { mouse.x = null; mouse.y = null; };
    const onResize = () => resize();

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', onResize);

    init();
    loop();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};