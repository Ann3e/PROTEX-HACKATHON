import { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    q: "Who can participate?",
    a: "All students from graduating batches 2026–2029 — Engineering, PG, UG, Management, Arts, Commerce, Sciences & Others.",
    tag: null,
  },
  {
    q: "What is the team size?",
    a: "Teams must consist of 1 to 4 members.",
    tag: null,
  },
  {
    q: "Is registration on both platforms mandatory?",
    a: "Yes! Both Unstop AND WhereUElevate + the mandatory Google Form. Entries on only one platform will NOT be valid.",
    tag: "IMPORTANT",
  },
  {
    q: "Where is the Grand Finale?",
    a: "Offline on 6th April 2026 at Microsoft Office, Noida.",
    tag: "OFFLINE",
  },
  {
    q: "What is the total prize pool?",
    a: "₹1,00,000 total. Top 3 teams win cash (₹5,000 / ₹3,000 / ₹2,000) + certificates + individual gift hampers. All participants get participation certificates.",
    tag: null,
  },
  {
    q: "Till when are the registrations open?",
    a: "Registrations as well as the Prototype Submission are open till 1st April 2026 midnight.",
    tag: "DEADLINE",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-inner">

        <span className="faq-title">
          <em>FAQ</em> — QUICK INTEL
        </span>

        <div className="faq-grid">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item${openIndex === i ? " open" : ""}`}
              onClick={() => toggle(i)}
            >
              <div className="faq-q">
                <span className="faq-q-text">{item.q}</span>
                <div className="faq-q-right">
                  {item.tag && <span className="faq-tag">{item.tag}</span>}
                  <span className="faq-arrow">▼</span>
                </div>
              </div>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact prompt */}
        <div className="faq-contact-block">
          <span className="faq-contact-text">Didn't find your answer?</span>
          <a
            href="mailto:protégéigdtuw@gmail.com"
            className="faq-contact-btn"
          >
            ✉ CONTACT US
          </a>
        </div>

      </div>
    </section>
  );
}