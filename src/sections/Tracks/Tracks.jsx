import { useState } from "react";

const tracksData = [
  {
    id: 1,
    num: "TRACK 01",
    icon: "🤖",
    title: "AI / GenAI",
    tagline: "Build with LLMs, RAG pipelines, multimodal AI, or agent frameworks",
    previewTags: ["OpenAI", "Claude", "LangChain"],
    idealFor: "Chatbots, code assistants, document intelligence, image-text applications",
    techLabel: "ENCOURAGED TECH",
    techTags: ["OpenAI", "Anthropic Claude", "LangChain", "LlamaIndex", "HuggingFace"],
    color: "#ff2d78",
    colorRgb: "255,45,120",
  },
  {
    id: 2,
    num: "TRACK 02",
    icon: "⚡",
    title: "Agentic AI / Workflows",
    tagline: "Build autonomous agents for multi-step reasoning and real-world task execution",
    previewTags: ["AutoGen", "CrewAI", "LangGraph"],
    idealFor: "Web browsing agents, code-executing bots, automated research pipelines",
    techLabel: "ENCOURAGED TECH",
    techTags: ["AutoGen", "CrewAI", "LangGraph", "Tool-use APIs"],
    color: "#00f5ff",
    colorRgb: "0,245,255",
  },
  {
    id: 3,
    num: "TRACK 03",
    icon: "💰",
    title: "Personal Finance & Wealth",
    tagline: "Target Gen Z with accessible, smart and engaging financial tools",
    previewTags: ["Financial APIs", "Data Viz"],
    idealFor: "Investment advisors, tax filing helpers, retirement calculators, budget trackers",
    techLabel: "ENCOURAGED TECH",
    techTags: ["Financial APIs", "Data Visualization", "ML Recommendations"],
    color: "#ffd600",
    colorRgb: "255,214,0",
  },
  {
    id: 4,
    num: "TRACK 04",
    icon: "🌍",
    title: "Open Innovation",
    tagline: "No domain restriction — solve any real-world problem that matters to you",
    previewTags: ["Social Impact", "HealthTech"],
    idealFor: "Social impact apps, productivity tools, civic tech, healthcare, education",
    techLabel: "JUDGED ON",
    techTags: ["Innovation", "Impact", "Execution", "Feasibility"],
    color: "#7b2fff",
    colorRgb: "123,47,255",
  },
];

// ── Inline styles using JS objects (no Tailwind / external CSS needed) ──
const base = {
  fontFamily: "'Share Tech Mono', monospace",
};

function TrackCard({ track, isOpen, onToggle }) {
  const c = track.color;
  const rgb = track.colorRgb;

  return (
    <div
      onClick={onToggle}
      style={{
        background: "#0e0028",
        border: `1px solid ${isOpen ? c : `rgba(${rgb},.28)`}`,
        boxShadow: isOpen
          ? `0 0 26px rgba(${rgb},.2), 0 16px 36px rgba(0,0,0,.5)`
          : "none",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color .3s, box-shadow .3s",
        fontFamily: "'Share Tech Mono', monospace",
      }}
    >
      {/* top glow bar */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "2px",
          background: c,
          boxShadow: `0 0 8px ${c}`,
          opacity: isOpen ? 1 : 0,
          transition: "opacity .3s",
        }}
      />

      {/* ── HEAD (always visible) ── */}
      <div style={{ padding: "26px 22px 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {/* track num + chevron */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "0.95rem",
              letterSpacing: "3px",
              color: c,
              opacity: 0.85,
            }}
          >
            {track.num}
          </span>
          <span
            style={{
              color: c,
              fontSize: "1.1rem",
              opacity: isOpen ? 1 : 0.7,
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform .35s ease",
            }}
          >
            ▼
          </span>
        </div>

        {/* icon */}
        <div style={{ fontSize: "2.8rem", filter: "drop-shadow(0 0 5px rgba(255,255,255,.2))" }}>
          {track.icon}
        </div>

        {/* title */}
        <div
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 900,
            fontSize: "1.15rem",
            lineHeight: 1.3,
            color: c,
            textShadow: `0 0 8px ${c}`,
          }}
        >
          {track.title}
        </div>

        {/* tagline */}
        <div style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "rgba(255,255,255,.62)" }}>
          {track.tagline}
        </div>

        {/* preview tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {track.previewTags.map((t) => (
            <Tag key={t} label={t} color={c} rgb={rgb} />
          ))}
        </div>
      </div>

      {/* ── EXPANDABLE BODY ── */}
      <div
        style={{
          maxHeight: isOpen ? "350px" : "0",
          overflow: "hidden",
          transition: "max-height .45s ease, padding .3s",
          padding: isOpen ? "0 22px 26px" : "0 22px",
        }}
      >
        {/* divider */}
        <div
          style={{
            height: "1px",
            background: `rgba(${rgb},.3)`,
            marginBottom: "18px",
            opacity: isOpen ? 1 : 0,
            transition: "opacity .3s .1s",
          }}
        />

        <Label text="IDEAL FOR" color={c} />
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "rgba(255,255,255,.75)", marginBottom: "4px" }}>
          {track.idealFor}
        </p>

        <Label text={track.techLabel} color={c} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
          {track.techTags.map((t) => (
            <Tag key={t} label={t} color={c} rgb={rgb} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Tag({ label, color, rgb }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: "0.6rem",
        padding: "6px 13px",
        letterSpacing: "1px",
        border: `1px solid rgba(${rgb},.38)`,
        background: hovered ? `rgba(${rgb},.18)` : `rgba(${rgb},.07)`,
        color: color,
        transition: "background .2s",
        cursor: "default",
      }}
    >
      {label}
    </span>
  );
}

function Label({ text, color }) {
  return (
    <div
      style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: "0.65rem",
        letterSpacing: "2px",
        color: color,
        marginBottom: "9px",
        marginTop: "16px",
      }}
    >
      {text}
    </div>
  );
}

export default function Tracks() {
  // Track 1 open by default
  const [openId, setOpenId] = useState(0);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
     id="tracks"
      style={{
        background: "#080012",
        padding: "80px 20px",
        fontFamily: "'Share Tech Mono', monospace",
      }}
    >
      {/* Google Fonts — paste this in your index.html <head> if not already there */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap" rel="stylesheet" /> */}

      {/* Section Title */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <span
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
            letterSpacing: "3px",
            color: "#fff",
          }}
        >
          <span style={{ color: "#ff2d78", textShadow: "0 0 14px #ff2d78" }}>TRACKS</span>
          {" — CHOOSE YOUR BATTLE"}
        </span>
        {/* underline bar */}
        <div
          style={{
            width: "70px", height: "3px",
            background: "linear-gradient(90deg, #ff2d78, #00f5ff)",
            margin: "14px auto 0",
            boxShadow: "0 0 10px #00f5ff",
          }}
        />
      </div>

      {/* Cards Grid */}
      <div
        style={{
          maxWidth: "1140px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
          alignItems: "start",
        }}
      >
        {tracksData.map((track) => (
          <TrackCard
            key={track.id}
            track={track}
            isOpen={openId === track.id}
            onToggle={() => toggle(track.id)}
          />
        ))}
      </div>
    </section>
  );
}
