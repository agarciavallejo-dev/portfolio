import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  GraduationCap,
  ExternalLink,
  Code2,
  Award,
  Terminal,
  Layers,
  Sparkles,
  ArrowDown,
} from "lucide-react";
import roofingProject from "../assets/project-roofing.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anthony Garcia Vallejo — CS Student & Aspiring Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Anthony Garcia Vallejo, a Computer Science student at CSUDH building responsive web apps with Python, Firebase, and Lovable.",
      },
      { property: "og:title", content: "Anthony Garcia Vallejo — CS Student & Aspiring Software Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio of Anthony Garcia Vallejo, a Computer Science student at CSUDH building responsive web apps with Python, Firebase, and Lovable.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "About", to: "#about" },
  { label: "Projects", to: "#projects" },
  { label: "Skills", to: "#skills" },
  { label: "Certifications", to: "#certifications" },
  { label: "Contact", to: "#contact" },
];

const skills = [
  { name: "Python", icon: Terminal },
  { name: "HTML/CSS", icon: Code2 },
  { name: "Firebase", icon: Layers },
  { name: "Lovable", icon: Sparkles },
  { name: "Bilingual (English/Spanish)", icon: MapPin },
];

const certifications = [
  {
    title: "Firebase Studio Developer",
    issuer: "Google",
    year: "2026",
  },
  {
    title: "Gemini Enterprise Agent Ready",
    issuer: "Google",
    year: "2026",
  },
  {
    title: "Google Cloud & NVIDIA Community Badge",
    issuer: "Google",
    year: "2026",
  },
  {
    title: "Google Maps Platform Innovators",
    issuer: "Google",
    year: "2026",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold tracking-tight text-foreground">
            agv.
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.to}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:agarciavallejo.dev@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_-8px_var(--color-glow)]"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Get in touch</span>
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium tracking-wide text-primary uppercase">
              CS Student & Aspiring Software Engineer
            </p>
            <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Anthony Garcia <span className="gradient-text">Vallejo</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Building responsive, user-focused web experiences. Currently pursuing a B.S. in Computer Science at
              California State University, Dominguez Hills.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4 text-primary" />
                CSUDH — Expected May 2030
              </span>
              <span className="hidden h-4 w-px bg-border sm:inline" />
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary" />
                Hawthorne, CA
              </span>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_40px_-10px_var(--color-glow)]"
              >
                View my work
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/agarciavallejo-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-surface-elevated hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>

          <a
            href="#about"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </section>

        {/* About */}
        <section id="about" className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:items-start">
              <div>
                <p className="text-sm font-medium tracking-wide text-primary uppercase">About Me</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Curious builder, lifelong learner.
                </h2>
              </div>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  I&apos;m Anthony, a Computer Science student at{" "}
                  <strong className="text-foreground">California State University, Dominguez Hills</strong>, expected to
                  graduate in May 2030. I enjoy turning ideas into clean, functional software — from Python scripts to
                  full responsive web apps.
                </p>
                <p>
                  Most recently, I&apos;ve been building with{" "}
                  <strong className="text-foreground">Lovable and Firebase</strong> to ship polished web experiences
                  quickly. I&apos;m bilingual in English and Spanish, and I bring a detail-oriented, user-first mindset
                  to every project.
                </p>
                <p>
                  I&apos;m currently seeking software engineering internships and opportunities where I can learn from
                  great engineers while contributing real value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-y border-border bg-surface/50 px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-medium tracking-wide text-primary uppercase">Projects</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Selected work.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A recent project I built to explore responsive design, interactive UI, and real-world business logic.
              </p>
            </div>

            <article className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-[0_0_60px_-20px_var(--color-glow)]">
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-[4/3] overflow-hidden bg-surface lg:aspect-auto">
                  <img
                    src={roofingProject}
                    alt="Roofing Company Website Template showing an interactive estimator, financing calculator, and before/after comparison"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
                      Lovable
                    </span>
                    <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
                      Responsive
                    </span>
                    <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
                      Interactive UI
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    Roofing Company Website Template
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    A fully responsive landing page for a roofing business, featuring an interactive project estimator,
                    a financing calculator, and a before/after image comparison tool. Built to demonstrate clean UX,
                    conversion-focused design, and real-world component architecture.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="https://roofingcompanytemplate.lovable.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                    >
                      Live demo
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href="https://github.com/agarciavallejo-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-surface-elevated"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <p className="text-sm font-medium tracking-wide text-primary uppercase">Skills</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Tools & technologies.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-surface-elevated"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-lg font-semibold text-foreground">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="border-y border-border bg-surface/50 px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <p className="text-sm font-medium tracking-wide text-primary uppercase">Certifications</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Credentials & badges.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Certifications earned through Google in 2026, focused on cloud, AI, and developer tooling.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-surface-elevated"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{cert.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium tracking-wide text-primary uppercase">Contact</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s build something together.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I&apos;m open to internships, collaborations, and opportunities to grow as a software engineer.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:agarciavallejo.dev@gmail.com"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_40px_-10px_var(--color-glow)] sm:w-auto"
              >
                <Mail className="h-4 w-4" />
                agarciavallejo.dev@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/anthony-garcia-vallejo-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-surface-elevated sm:w-auto"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/agarciavallejo-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-surface-elevated sm:w-auto"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Anthony Garcia Vallejo. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:agarciavallejo.dev@gmail.com"
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/anthony-garcia-vallejo-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/agarciavallejo-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
