import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Link,
  FileText,
  MessageCircle,
  ExternalLink,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";
import "./registration.css";

function ScanText({ text }) {
  return (
    <span className="scan-text-wrap">
      {text}
      <span className="scan-lines" aria-hidden="true" />
    </span>
  );
}

/* ═══════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════ */
const steps = [
  {
    number: "1",
    icon: <Link size={22} />,
    label: "Register on Unstop",
  },
  {
    number: "2",
    icon: <Link size={22} />,
    label: "Register on WhereUElevate",
  },
  {
    number: "3",
    icon: <FileText size={22} />,
    label: "Fill the mandatory Google Form",
  },
];

const buttons = [
  {
    label: "REGISTER ON UNSTOP",
    icon: <ExternalLink size={15} />,
    className: "btn-pink",
    href: "https://unstop.com/hackathons/protex-build-innovate-transform-igdtuw-delhi-1661411",
  },
  {
    label: "REGISTER ON WHEREUELVATE",
    icon: <ExternalLink size={15} />,
    className: "btn-cyan",
    href: "https://whereuelevate.com/drills/protex",
  },
  {
    label: "FILL GOOGLE FORM",
    icon: <FileText size={15} />,
    className: "btn-yellow",
    href: "https://forms.gle/59aMvRquDA6K8D557",
  },
  {
    label: "JOIN WHATSAPP",
    icon: <MessageCircle size={15} />,
    className: "btn-pink",
    href: "https://chat.whatsapp.com/Cvr8viZPHOr6b8QRw8Wuvq",
  },
];

/* ═══════════════════════════════════════════════════
   STEP CARD
═══════════════════════════════════════════════════ */
function StepCard({ step, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      className="step-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.04, transition: { duration: 0.18 } }}
    >
      {/* Corner brackets */}
      <span className="px-corner tl" /><span className="px-corner tr" />
      <span className="px-corner bl" /><span className="px-corner br" />

      {/* Scan sweep on hover */}
      {hovered && (
        <motion.span
          className="step-scan"
          initial={{ top: 0, opacity: 0.7 }}
          animate={{ top: "100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeIn" }}
        />
      )}

      <span className="step-number">{step.number}</span>
      <span className="step-icon">{step.icon}</span>
      <p className="step-label">
        {step.label}
      </p>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════
   ACTION BUTTON
═══════════════════════════════════════════════════ */
function ActionButton({ btn, index }) {
  return (
    <motion.a
      href={btn.href}
      className={`action-btn ${btn.className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.03, transition: { duration: 0.15 } }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="btn-icon">{btn.icon}</span>
      <span className="btn-label">{btn.label}</span>
    </motion.a>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════ */
export default function Registration() {
  return (
    <section className="registration-section">
      <div className="grid-overlay" aria-hidden="true" />

      <div className="registration-container">

        {/* ── Title ── */}
        <motion.div
          className="title-block"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="section-title">REGISTRATION</h2>
          <div className="title-underline" />
        </motion.div>

        {/* ── Warning Banner ── */}
        <motion.div
          className="warning-banner"
          initial={{ opacity: 0, scaleX: 0.85 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="px-corner tl pink-corner" /><span className="px-corner tr pink-corner" />
          <span className="px-corner bl pink-corner" /><span className="px-corner br pink-corner" />
          <AlertTriangle size={14} className="warning-icon" />
          <span className="warning-text">
            REGISTRATION ON BOTH PLATFORMS IS MANDATORY
          </span>
          <AlertTriangle size={14} className="warning-icon" />
        </motion.div>

        {/* ── Steps ── */}
        <div className="steps-row">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <StepCard step={step} index={i} />
              {i < steps.length - 1 && (
                <motion.div
                  className="step-arrow"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.4 }}
                >
                  <ChevronRight size={22} />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ── Buttons Grid ── */}
        <div className="buttons-grid">
          {buttons.map((btn, i) => (
            <ActionButton key={i} btn={btn} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
