import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Users,
  GraduationCap,
  Building2,
  ShieldAlert,
} from "lucide-react";
import "./eligibility.css";

/* ── Glitch Text Component ─────────────────────────────── */
function GlitchText({ text }) {
  return (
    <span className="glitch-text-wrap">
      <span className="glitch-base">{text}</span>
      <span className="glitch-layer layer-1" aria-hidden="true">{text}</span>
      <span className="glitch-layer layer-2" aria-hidden="true">{text}</span>
      <span className="glitch-layer layer-3" aria-hidden="true">{text}</span>
    </span>
  );
}

/* ── Data ──────────────────────────────────────────────── */
const entryRequirements = [
  {
    icon: <CalendarDays size={20} />,
    text: "Open to students from 2026, 2027, 2028, and 2029 graduating batches only",
  },
  {
    icon: <Users size={20} />,
    text: "Team size: 1 to 4 members",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "All team members must be from the same graduation year",
  },
  {
    icon: <Building2 size={20} />,
    text: null,
    glitch: "Inter-college teams allowed (same graduation year). Inter-specialization allowed",
  },
];

const rules = [
  "One submission per team — multiple entries are not permitted",
  "All work must be original — plagiarism leads to disqualification",
  "Project must be built during the hackathon — pre-built solutions not accepted",
  "All team members must attend the Grand Finale in person if shortlisted",
];

/* ── Animations ────────────────────────────────────────── */
const cardVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const rulesContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const ruleItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/* ── Component ─────────────────────────────────────────── */
export default function Eligibility() {
  return (
    <section className="eligibility-section">
      <div className="grid-overlay" aria-hidden="true" />

      <div className="eligibility-container">

        {/* Section Title */}
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          ELIGIBILITY &amp; RULES
        </motion.h2>

        <div className="title-underline" aria-hidden="true" />

        {/* Entry Requirements */}
        <div className="block-wrapper">
          <motion.p
            className="block-label cyan"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Entry Requirements
          </motion.p>

          <div className="cards-list">
            {entryRequirements.map((item, i) => (
              <motion.div
                key={i}
                className="entry-card"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.015 }}
              >
                <span className="card-icon">{item.icon}</span>
                <p className="card-text">
                  {item.glitch ? <GlitchText text={item.glitch} /> : item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Game Rules */}
        <div className="block-wrapper">
          <motion.p
            className="block-label pink"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Game Rules
          </motion.p>

          <motion.div
            className="rules-box"
            variants={rulesContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="rules-header">
              <ShieldAlert size={22} className="shield-icon" />
              <span className="rules-title">RULES</span>
            </div>

            <ul className="rules-list">
              {rules.map((rule, i) => (
                <motion.li
                  key={i}
                  className="rule-item"
                  variants={ruleItemVariants}
                >
                  <span className="rule-dot" aria-hidden="true" />
                  <span className="rule-text">{rule}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
