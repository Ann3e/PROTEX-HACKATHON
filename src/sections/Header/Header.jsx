import React, { useState, useEffect } from "react";
import "./Header.css";

const NAV_LINKS = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Tracks",   href: "#tracks" },
  { label: "Timeline", href: "#timeline" },
  { label: "Register", href: "#register" },
  { label: "Prizes",   href: "#prizes" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ",      href: "#faq" },
];

const ControllerIcon = () => (
  <svg
    className="logo-icon-svg"
    width="20"
    height="20"
    viewBox="0 0 22 22"
    fill="none"
    aria-hidden="true"
  >
    <rect x="2" y="7" width="18" height="10" rx="3" stroke="currentColor" strokeWidth="1.8" fill="none" />
    <rect x="5" y="9" width="2" height="2" fill="currentColor" />
    <rect x="5" y="13" width="2" height="2" fill="currentColor" />
    <rect x="3" y="11" width="2" height="2" fill="currentColor" />
    <rect x="7" y="11" width="2" height="2" fill="currentColor" />
    <circle cx="15" cy="10.5" r="1.1" fill="currentColor" />
    <circle cx="17" cy="12.5" r="1.1" fill="currentColor" />
    <circle cx="13" cy="12.5" r="1.1" fill="currentColor" />
    <circle cx="15" cy="14.5" r="1.1" fill="currentColor" />
  </svg>
);

const Header = () => {
  const [active, setActive]     = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ── Scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Body scroll lock ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ── Active section via IntersectionObserver ── */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = NAV_LINKS.find(
              ({ href }) => href === `#${entry.target.id}`
            );
            if (match) setActive(match.label);
          }
        });
      },
      {
        // fires when section crosses the middle band of viewport
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className={`protex-header${scrolled ? " protex-header--scrolled" : ""}`}>
        <div className="header-scanlines" aria-hidden="true" />

        {/* ── LOGO ── */}
        <a
          href="#home"
          className="header-logo"
          onClick={() => { setActive("Home"); setMenuOpen(false); }}
          aria-label="PROTEX – Home"
        >
          <span className="logo-icon-wrap">
            <ControllerIcon />
          </span>
          <span className="logo-wordmark">PROTEX</span>
          <span className="logo-cursor" aria-hidden="true">_</span>
        </a>

        {/* ── DESKTOP NAV ── */}
        <nav className="header-nav" aria-label="Main navigation">
          <ul className="nav-list" role="list">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = active === label;
              return (
                <li key={label} className="nav-item">
                  <a
                    href={href}
                    className={`nav-link${isActive ? " nav-link--active" : ""}`}
                    onClick={() => setActive(label)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                    {isActive && <span className="nav-active-dot" aria-hidden="true" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ── HAMBURGER ── */}
        <button
          className={`hamburger${menuOpen ? " hamburger--open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-drawer"
        >
          <span className="ham-line" />
          <span className="ham-line" />
          <span className="ham-line" />
        </button>
      </header>

      {/* ── MOBILE DRAWER ── */}
      <div
        id="mobile-drawer"
        className={`mobile-drawer${menuOpen ? " mobile-drawer--open" : ""}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="drawer-scanlines" aria-hidden="true" />
        <nav aria-label="Mobile navigation">
          <ul className="drawer-list" role="list">
            {NAV_LINKS.map(({ label, href }, i) => {
              const isActive = active === label;
              return (
                <li
                  key={label}
                  className="drawer-item"
                  style={{ "--delay": `${i * 0.06}s` }}
                >
                  <a
                    href={href}
                    className={`drawer-link${isActive ? " drawer-link--active" : ""}`}
                    onClick={() => { setActive(label); setMenuOpen(false); }}
                    tabIndex={menuOpen ? 0 : -1}
                  >
                    <span className="drawer-prefix" aria-hidden="true">
                      {isActive ? "▶" : "›"}
                    </span>
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="drawer-footer" aria-hidden="true">
          <span className="drawer-footer-text">BUILD · INNOVATE · DOMINATE</span>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="drawer-overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;