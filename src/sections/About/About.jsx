import React, { useEffect, useRef, useState } from "react";
import "./About.css";

const PixelDiamond = () => (
  <svg viewBox="0 0 16 16" width="22" height="22" aria-hidden="true" className="diamond-deco">
    <rect x="6" y="0"  width="4" height="2" fill="var(--cyan)"/>
    <rect x="4" y="2"  width="8" height="2" fill="var(--cyan)"/>
    <rect x="2" y="4"  width="12" height="2" fill="var(--cyan)"/>
    <rect x="0" y="6"  width="16" height="4" fill="var(--cyan)"/>
    <rect x="2" y="10" width="12" height="2" fill="var(--cyan)"/>
    <rect x="4" y="12" width="8"  height="2" fill="var(--cyan)"/>
    <rect x="6" y="14" width="4"  height="2" fill="var(--cyan)"/>
    {/* Inner shine */}
    <rect x="6" y="4"  width="2"  height="2" fill="rgba(255,255,255,0.4)"/>
  </svg>
);

/* ── Stat cards data ── */
const STATS = [
  { value: "₹1L",    label: "Prize Pool",   color: "cyan",   delay: 0 },
  { value: "4",      label: "Tracks",       color: "pink",   delay: 0.1 },
  { value: "3",      label: "Rounds",       color: "cyan",   delay: 0.2 },
  { value: "6 APR",  label: "Grand Finale", color: "pink",   delay: 0.3 },
];

/* ── Intersection Observer hook ── */
const useInView = (threshold = 0.2) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
};

/* ── Stat Card ── */
const StatCard = ({ value, label, color, delay, inView }) => (
  <div
    className={`stat-card stat-card--${color}${inView ? " stat-card--visible" : ""}`}
    style={{ "--card-delay": `${delay}s` }}
  >
    <span className="stat-card__value">{value}</span>
    <span className="stat-card__label">{label}</span>
    {/* Corner pixels */}
    <span className="card-corner card-corner--tl" aria-hidden="true"/>
    <span className="card-corner card-corner--tr" aria-hidden="true"/>
    <span className="card-corner card-corner--bl" aria-hidden="true"/>
    <span className="card-corner card-corner--br" aria-hidden="true"/>
  </div>
);

/* ══════════════════════════════════════════
   ABOUT SECTION
══════════════════════════════════════════ */
const About = () => {
  const [sectionRef, inView] = useInView(0.15);

  return (
    <section
      className={`about-section${inView ? " about-section--visible" : ""}`}
      id="about"
      ref={sectionRef}
      aria-label="About the Mission"
    >
      {/* CRT scanlines (light) */}
      <div className="about-scanlines" aria-hidden="true"/>

      {/* Side diamond decoration */}
      <div className="side-diamond" aria-hidden="true">
        <PixelDiamond />
      </div>

      {/* ── Section title ── */}
      <div className="about-title-wrap">
        <h2 className="about-title">
          <span className="title-accent">ABOUT</span>
          <span className="title-plain"> THE MISSION</span>
        </h2>
        <div className="title-underline" aria-hidden="true"/>
      </div>

      {/* ── Body ── */}
      <div className="about-body">

        {/* Left — text */}
        <div className="about-text">
          <p className="about-para">
            <span className="highlight highlight--yellow">Protex Hackathon 2026</span> is an
            intensive multi-day innovation challenge bringing together the brightest student minds
            to ideate, prototype, and build impactful tech solutions — in a high-energy,
            mentor-driven environment.
          </p>

          <p className="about-para">
            Passionate about{" "}
            <span className="highlight highlight--cyan">Generative AI</span>, autonomous
            agents, personal finance tools, or just a bold idea you've been waiting to build?{" "}
            <span className="highlight highlight--cyan">This is your stage.</span>
          </p>

          <p className="about-para">
            Compete across{" "}
            <span className="highlight highlight--yellow">4 curated tracks</span>, get
            evaluated by industry mentors, and pitch live to a jury for a total prize pool of{" "}
            <span className="highlight highlight--yellow">₹1,00,000</span> + gift hampers.
          </p>

          <p className="about-para">
            Organized by{" "}
            <span className="highlight highlight--cyan">PROTéGé</span> — tech society of{" "}
            <span className="highlight highlight--cyan">IGDTUW, Kashmere Gate, Delhi.</span>
          </p>
        </div>

        {/* Right — stat cards */}
        <div className="about-stats">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} inView={inView} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;