"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  Activity,
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Code2,
  Cpu,
  Database,
  Eye,
  FileText,
  Github,
  GitBranch,
  Mail,
  MapPin,
  Menu,
  Moon,
  Server,
  ShieldCheck,
  Sun,
  Terminal,
  X,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  capabilities,
  certifications,
  currentlyBuilding,
  education,
  experience,
  githubHighlights,
  metrics,
  profile,
  projects,
  services,
  stackGroups,
} from "@/data/portfolio";

const iconMap = {
  Activity,
  BrainCircuit,
  Cloud,
  Code2,
  Cpu,
  Database,
  Eye,
  Server,
  ShieldCheck,
  Terminal,
};

export default function Portfolio() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      intro
        .from(".nav-shell", { y: -24, opacity: 0, duration: 0.8 })
        .from(".hero-kicker", { y: 20, opacity: 0, duration: 0.7 }, "-=0.35")
        .from(".hero-title span", {
          y: 76,
          opacity: 0,
          duration: 0.9,
          stagger: 0.08,
        })
        .from(".hero-statement span", {
          yPercent: 110,
          duration: 0.85,
          stagger: 0.08,
        }, "-=0.7")
        .from(".hero-copy", { y: 26, opacity: 0, duration: 0.75 }, "-=0.45")
        .from(".hero-actions a", {
          y: 18,
          opacity: 0,
          duration: 0.55,
          stagger: 0.08,
        })
        .from(".signal-card", {
          y: 24,
          opacity: 0,
          duration: 0.55,
          stagger: 0.08,
        });

      gsap.to(".scan-line", {
        xPercent: 130,
        duration: 3.5,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".hero-bg", {
        scale: 1.08,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".pipeline-node", {
        y: -9,
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        stagger: 0.16,
        ease: "sine.inOut",
      });

      gsap.to(".flow-beam", {
        backgroundPosition: "240px 0",
        duration: 2.8,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".marquee-track", {
        xPercent: -50,
        duration: 22,
        repeat: -1,
        ease: "none",
      });

      gsap.from(".service-price strong", {
        yPercent: 90,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 70%",
        },
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.from(element, {
          y: 42,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, index) => {
        gsap.from(card, {
          y: 70,
          opacity: 0,
          rotateX: 8,
          duration: 0.9,
          delay: index * 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 86%",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".stack-chip").forEach((chip, index) => {
        gsap.from(chip, {
          opacity: 0,
          y: 16,
          duration: 0.45,
          delay: index * 0.015,
          scrollTrigger: {
            trigger: chip,
            start: "top 92%",
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className="site-shell">
      <div className="cursor-grid" aria-hidden="true" />
      <Header />
      <Hero />
      <EditorialMarquee />
      <CurrentlyBuilding />
      <Projects />
      <Capabilities />
      <Services />
      <GithubSection />
      <Stack />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}

function Header() {
  return (
    <header className="nav-shell">
      <a className="brand-mark" href="#top" aria-label="xdcoderz home">
        <span className="brand-mark__glyph">XD</span>
        <span>{profile.brand}</span>
      </a>
      <nav
        id="primary-navigation"
        className="nav-links nav-links--desktop"
        aria-label="Primary navigation"
      >
        <a href="#building">Build</a>
        <a href="#projects">Work</a>
        <a href="#services">Services</a>
        <a href="#github">GitHub</a>
        <a href="#stack">Stack</a>
      </nav>
      <div className="nav-actions">
        <details className="mobile-menu" data-mobile-menu>
          <summary
            className="menu-toggle"
            aria-label="Open navigation menu"
            title="Navigation menu"
          >
            <Menu
              className="menu-icon menu-icon--open"
              size={19}
              aria-hidden="true"
            />
            <X
              className="menu-icon menu-icon--close"
              size={19}
              aria-hidden="true"
            />
          </summary>
          <nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            <a href="#building" data-mobile-menu-link>Build</a>
            <a href="#projects" data-mobile-menu-link>Work</a>
            <a href="#services" data-mobile-menu-link>Services</a>
            <a href="#github" data-mobile-menu-link>GitHub</a>
            <a href="#stack" data-mobile-menu-link>Stack</a>
          </nav>
        </details>
        <button
          className="theme-toggle"
          type="button"
          data-theme-toggle
          aria-label="Toggle light/dark theme"
          title="Toggle light/dark theme"
        >
          <Sun
            className="theme-icon theme-icon--sun"
            size={18}
            aria-hidden="true"
          />
          <Moon
            className="theme-icon theme-icon--moon"
            size={18}
            aria-hidden="true"
          />
        </button>
        <a
          className="nav-cta"
          href={`mailto:${profile.email}`}
          aria-label="Email Aditya Sharma"
        >
          <Mail size={16} aria-hidden="true" />
          <span>Contact</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section" aria-labelledby="hero-title">
      <Image
        className="hero-bg"
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2400&q=85"
        alt="Dark server racks used as a futuristic backend systems backdrop"
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="scan-line" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-kicker">
          <span>Aditya Sharma</span>
          <span>AI + Backend Developer</span>
        </div>
        <h1 id="hero-title" className="hero-title" aria-label="xdcoderz">
          <span>XD</span>
          <span>CODERZ</span>
        </h1>
        <p className="hero-statement" aria-label="Systems beyond the demo">
          <span>SYSTEMS BEYOND</span>
          <span>THE <em>DEMO.</em></span>
        </p>
        <p className="hero-copy">
          I build the part people only notice when it fails: AI pipelines,
          secure APIs, automation, and backend systems that stay useful after
          the demo lights turn off.
        </p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button-primary magnetic" href="#projects">
            Explore systems
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="button-secondary magnetic" href={profile.github}>
            <Github size={18} aria-hidden="true" />
            GitHub
          </a>
        </div>
        <div className="hero-meta" aria-label="Profile metadata">
          <span>
            <MapPin size={16} aria-hidden="true" />
            {profile.location}
          </span>
          <span>
            <Terminal size={16} aria-hidden="true" />
            {profile.role}
          </span>
        </div>
      </div>
      <SystemHud />
    </section>
  );
}

function EditorialMarquee() {
  const label =
    "COMPUTER VISION / BACKEND ARCHITECTURE / AUTOMATION / PRODUCT ENGINEERING / ";

  return (
    <div className="editorial-marquee" aria-hidden="true">
      <div className="marquee-track">
        <span>{label}</span>
        <span>{label}</span>
      </div>
    </div>
  );
}

function SystemHud() {
  return (
    <aside className="system-hud" aria-label="Aditya Sharma profile card">
      <div className="hud-header">
        <span>developer.profile</span>
        <span>building</span>
      </div>
      <div className="hud-profile">
        <div className="hud-avatar">
          <span className="avatar-fallback" aria-hidden="true">XD</span>
          <Image
            src={profile.avatar}
            alt=""
            fill
            unoptimized
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
            sizes="64px"
          />
        </div>
        <div className="hud-identity">
          <span>@{profile.githubHandle}</span>
          <h2>{profile.name}</h2>
          <p>{profile.role}</p>
        </div>
        <a
          className="hud-github"
          href={profile.github}
          aria-label="Open my GitHub profile"
          title="Open GitHub profile"
        >
          <Github size={19} aria-hidden="true" />
        </a>
      </div>
      <div className="pipeline">
        <div className="pipeline-node">
          <BrainCircuit size={24} aria-hidden="true" />
          <span>AI</span>
        </div>
        <div className="flow-beam" aria-hidden="true" />
        <div className="pipeline-node">
          <Server size={24} aria-hidden="true" />
          <span>API</span>
        </div>
        <div className="flow-beam" aria-hidden="true" />
        <div className="pipeline-node">
          <Database size={24} aria-hidden="true" />
          <span>DATA</span>
        </div>
      </div>
      <div className="hud-details">
        <span>
          <MapPin size={15} aria-hidden="true" />
          {profile.location}
        </span>
        <span>
          <Terminal size={15} aria-hidden="true" />
          {profile.availability}
        </span>
      </div>
      <div className="signal-grid">
        {metrics.map((metric) => (
          <div className="signal-card" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="section-header reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function CurrentlyBuilding() {
  return (
    <section id="building" className="section building-section">
      <SectionHeader
        eyebrow={currentlyBuilding.eyebrow}
        title={currentlyBuilding.name}
        text={currentlyBuilding.summary}
      />
      <div className="building-layout reveal">
        <div className="building-copy">
          <span className="status-pill">{currentlyBuilding.status}</span>
          <p>{currentlyBuilding.impact}</p>
          <div className="tech-row">
            {currentlyBuilding.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="vision-panel">
          <Image
            src={currentlyBuilding.image}
            alt="Retail store shelves representing Vivid Store AI analytics"
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
          />
          <div className="tracking-box tracking-box-a">
            <span>person_021</span>
          </div>
          <div className="tracking-box tracking-box-b">
            <span>entry zone</span>
          </div>
          <div className="tracking-box tracking-box-c">
            <span>confidence 0.91</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeader
        eyebrow="Selected systems"
        title="Where the demo becomes a real system"
        text="I like the uncomfortable layer where identity, latency, noisy inputs, persistence, and operational tradeoffs all show up at once. That is where software starts earning trust."
      />
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-media">
              <Image
                src={project.image}
                alt={`${project.name} project visual`}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
              />
              <span>{project.type}</span>
            </div>
            <div className="project-body">
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <p className="project-detail">{project.details}</p>
              <div className="tech-row">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="section capability-section">
      <SectionHeader
        eyebrow="Engineering range"
        title="Depth where the product needs it"
        text="I move across the full path from model output to database state, especially at the boundaries where systems usually get fragile. The experience can stay clean because the engineering underneath is doing its job."
      />
      <div className="capability-grid">
        {capabilities.map((capability) => {
          const Icon = iconMap[capability.icon as keyof typeof iconMap];
          return (
            <article className="capability-card reveal" key={capability.title}>
              <Icon size={28} aria-hidden="true" />
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="services-intro reveal">
        <span className="eyebrow">Selective client work</span>
        <h2>Websites with substance.</h2>
        <p>
          I take on a limited number of website builds for people who want more
          than a template. Positioning, interface, motion, and production code
          stay connected from the first screen to the final deploy. My business
          site, XDCoderz, is where that work turns into a focused service and
          product catalog.
        </p>
      </div>
      <div className="services-layout">
        <div className="service-price reveal">
          <span>Engagements start at</span>
          <div>
            <strong>{"\u20B9"}30K</strong>
          </div>
          <p>INR - scope follows the problem</p>
          <div className="service-actions">
            <a href={`mailto:${profile.email}?subject=Website%20project`}>
              Discuss a build
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a href={profile.businessWebsite}>
              Visit XDCoderz
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row reveal" key={service.index}>
              <span>{service.index}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GithubSection() {
  return (
    <section id="github" className="section github-section">
      <div className="github-profile reveal">
        <div className="avatar-wrap">
          <span className="avatar-fallback" aria-hidden="true">XD</span>
          <Image
            src={profile.avatar}
            alt="Aditya Sharma GitHub avatar"
            fill
            unoptimized
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
            sizes="112px"
          />
        </div>
        <div>
          <span className="eyebrow">GitHub activity</span>
          <h2>@{profile.githubHandle}</h2>
          <p>
            My GitHub is less trophy shelf, more working notebook. It shows the
            experiments, architecture choices, and product ideas behind the
            polished work.
          </p>
        </div>
        <a className="button-secondary" href={profile.github}>
          <Github size={18} aria-hidden="true" />
          Open profile
        </a>
      </div>
      <div className="repo-rail">
        {githubHighlights.map((repo) => (
          <a className="repo-card reveal" href={repo.url} key={repo.name}>
            <div>
              <GitBranch size={18} aria-hidden="true" />
              <span>{repo.language}</span>
            </div>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <span className="repo-link">
              View repo <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="section stack-section">
      <SectionHeader
        eyebrow="Working stack"
        title="Chosen for the problem, not the trend"
        text="I use Java when structure and long-lived services matter, Python when AI and iteration speed lead, and everything else only when it makes the system clearer, faster, or easier to operate."
      />
      <div className="stack-board">
        {stackGroups.map((group) => (
          <div className="stack-group reveal" key={group.name}>
            <h3>{group.name}</h3>
            <div>
              {group.items.map((item) => (
                <span className="stack-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience-section">
      <SectionHeader
        eyebrow="Experience"
        title="Still early. Already shipping."
        text="I am still early in the journey, but I am already doing the kind of work I want more of: technically demanding systems with visible product impact."
      />
      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item reveal" key={item.company}>
            <span>{item.date}</span>
            <h3>{item.role}</h3>
            <strong>{item.company}</strong>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
      <div className="education-panel reveal">
        <FileText size={24} aria-hidden="true" />
        <div>
          <h3>{education.degree}</h3>
          <p>
            {education.school} - {education.graduation}
          </p>
          <div className="tech-row">
            {education.coursework.map((course) => (
              <span key={course}>{course}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section">
      <div className="about-copy reveal">
        <span className="eyebrow">About xdcoder</span>
        <h2>I like problems that refuse to stay in one layer.</h2>
        <p>
          The work that holds my attention rarely fits inside a neat label. It
          might begin with a model, run through an API, collide with imperfect
          data, and finally need an interface that makes the complexity feel
          simple. That full path is where I&apos;m most useful.
        </p>
      </div>
      <div className="cert-panel reveal">
        <h3>Certifications and signals</h3>
        {certifications.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-inner reveal">
        <span className="eyebrow">Start a conversation</span>
        <h2>Bring the hard part. We can make it shippable.</h2>
        <p>
          If the idea involves AI, backend architecture, automation, or a
          website that needs more than a template, send the context. I&apos;ll
          tell you where I can create leverage.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href={`mailto:${profile.email}`}>
            <Mail size={18} aria-hidden="true" />
            {profile.email}
          </a>
          <a className="button-secondary" href={profile.businessWebsite}>
            XDCoderz business
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
