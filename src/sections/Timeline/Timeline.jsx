import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./Timeline.css";

/* ── Data ──────────────────────────────────────────── */
const timelineData = [
  {
    date: "Level 1 - 18th March",
    side: "right",
    accentVar: "--cyan",
    ghostColor: "#00f5ff",
    subtitle: "Registrations Begin",
    description: "Register on Unstop & WhereUElevate. Fill mandatory Google Form.",
    button: { label: "VIEW REGISTRATION STEPS", href: "#" },
    details: [
      "Fill mandatory Google Form",
      "Registration on both platforms is mandatory",
    ],
  },
  {
    date: "Level 2 - 1st April",
    side: "left",
    accentVar: "--pink",
    ghostColor: "#ff2d78",
    subtitle: "Idea + Prototype + PPT",
    description: "Submit prototype + PPT (5–6 slides) + GitHub repo on WhereUElevate platform.",
    details: [
      "Choose a problem statement from any of the four tracks",
      "Submit a working or partially working prototype",
      "PPT (5–6 slides): Problem, Solution, Tech Stack, Challenges, Future Scope",
    ],
  },
  {
    date: "Level 3 - 5th April",
    side: "right",
    accentVar: "--purple",
    ghostColor: "#7b2fff",
    subtitle: "Online Mentoring",
    description: "Live demo to mentors. Get feedback and iterate.",
    details: [
      "Shortlisted teams present prototypes via virtual sessions",
      "Live demo, Q&A, and structured feedback from industry mentors",
      "Only the best teams advance to the Grand Finale",
    ],
  },
  {
    date: "Level 4 - 6th April",
    side: "left",
    accentVar: "--yellow",
    ghostColor: "#ffd600",
    subtitle: "Grand Finale (Offline)",
    description: (
      <>
        Live pitching at Microsoft Office, Noida. <strong>Winners announced!</strong>
      </>
    ),
    details: [
      "Venue: Microsoft Office, Noida",
      "Live demonstration and presentation to jury panel",
      "Must have: live demo, GitHub repo, presentation deck",
    ],
  },
];

/* ── Pixel Ghost SVG ───────────────────────────────── */
const GhostIcon = ({ fill }) => (
  <svg
    width="28" height="30" viewBox="0 0 28 30"
    fill="none" xmlns="http://www.w3.org/2000/svg"
    className="ghost-svg"
    style={{ filter: `drop-shadow(0 0 7px ${fill})` }}
  >
    <rect x="4" y="0" width="20" height="4" fill={fill} />
    <rect x="2" y="4" width="24" height="2" fill={fill} />
    <rect x="0" y="6" width="28" height="16" fill={fill} />
    <rect x="0" y="22" width="4" height="4" fill={fill} />
    <rect x="6" y="22" width="4" height="6" fill={fill} />
    <rect x="12" y="22" width="4" height="4" fill={fill} />
    <rect x="18" y="22" width="4" height="6" fill={fill} />
    <rect x="24" y="22" width="4" height="4" fill={fill} />
    <rect x="7" y="10" width="5" height="5" fill="#0d0022" />
    <rect x="16" y="10" width="5" height="5" fill="#0d0022" />
    <rect x="8" y="11" width="2" height="2" fill="white" />
    <rect x="17" y="11" width="2" height="2" fill="white" />
  </svg>
);

/* ── Card ──────────────────────────────────────────── */
const TimelineCard = ({ item, index, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isRight = item.side === "right";

  const toggle = () => setOpenIndex(isOpen ? null : index);

  const cardVariants = {
    hidden: { opacity: 0, x: isRight ? 70 : -70 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.55,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.13,
      },
    },
  };

  const ghostVariants = {
    hidden: { opacity: 0, scale: 0.4 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: index * 0.13 + 0.18 },
    },
  };

  /* 🔥 NEW: bullet animation */
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const card = (
    <motion.div
      className={`tl-card ${isOpen ? "tl-card--open" : ""}`}
      style={{ "--accent": `var(${item.accentVar})` }}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      onClick={toggle}
    >
      <div className="card-inner">
        <div className="card-top-row">
          <h2 className="card-date">{item.date}</h2>
          <span className={`card-arrow ${isOpen ? "card-arrow--up" : ""}`}>▼</span>
        </div>

        <p className="card-subtitle">{item.subtitle}</p>
        <p className="card-desc">{item.description}</p>

        {item.button && (
          <a
            href={item.button.href}
            className="card-btn"
            onClick={(e) => e.stopPropagation()}
          >
            {item.button.label}
          </a>
        )}

        <AnimatePresence initial={false}>
          {isOpen && item.details && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              {/* 🔥 UPDATED PART */}
              <motion.ul
                className="card-details"
                variants={listVariants}
                initial="hidden"
                animate="visible"
              >
                {item.details.map((d, i) => (
                  <motion.li key={i} variants={itemVariants}>
                    {d}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );

  return (
    <div ref={ref} className={`tl-row ${isRight ? "row-right" : "row-left"}`}>
      {isRight ? <div className="tl-spacer" /> : card}

      <div className="tl-center">
        <motion.div
          variants={ghostVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <GhostIcon fill={item.ghostColor} />
        </motion.div>
      </div>

      {isRight ? card : <div className="tl-spacer" />}
    </div>
  );
};

/* ── Main Export ───────────────────────────────────── */
const Timeline = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section className="tl-section">
      <motion.div
        ref={titleRef}
        className="tl-header"
        initial={{ opacity: 0, y: -28 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="tl-title">
  TIMELINE <span className="tl-title-white">— ROAD TO GLORY</span>
</h1>
        <div className="tl-shine-line" />
      </motion.div>

      <div className="tl-body">
        <div className="tl-line" />
        {timelineData.map((item, i) => (
          <TimelineCard
            key={i}
            item={item}
            index={i}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;