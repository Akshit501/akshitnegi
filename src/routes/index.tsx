import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Download,
  Sparkles,
  Code2,
  Server,
  Database,
  Shield,
  Cloud,
  Award,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { CursorTracker } from "@/components/CursorTracker";
import { Reveal, Typewriter, Magnetic, ParticleField } from "@/components/PortfolioBits";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akshit Negi — Technical Product Manager" },
      {
        name: "description",
        content:
          "Portfolio of Akshit Negi — Aspiring Technical Product Manager and Backend Developer Intern at Techugo. Scoping AI-enhanced, real-time products from technical spec to shipped feature.",
      },
      { name: "author", content: "Akshit Negi" },
      { name: "keywords", content: "Akshit Negi, Technical Product Manager, TPM, AI Product Manager, Product Strategy, Node.js, MongoDB, API Design, Portfolio, India" },
      { property: "og:title", content: "Akshit Negi — Technical Product Manager" },
      { property: "og:description", content: "Scoping AI-enhanced, real-time products from technical spec to shipped feature. Product strategy · System architecture · LLM integration." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Akshit Negi — Technical Product Manager" },
      { name: "twitter:description", content: "Scoping AI-enhanced, real-time products from technical spec to shipped feature." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Akshit Negi",
          jobTitle: "Technical Product Manager",
          email: "mailto:akshitnegi501@gmail.com",
          telephone: "+91-9625194401",
          address: { "@type": "PostalAddress", addressLocality: "Ghaziabad", addressRegion: "UP", addressCountry: "IN" },
          sameAs: ["https://github.com/Akshit501", "https://linkedin.com/in/akshit-negi-9533582b0"],
          knowsAbout: ["Product Strategy", "AI & LLM Product Scoping", "System Architecture", "Roadmap Planning", "Agile", "Node.js", "MongoDB", "REST APIs", "WebRTC"],
        }),
      },
    ],
  }),
  component: Portfolio,
});

/* ---------------- Data ---------------- */

const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const skillsWithLevel = [
  { name: "Product & Technical Scoping", level: 92 },
  { name: "AI / LLM Integration", level: 90 },
  { name: "System Architecture & API Design", level: 90 },
  { name: "Roadmap & Prioritization (RICE, MoSCoW)", level: 85 },
  { name: "Agile Sprints & Delivery", level: 85 },
  { name: "Database Design & Optimization", level: 88 },
  { name: "Real-time Protocols (WebRTC, Sockets)", level: 78 },
  { name: "Data-Driven Decision Making", level: 84 },
  { name: "User Research & Competitor Analysis", level: 78 },
  { name: "Cross-functional Collaboration", level: 88 },
];

const floatingTech = [
  "Product Strategy", "LLM Integration", "Prompt Engineering", "RICE", "MoSCoW",
  "Roadmapping", "AI Agents", "Antigravity", "API Design", "WebRTC", "MongoDB",
  "User Research", "Agile Sprints", "System Architecture", "Node.js", "Postman",
  "Claude", "Gemini", "Cursor", "Human-Centered Design",
];

const skillGroups = [
  { icon: Sparkles, title: "AI & Automation", items: ["Gemini", "Claude", "Antigravity", "GitHub Copilot", "Cursor", "OpenAI Codex", "AI Agents", "Prompt Engineering", "Process Automation"] },
  { icon: Code2, title: "Product Strategy & Agile", items: ["Roadmap Planning", "Competitor Analysis", "User Research", "RICE / MoSCoW Prioritization", "Agile Sprints"] },
  { icon: Server, title: "Backend & APIs", items: ["Node.js", "Express.js", "RESTful APIs", "Socket.IO", "WebRTC", "Cron Jobs", "JWT"] },
  { icon: Database, title: "Databases & Data", items: ["MongoDB (Aggregation & Schema Design)", "MySQL", "Firebase (Real-time DB, Auth)", "Performance Tuning"] },
  { icon: Shield, title: "Frontend & UX", items: ["React.js", "JavaScript", "HTML5", "CSS3", "Wireframing", "Human-Centered Design"] },
  { icon: Cloud, title: "Platforms & Tools", items: ["Git", "MongoDB Atlas", "Render", "Vercel", "Postman", "VS Code"] },
];

const experiences = [
  {
    role: "Backend Developer Intern",
    company: "Techugo",
    period: "March 2026 – Present",
    points: [
      "Product Scoping & Specifications: Collaborate with stakeholders (UX, QA, Dev) to translate requirements into technical specs, architectures, and sprint backlogs.",
      "AI-Enhanced Velocity: Build custom automation scripts and use AI tools (Cursor, Copilot, Claude, Gemini) to automate boilerplate, unit testing, and workflows, reducing prototyping time.",
      "Database Scale & Latency: Spearhead database performance tuning and MongoDB aggregation pipeline optimization, improving platform efficiency and query speed.",
      "Real-time Scoping: Lead the integration of WebRTC and Socket.IO for peer-to-peer real-time communication features, enhancing active user interaction.",
      "Growth Loops & Automation: Design automated growth messaging engines (Nodemailer, Cron Jobs) to trigger contextual transactions, improving user retention and communication flow.",
    ],
  },
];

const projects = [
  {
    title: "PayPulse",
    tagline: "Subscription Payment Tracker · Product Owner & Lead",
    stack: ["Product Ownership", "Node.js", "MongoDB", "JWT", "AI-Assisted Dev"],
    description:
      "A web app that helps people track their subscriptions and stop paying for services they forgot about. Scoped the product end-to-end, used AI tools (Gemini, Claude, Codex, Cursor) to write tests, set up the database, and document the API faster, and shipped automatic renewal reminders that lifted user retention by 40%. Secure JWT login keeps payment and account details private.",
    github: "https://github.com/Akshit501",
    demo: "https://github.com/Akshit501",
  },
  {
    title: "PdfDrip",
    tagline: "PDF Converter Toolkit · Founder & Developer",
    stack: ["Product Design", "Privacy-First Architecture", "React.js", "AI-Assisted Dev"],
    description:
      "Founded and built PdfDrip, a browser tool with 10 features for working with PDFs — merge, split, compress, convert, and more, all in one place. Every file operation runs client-side so users' files stay private and are never uploaded. Used AI coding tools (Claude, Cursor) to ship new features faster, with a clean light/dark interface that works smoothly on phone and desktop.",
    github: "https://github.com/Akshit501",
    demo: "https://github.com/Akshit501",
  },
];

const education = [
  { degree: "BTech in Information Technology", school: "Noida Institute of Engineering & Technology", period: "2022 – 2026" },
  { degree: "Class XII — CBSE", school: "NVM, Delhi", period: "2021 – 2022" },
];

const certifications = [
  { title: "Human-Centered Design", issuer: "Acumen Academy" },
  { title: "Introduction to AI", issuer: "LinkedIn" },
  { title: "Java Programming", issuer: "Coursera" },
  { title: "OOP in Java", issuer: "Coursera" },
];

/* ---------------- Root ---------------- */

function Portfolio() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <CursorTracker />
      <ParticleField />
      <BackgroundOrbs />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <FinalCta />
      <Contact />
      <Footer />
    </main>
  );
}

function BackgroundOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl animate-float" style={{ animationDelay: "-5s" }} />
    </div>
  );
}

/* ---------------- Nav ---------------- */

function Nav() {
  const [open, setOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm tracking-tight">
          <span className="text-gradient font-bold">akshit</span>
          <span className="text-muted-foreground">.dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <div key={n.id} className="relative">
              <button
                onClick={() => setOpen(open === n.id ? null : n.id)}
                onMouseEnter={() => setOpen(n.id)}
                onMouseLeave={() => setOpen(null)}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                {n.label}
                <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${open === n.id ? "rotate-180" : ""}`} />
              </button>
              {open === n.id && (
                <div
                  onMouseEnter={() => setOpen(n.id)}
                  onMouseLeave={() => setOpen(null)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1 min-w-[180px] rounded-xl border border-border bg-card/95 backdrop-blur-xl p-2 animate-slide-down glow-ring overflow-hidden"
                >
                  <a
                    href={`#${n.id}`}
                    onClick={() => setOpen(null)}
                    className="flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm hover:bg-secondary transition-colors"
                  >
                    Jump to {n.label}
                    <ArrowUpRight className="h-4 w-4 text-primary" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </nav>
        <Magnetic>
          <a
            href="/akshit-negi-resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </Magnetic>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="top" className="relative z-10 min-h-screen flex items-center bg-hero px-6 pt-24">
      <div className="mx-auto max-w-6xl w-full">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-3 py-1 text-xs text-muted-foreground font-mono">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" /> Open to Technical PM & Product roles · 2026
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-6 font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] tracking-tight">
            Hi, I'm <span className="text-gradient">Akshit Negi</span>.
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-6 text-lg sm:text-2xl md:text-3xl font-medium min-h-[2.4em]">
            <Typewriter
              phrases={[
                "Technical Product Manager",
                "AI & Automation Product Scoping",
                "Backend Developer Intern",
                "Builder at Heart",
              ]}
              className="text-foreground"
            />
          </div>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            I scope and ship AI-enhanced, real-time products — translating business needs into technical specs, roadmaps and shipped
            features. Currently a Backend Developer Intern at <span className="text-foreground">Techugo</span>, and a final-year BTech IT
            student building toward a Technical Product Manager role.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition"
              >
                View projects
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="/akshit-negi-resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-6 py-3 font-medium hover:bg-card transition"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </Magnetic>
          </div>
        </Reveal>
        <Reveal delay={550}>
          <div className="mt-16 flex items-center gap-6 text-sm text-muted-foreground font-mono flex-wrap">
            <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Ghaziabad, UP</span>
            <span className="hidden sm:flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-muted-foreground" /> +40% retention shipped on PayPulse</span>
            <span className="hidden sm:flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-muted-foreground" /> BTech IT '26</span>
          </div>
        </Reveal>
      </div>
      <ChevronDown className="absolute bottom-8 left-1/2 -translate-x-1/2 h-6 w-6 text-muted-foreground animate-bounce" />
    </section>
  );
}

/* ---------------- Section shell ---------------- */

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */

function About() {
  const softSkills = ["User Empathy", "Strategic Thinking", "Problem Solving", "Adaptive Leadership", "Technical Translation"];
  const interests = ["Emerging AI Agent Frameworks", "Prompt Engineering", "Developer Automation Systems", "Human-Centered Design", "Tech Market Innovations"];

  return (
    <Section id="about" eyebrow="01 — About" title="Scoping products that scale.">
      <Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm an aspiring Technical Product Manager and Backend Developer Intern at Techugo, with a strong software engineering
              foundation in scalable, real-time communication and data platforms. I lean on generative AI — LLMs (Claude, Gemini, Codex),
              AI code assistants (Cursor, GitHub Copilot, Antigravity) and AI agents — to automate workflows, accelerate prototyping and
              optimize delivery lifecycles. I translate complex business needs into robust technical requirements, collaborate across
              cross-functional engineering teams, and use data-driven insights to build user-centric products.
            </p>

            <div className="rounded-2xl border border-border bg-card/40 backdrop-blur p-6 space-y-4">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-primary mb-2.5">Soft Skills & Leadership</h4>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((s) => (
                    <span key={s} className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-mono text-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1.5">Languages</h4>
                  <p className="text-sm font-mono text-foreground">English (Fluent) · Hindi (Native)</p>
                </div>
                <div className="max-w-md">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1.5">Core Interests</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {interests.map((it) => (
                      <span key={it} className="rounded-md bg-secondary/70 px-2 py-0.5 text-[11px] font-mono text-muted-foreground">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <StatCard label="Experience" value="Techugo" hint="Backend Developer Intern" />
            <StatCard label="Focus" value="AI Product Scoping" hint="LLMs · Agentic workflows" />
            <StatCard label="Impact" value="+40%" hint="Retention lift on PayPulse" />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function StatCard({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card/50 backdrop-blur p-5 hover:border-primary/50 hover:-translate-y-0.5 transition-all">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-1 text-xl font-semibold">{value}</p>
      <p className="text-xs text-muted-foreground mt-1">{hint}</p>
    </div>
  );
}

/* ---------------- Skills ---------------- */

function Skills() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="skills" eyebrow="02 — Toolkit" title="How I scope and ship products.">
      <FloatingTechCloud />

      <div className="mt-14 grid lg:grid-cols-2 gap-10">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">Proficiency</h3>
          <div className="space-y-5">
            {skillsWithLevel.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 60} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">Categories</h3>
          <div className="space-y-3">
            {skillGroups.map((g, i) => {
              const Icon = g.icon;
              const isOpen = open === i;
              return (
                <Reveal key={g.title} delay={i * 50}>
                  <div className="rounded-2xl border border-border bg-card/50 backdrop-blur overflow-hidden">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 p-4 hover:bg-secondary/40 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="font-semibold">{g.title}</span>
                      </div>
                      <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="animate-slide-down px-4 pb-4">
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                          {g.items.map((it) => (
                            <span
                              key={it}
                              className="mt-3 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-mono text-muted-foreground hover:text-foreground hover:border-primary/50 transition"
                            >
                              {it}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const [w, setW] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setW(level), delay);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref}>
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium">{name}</span>
        <span className="font-mono text-muted-foreground">{w}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary/60 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-[width] duration-[1400ms] ease-out"
          style={{ width: `${w}%` }}
        />
      </div>
    </div>
  );
}

function FloatingTechCloud() {
  return (
    <Reveal>
      <div className="relative flex flex-wrap gap-3 justify-center py-4">
        {floatingTech.map((t, i) => (
          <span
            key={t}
            className="rounded-full border border-border bg-card/50 backdrop-blur px-4 py-2 text-sm font-mono hover:border-primary/60 hover:text-primary transition animate-float"
            style={{ animationDelay: `${-(i * 0.4)}s`, animationDuration: `${6 + (i % 4)}s` }}
          >
            {t}
          </span>
        ))}
      </div>
    </Reveal>
  );
}

/* ---------------- Experience timeline ---------------- */

function Experience() {
  return (
    <Section id="experience" eyebrow="03 — Experience" title="Where I've been scoping and shipping.">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />
        <div className="space-y-8">
          {experiences.map((e, i) => (
            <Reveal key={i}>
              <div className="relative pl-14">
                <div className="absolute left-0 top-4 h-9 w-9 rounded-xl bg-primary/10 border border-primary/40 flex items-center justify-center backdrop-blur">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>
                <div className="rounded-2xl border border-border bg-card/50 backdrop-blur p-8 hover:border-primary/40 transition">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-2xl font-semibold">{e.role}</h3>
                      <p className="text-primary font-mono text-sm mt-1">{e.company}</p>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{e.period}</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {e.points.map((p, j) => (
                      <li key={j} className="flex gap-3 text-muted-foreground leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Projects ---------------- */

function Projects() {
  return (
    <Section id="projects" eyebrow="04 — Featured work" title="Products I've owned, end to end.">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Reveal key={p.title}>
            <div className="group relative h-full rounded-2xl border border-border bg-card/50 backdrop-blur p-8 overflow-hidden hover:border-primary/60 hover:-translate-y-1 transition-all">
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold group-hover:text-gradient transition">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.tagline}</p>
                  </div>
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <p className="mt-5 text-muted-foreground leading-relaxed">{p.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-primary/30 bg-primary/5 px-2.5 py-1 text-xs font-mono text-primary">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm hover:border-primary/60 transition"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
                  >
                    Live demo <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
        <Reveal>
          <a
            href="https://github.com/Akshit501"
            target="_blank"
            rel="noreferrer"
            className="group flex h-full min-h-[220px] items-center justify-center rounded-2xl border border-dashed border-border bg-card/20 backdrop-blur p-8 hover:border-primary/60 transition"
          >
            <span className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition">
              More on GitHub <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------------- Education ---------------- */

function Education() {
  return (
    <Section id="education" eyebrow="05 — Education" title="Academic path.">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-border to-transparent" />
        <div className="space-y-6">
          {education.map((e, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="relative pl-14">
                <div className="absolute left-0 top-3 h-9 w-9 rounded-xl bg-accent/10 border border-accent/40 flex items-center justify-center backdrop-blur">
                  <GraduationCap className="h-4 w-4 text-accent" />
                </div>
                <div className="rounded-2xl border border-border bg-card/50 backdrop-blur p-6 hover:border-accent/40 transition">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold">{e.degree}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{e.school}</p>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{e.period}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Certifications ---------------- */

function Certifications() {
  return (
    <Section id="certifications" eyebrow="06 — Certifications" title="Continued learning.">
      <div className="grid sm:grid-cols-2 gap-4">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 60}>
            <div className="group flex items-start gap-4 rounded-2xl border border-border bg-card/50 backdrop-blur p-5 hover:border-primary/50 hover:-translate-y-0.5 transition-all">
              <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Award className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground font-mono">{c.issuer}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Final CTA ---------------- */

function FinalCta() {
  return (
    <section className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur-xl p-10 md:p-16 text-center glow-ring">
            <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-hero)" }} />
            <div className="relative">
              <Sparkles className="mx-auto h-8 w-8 text-primary" />
              <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
                Let's Build Something <span className="text-gradient">Amazing</span>
              </h2>
              <p className="mt-5 max-w-2xl mx-auto text-muted-foreground text-lg">
                Have a product that needs scoping, an AI feature that needs shipping, or a TPM role open? I'd love to hear about it.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Magnetic>
                  <a
                    href="mailto:akshitnegi501@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition"
                  >
                    <Mail className="h-4 w-4" /> Start a conversation
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="/akshit-negi-resume.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-6 py-3 font-medium hover:bg-card transition"
                  >
                    <Download className="h-4 w-4" /> Grab my resume
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

function Contact() {
  return (
    <Section id="contact" eyebrow="07 — Contact" title="Say hi.">
      <Reveal>
        <div className="grid sm:grid-cols-2 gap-3">
          <ContactLink href="mailto:akshitnegi501@gmail.com" icon={Mail} label="akshitnegi501@gmail.com" />
          <ContactLink href="tel:+919625194401" icon={Phone} label="+91 96251 94401" />
          <ContactLink href="https://linkedin.com/in/akshit-negi-9533582b0" icon={Linkedin} label="linkedin.com/in/akshit-negi" />
          <ContactLink href="https://github.com/Akshit501" icon={Github} label="github.com/Akshit501" />
        </div>
      </Reveal>
    </Section>
  );
}

function ContactLink({ href, icon: Icon, label }: { href: string; icon: typeof Mail; label: string }) {
  return (
    <Magnetic strength={0.15} className="block">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card/50 backdrop-blur px-5 py-4 hover:border-primary/50 transition-all"
      >
        <span className="flex items-center gap-3">
          <Icon className="h-4 w-4 text-primary" />
          <span className="font-mono text-sm">{label}</span>
        </span>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition" />
      </a>
    </Magnetic>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="relative z-10 border-t border-border px-6 py-8">
      <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
        <span>© {new Date().getFullYear()} Akshit Negi. Built with care.</span>
        <span>Ghaziabad, UP · IN</span>
      </div>
    </footer>
  );
}
