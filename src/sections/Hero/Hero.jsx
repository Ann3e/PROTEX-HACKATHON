import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

/* ══════════════════════════════════════════
   PIXEL SPRITES
══════════════════════════════════════════ */

/* Pac-Man Ghost */
const Ghost = ({ color = "var(--pink)", className = "" }) => (
  <svg className={`sprite ghost-sprite ${className}`} viewBox="0 0 16 16" aria-hidden="true">
    <rect x="3"  y="0"  width="10" height="2" fill={color}/>
    <rect x="1"  y="2"  width="14" height="2" fill={color}/>
    <rect x="0"  y="4"  width="16" height="6" fill={color}/>
    {/* Eyes */}
    <rect x="2"  y="4"  width="4"  height="4" fill="white"/>
    <rect x="10" y="4"  width="4"  height="4" fill="white"/>
    <rect x="3"  y="5"  width="2"  height="2" fill="#00f"/>
    <rect x="11" y="5"  width="2"  height="2" fill="#00f"/>
    {/* Body bottom */}
    <rect x="0"  y="10" width="16" height="4" fill={color}/>
    {/* Wavy bottom */}
    <rect x="0"  y="14" width="4"  height="2" fill={color}/>
    <rect x="6"  y="14" width="4"  height="2" fill={color}/>
    <rect x="12" y="14" width="4"  height="2" fill={color}/>
  </svg>
);

/* Galaga Invader */
const Invader = ({ color = "var(--cyan)", className = "" }) => (
  <svg className={`sprite invader-sprite ${className}`} viewBox="0 0 16 12" aria-hidden="true">
    <rect x="6"  y="0"  width="4"  height="2" fill={color}/>
    <rect x="4"  y="2"  width="8"  height="2" fill={color}/>
    <rect x="2"  y="4"  width="12" height="2" fill={color}/>
    <rect x="0"  y="6"  width="2"  height="2" fill={color}/>
    <rect x="4"  y="6"  width="2"  height="2" fill={color}/>
    <rect x="6"  y="6"  width="4"  height="2" fill={color}/>
    <rect x="10" y="6"  width="2"  height="2" fill={color}/>
    <rect x="14" y="6"  width="2"  height="2" fill={color}/>
    <rect x="2"  y="8"  width="12" height="2" fill={color}/>
    <rect x="0"  y="10" width="4"  height="2" fill={color}/>
    <rect x="12" y="10" width="4"  height="2" fill={color}/>
  </svg>
);

/* Pixel Coin */
const Coin = ({ className = "" }) => (
  <svg className={`sprite coin-sprite ${className}`} viewBox="0 0 12 12" aria-hidden="true">
    <rect x="3"  y="0"  width="6"  height="2" fill="var(--yellow)"/>
    <rect x="1"  y="2"  width="10" height="2" fill="var(--yellow)"/>
    <rect x="0"  y="4"  width="12" height="4" fill="var(--yellow)"/>
    <rect x="1"  y="8"  width="10" height="2" fill="var(--yellow)"/>
    <rect x="3"  y="10" width="6"  height="2" fill="var(--yellow)"/>
    {/* Shine */}
    <rect x="3"  y="3"  width="2"  height="3" fill="rgba(255,255,255,0.4)"/>
  </svg>
);



/* Pixel Heart */
const PixelHeart = () => (
  <svg viewBox="0 0 12 12" width="18" height="18" aria-hidden="true">
    <rect x="1"  y="2"  width="2" height="2" fill="var(--pink)"/>
    <rect x="3"  y="0"  width="2" height="2" fill="var(--pink)"/>
    <rect x="5"  y="0"  width="2" height="2" fill="var(--pink)"/>
    <rect x="7"  y="0"  width="2" height="2" fill="var(--pink)"/>
    <rect x="9"  y="2"  width="2" height="2" fill="var(--pink)"/>
    <rect x="1"  y="4"  width="10" height="2" fill="var(--pink)"/>
    <rect x="3"  y="6"  width="6"  height="2" fill="var(--pink)"/>
    <rect x="5"  y="8"  width="2"  height="2" fill="var(--pink)"/>
  </svg>
);

/* Pixel Joystick */
const Joystick = () => (
  <svg viewBox="0 0 20 24" width="22" height="28" aria-hidden="true">
    <rect x="7"  y="0"  width="6"  height="2"  fill="var(--cyan)"/>
    <rect x="5"  y="2"  width="10" height="2"  fill="var(--cyan)"/>
    <rect x="9"  y="4"  width="2"  height="10" fill="var(--cyan)"/>
    <rect x="2"  y="14" width="16" height="4"  fill="var(--purple)"/>
    <rect x="0"  y="18" width="20" height="4"  fill="var(--purple)"/>
    <rect x="7"  y="1"  width="6"  height="2"  fill="rgba(255,255,255,0.3)"/>
  </svg>
);

/* ══════════════════════════════════════════
   PIXEL BUILDINGS  (sharper, no border-radius)
══════════════════════════════════════════ */
const BUILDINGS = [
  { w: 52,  h: 90,  bg: "var(--mid)", windows: [{t:"18%",l:"20%",c:"var(--cyan)"},{t:"50%",l:"20%",c:"var(--yellow)"}] },
  { w: 38,  h: 120, bg: "var(--mid)", windows: [{t:"12%",l:"35%",c:"var(--pink)"},{t:"38%",l:"35%",c:"var(--cyan)"},{t:"64%",l:"35%",c:"var(--yellow)"}] },
  { w: 68,  h: 70,  bg: "var(--mid)", windows: [{t:"28%",l:"18%",c:"var(--green)"},{t:"28%",l:"58%",c:"var(--green)"}] },
  { w: 44,  h: 105, bg: "var(--mid)", windows: [{t:"14%",l:"38%",c:"var(--pink)"},{t:"40%",l:"38%",c:"var(--cyan)"},{t:"66%",l:"38%",c:"var(--yellow)"}] },
  { w: 80,  h: 60,  bg: "var(--mid)", windows: [{t:"30%",l:"15%",c:"var(--yellow)"},{t:"30%",l:"50%",c:"var(--yellow)"},{t:"30%",l:"78%",c:"var(--cyan)"}] },
  { w: 35,  h: 135, bg: "var(--mid)", windows: [{t:"10%",l:"35%",c:"var(--purple)"},{t:"35%",l:"35%",c:"var(--cyan)"},{t:"58%",l:"35%",c:"var(--pink)"},{t:"78%",l:"35%",c:"var(--green)"}] },
  { w: 60,  h: 80,  bg: "var(--mid)", windows: [{t:"22%",l:"20%",c:"var(--cyan)"},{t:"22%",l:"60%",c:"var(--cyan)"},{t:"55%",l:"20%",c:"var(--yellow)"}] },
  { w: 42,  h: 115, bg: "var(--mid)", windows: [{t:"12%",l:"35%",c:"var(--green)"},{t:"36%",l:"35%",c:"var(--pink)"},{t:"60%",l:"35%",c:"var(--yellow)"}] },
  { w: 55,  h: 75,  bg: "var(--mid)", windows: [{t:"25%",l:"22%",c:"var(--cyan)"},{t:"25%",l:"62%",c:"var(--pink)"}] },
  { w: 40,  h: 100, bg: "var(--mid)", windows: [{t:"15%",l:"38%",c:"var(--yellow)"},{t:"42%",l:"38%",c:"var(--cyan)"},{t:"68%",l:"38%",c:"var(--pink)"}] },
  { w: 72,  h: 65,  bg: "var(--mid)", windows: [{t:"28%",l:"16%",c:"var(--green)"},{t:"28%",l:"48%",c:"var(--cyan)"},{t:"28%",l:"76%",c:"var(--yellow)"}] },
  { w: 36,  h: 125, bg: "var(--mid)", windows: [{t:"10%",l:"36%",c:"var(--pink)"},{t:"34%",l:"36%",c:"var(--green)"},{t:"58%",l:"36%",c:"var(--cyan)"},{t:"80%",l:"36%",c:"var(--yellow)"}] },
  { w: 65,  h: 85,  bg: "var(--mid)", windows: [{t:"20%",l:"20%",c:"var(--cyan)"},{t:"20%",l:"56%",c:"var(--yellow)"},{t:"55%",l:"20%",c:"var(--pink)"}] },
  { w: 45,  h: 110, bg: "var(--mid)", windows: [{t:"14%",l:"36%",c:"var(--yellow)"},{t:"40%",l:"36%",c:"var(--cyan)"},{t:"65%",l:"36%",c:"var(--green)"}] },
];

const Building = ({ w, h, bg, windows }) => (
  <div className="city-building" style={{ width: w, height: h, background: bg }} aria-hidden="true">
    {/* Pixel top antenna */}
    <div className="building-antenna" />
    {windows.map((win, i) => (
      <span key={i} className="building-win" style={{ top: win.t, left: win.l, background: win.c }} />
    ))}
  </div>
);

/* ══════════════════════════════════════════
   HERO
══════════════════════════════════════════ */
const Hero = () => {
  const titleRef = useRef(null);
  const [coinBlink, setCoinBlink] = useState(true);

  /* Glitch on interval */
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const fire = () => {
      el.classList.add("glitch-active");
      setTimeout(() => el.classList.remove("glitch-active"), 280);
    };
    const id = setInterval(fire, 3200 + Math.random() * 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" id="home" aria-label="Hero">

      {/* CRT scanlines */}
      <div className="crt-scanlines" aria-hidden="true" />
      {/* CRT vignette */}
      <div className="crt-vignette" aria-hidden="true" />

      {/* ── Synthwave perspective grid ── */}
      <div className="retro-grid" aria-hidden="true">
        <div className="retro-grid__floor" />
        <div className="retro-grid__ceiling" />
        {/* Horizon glow line removed */}
      </div>

      {/* ── HUD top bar ── */}
      <div className="hud-bar" aria-hidden="true">
        <span className="hud-label">1UP</span>
        <span className="hud-score">00000</span>
        <span className="hud-label hi">HI-SCORE</span>
        <span className="hud-score hi-val">24700</span>
        <span className="hud-label">2UP</span>
        <span className="hud-score">00000</span>
      </div>

      {/* ── Floating sprites (reduced) ── */}
      <Ghost color="var(--pink)"  className="ghost-1" />
      <Ghost color="var(--cyan)"  className="ghost-2" />
      <Invader color="var(--cyan)"   className="inv-1" />
      <Coin className="coin-1" />
      {/* Side decorations */}
      <span className="side-deco side-left"  aria-hidden="true"><Joystick /></span>
      <span className="side-deco side-right" aria-hidden="true"><PixelHeart /></span>

      {/* ── Main content ── */}
      <div className="hero-content">
        <p className="hero-pre-title">
          PROT<span className="acc">É</span>G<span className="acc">É</span>
          &nbsp;IGDTUW PRESENTS
        </p>

        <h1 className="hero-title" ref={titleRef} data-text="PROTEX">
          PROTEX
        </h1>

        <h2 className="hero-subtitle">HACK-2-WIN</h2>

        <p className="hero-tagline">Build. Innovate. Dominate.</p>

        {/* Lives + XP */}
        <div className="hero-lives-row" aria-label="Level progress">
          <PixelHeart /><PixelHeart /><PixelHeart />
          <div className="xp-bar-wrap" role="progressbar" aria-valuenow={72} aria-valuemin={0} aria-valuemax={100}>
            <div className="xp-bar-fill" />
            {/* Segmented ticks */}
            {[...Array(8)].map((_, i) => (
              <span key={i} className="xp-tick" style={{ left: `${(i + 1) * 11.1}%` }} />
            ))}
          </div>
          <span className="level-label">LEVEL UP</span>
        </div>

        {/* Deadline */}
        <p className="hero-deadline">
          <Coin className="inline-coin" />
          REGISTER BY 1ST APRIL
          <Coin className="inline-coin" />
        </p>

        {/* INSERT COIN */}
        <p className="insert-coin" aria-live="polite">
          ► INSERT COIN TO PLAY ◄
        </p>

        {/* CTA buttons */}
        <div className="hero-ctas">
          <a href="#register" className="btn btn--primary">
            <Coin className="btn-coin" /> REGISTER NOW
          </a>
          <a href="#about" className="btn btn--secondary">
            <Invader color="var(--cyan)" className="btn-inv" /> VIEW DETAILS
          </a>
        </div>
      </div>

      {/* ── Pixel cityscape ── */}
      <div className="cityscape" aria-hidden="true">
        {/* Ground strip */}
        <div className="ground-strip" />
        {BUILDINGS.map((b, i) => <Building key={i} {...b} />)}
      </div>

    </section>
  );
};

export default Hero;