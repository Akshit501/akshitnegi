import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Phone, MapPin, ChevronDown, Code2, Server, Database, Shield, Cloud, Wrench } from "lucide-react";
import { CursorTracker } from "@/components/CursorTracker";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akshit Negi — Backend Developer & Full-Stack Engineer" },
      { name: "description", content: "Portfolio of Akshit Negi — Backend Developer Trainee at Techugo. Node.js, Express, MongoDB, real-time systems, and scalable APIs." },
      { property: "og:title", content: "Akshit Negi — Backend Developer" },
      { property: "og:description", content: "Building scalable REST APIs, real-time systems, and automated backends with Node.js & MongoDB." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const skillGroups = [
  { icon: Code2, title: "Frontend", items: ["React.js", "JavaScript", "HTML", "CSS"] },
  { icon: Server, title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "WebRTC", "Cron Jobs", "Nodemailer", "Multer"] },
  { icon: Database, title: "Database", items: ["MongoDB Atlas", "MySQL", "Mongoose ODM", "Aggregation Pipelines", "Schema Design"] },
  { icon: Shield, title: "Auth & Security", items: ["JWT", "Bcrypt", "Arcjet Rate Limiting", "Firebase"] },
  { icon: Cloud, title: "Deployment", items: ["Render", "Vercel", "GitHub", "Firebase", "MongoDB Atlas"] },
  { icon: Wrench, title: "Tools", items: ["Git", "VS Code", "Postman", "npm"] },
];

const experiences = [
  {
    role: "Backend Developer Trainee",
    company: "Techugo",
    period: "Current",
    points: [
      "Develop RESTful APIs using Express.js with Repository-Controller-Services architecture for scalable code organization.",
      "Implement MongoDB aggregation pipelines for complex queries and transformations, optimizing database performance.",
      "Design automated email systems with Nodemailer for transactional emails and user notifications.",
      "Build scheduled task management using Cron Jobs for automated background processes.",
      "Implement real-time communication using Socket.IO and WebRTC for peer-to-peer connectivity.",
      "Implement JWT authentication and Bcrypt password hashing for secure user credential management.",
    ],
  },
];

const projects = [
  {
    title: "Subscription Tracker API",
    stack: ["Node.js", "Express.js", "MongoDB", "QStash", "JWT", "Nodemailer"],
    description:
      "A subscription management system with automated email reminders to track recurring payments. Secure JWT auth, bcrypt-encrypted credentials, QStash scheduled notifications and Nodemailer alerts. Deployed on Render with MongoDB Atlas.",
    link: "https://github.com/Akshit501",
  },
];

function Portfolio() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <CursorTracker />
      <BackgroundOrbs />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

function BackgroundOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
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
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
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
        <a
          href="#contact"
          className="rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
        >
          Hire me
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative z-10 min-h-screen flex items-center bg-hero px-6 pt-24">
      <div className="mx-auto max-w-6xl w-full">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-3 py-1 text-xs text-muted-foreground font-mono">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" /> Available for full-time roles
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-6 font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] tracking-tight">
            Akshit <span className="text-gradient">Negi</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Backend Developer building scalable REST APIs, real-time systems, and automated pipelines with{" "}
            <span className="text-foreground">Node.js</span>, <span className="text-foreground">Express</span> and{" "}
            <span className="text-foreground">MongoDB</span>.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition">
              View projects
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-6 py-3 font-medium hover:bg-card transition">
              Get in touch
            </a>
          </div>
        </Reveal>
        <Reveal delay={500}>
          <div className="mt-16 flex items-center gap-6 text-sm text-muted-foreground font-mono">
            <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Ghaziabad, UP</span>
            <span className="hidden sm:flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-muted-foreground" /> 100+ DSA solved</span>
            <span className="hidden sm:flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-muted-foreground" /> BTech IT '26</span>
          </div>
        </Reveal>
      </div>
      <ChevronDown className="absolute bottom-8 left-1/2 -translate-x-1/2 h-6 w-6 text-muted-foreground animate-bounce" />
    </section>
  );
}

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

function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="Building backends that scale.">
      <Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          <p className="md:col-span-2 text-lg text-muted-foreground leading-relaxed">
            I'm a final-year BTech IT student and Backend Developer Trainee at Techugo, focused on shipping
            production-grade Node.js services. I care about clean architecture (repository-controller-services),
            database performance with aggregation pipelines, and reliable automation via cron jobs and message
            queues. I've solved 100+ DSA problems and love the craft of turning messy problems into fast, well-typed APIs.
          </p>
          <div className="space-y-4">
            <StatCard label="Experience" value="Techugo" hint="Backend trainee" />
            <StatCard label="Focus" value="Node · MongoDB" hint="Scalable APIs" />
            <StatCard label="DSA" value="100+" hint="Problems solved" />
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

function Skills() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="skills" eyebrow="02 — Toolkit" title="The stack I ship with.">
      <div className="grid gap-3">
        {skillGroups.map((g, i) => {
          const Icon = g.icon;
          const isOpen = open === i;
          return (
            <Reveal key={g.title} delay={i * 60}>
              <div className="rounded-2xl border border-border bg-card/50 backdrop-blur overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 hover:bg-secondary/40 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg font-semibold">{g.title}</span>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="animate-slide-down px-5 pb-5">
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                      {g.items.map((it) => (
                        <span key={it} className="mt-3 rounded-full border border-border bg-background/60 px-3 py-1 text-sm font-mono text-muted-foreground hover:text-foreground hover:border-primary/50 transition">
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
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="03 — Experience" title="Where I've been shipping.">
      <div className="space-y-6">
        {experiences.map((e, i) => (
          <Reveal key={i}>
            <div className="rounded-2xl border border-border bg-card/50 backdrop-blur p-8 hover:border-primary/40 transition group">
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
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="04 — Selected work" title="Things I've built.">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Reveal key={p.title}>
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group block h-full rounded-2xl border border-border bg-card/50 backdrop-blur p-8 hover:border-primary/60 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-semibold group-hover:text-gradient transition">{p.title}</h3>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">{p.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs font-mono text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </a>
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

function Contact() {
  return (
    <Section id="contact" eyebrow="05 — Contact" title="Let's build something.">
      <Reveal>
        <div className="rounded-3xl border border-border bg-card/50 backdrop-blur p-8 md:p-14 glow-ring">
          <p className="text-2xl md:text-4xl font-semibold leading-tight max-w-3xl">
            I'm actively looking for <span className="text-gradient">full-time backend & full-stack roles</span>. If you're hiring or want to collaborate — reach out.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-3">
            <ContactLink href="mailto:akshitnegi501@gmail.com" icon={Mail} label="akshitnegi501@gmail.com" />
            <ContactLink href="tel:+919625194401" icon={Phone} label="+91 96251 94401" />
            <ContactLink href="https://linkedin.com/in/akshit-negi-9533582b0" icon={Linkedin} label="linkedin.com/in/akshit-negi" />
            <ContactLink href="https://github.com/Akshit501" icon={Github} label="github.com/Akshit501" />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function ContactLink({ href, icon: Icon, label }: { href: string; icon: typeof Mail; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-background/60 px-5 py-4 hover:border-primary/50 hover:-translate-y-0.5 transition-all"
    >
      <span className="flex items-center gap-3">
        <Icon className="h-4 w-4 text-primary" />
        <span className="font-mono text-sm">{label}</span>
      </span>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition" />
    </a>
  );
}

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
