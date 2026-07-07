import { useEffect, useRef, useState, type ReactNode, type MouseEvent as ReactMouseEvent } from "react";

/* ---------------- Reveal on scroll ---------------- */
export function Reveal({
  children,
  delay = 0,
  className = "",
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
      }}
      className={`transition-all duration-700 ease-out ${shown ? "opacity-100" : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------------- Typewriter ---------------- */
export function Typewriter({ phrases, className = "" }: { phrases: string[]; className?: string }) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[i % phrases.length];
    const speed = deleting ? 35 : 70;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setI((v) => v + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i, phrases]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[2px] h-[1em] align-middle bg-primary ml-1 animate-pulse" />
    </span>
  );
}

/* ---------------- Magnetic button wrapper ---------------- */
export function Magnetic({ children, strength = 0.35, className = "" }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };
  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-block transition-transform duration-300 ease-out will-change-transform ${className}`}
      ref={ref}
    >
      {children}
    </div>
  );
}

/* ---------------- Particle background ---------------- */
export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.scale(dpr, dpr);

    const COUNT = Math.min(90, Math.floor((w * h) / 22000));
    const mouse = { x: w / 2, y: h / 2 };
    const parts = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.4,
    }));

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);

    const loop = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d = Math.hypot(dx, dy);
        if (d < 130) {
          const f = (130 - d) / 130;
          p.x += (dx / d) * f * 0.8;
          p.y += (dy / d) * f * 0.8;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(140, 240, 200, 0.55)";
        ctx.fill();
      }
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const a = parts[i];
          const b = parts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 110) {
            ctx.strokeStyle = `rgba(140, 240, 200, ${((110 - d) / 110) * 0.15})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 opacity-70" />;
}
