import "./Footer.css";

const navLinks = [
  { label: "Home",        href: "#hero" },
  { label: "About",       href: "#about" },
  { label: "Tracks",      href: "#tracks" },
  { label: "Timeline",    href: "#timeline" },
  { label: "Prizes",      href: "#prizes" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Register",    href: "#register" },
  { label: "FAQ",         href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* top gradient bar — purely decorative */}
      <div className="ft-top-bar" />

      {/* background orb glow */}
      <div className="ft-orb" />

      <div className="ft-inner">

        {/* logo + org */}
        <div className="ft-logo-wrap">
          <div className="ft-logo">PROTEX</div>
          <div className="ft-org">PROTéGé &nbsp;·&nbsp; IGDTUW &nbsp;·&nbsp; HACK-2-WIN 2026</div>
        </div>

        {/* pixel divider */}
        <div className="ft-divider">
          <div className="ft-divider-line" />
          <span className="ft-divider-icon">✦</span>
          <div className="ft-divider-line ft-divider-line--right" />
        </div>

        {/* nav links */}
        <nav className="ft-links" aria-label="Footer navigation">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="ft-link">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="ft-ctas">
          <a
            href="https://chat.whatsapp.com/Cvr8viZPHOr6b8QRw8Wuvq"
            target="_blank"
            rel="noopener noreferrer"
            className="ft-btn ft-btn--wa"
          >
            💬&nbsp; WhatsApp Community
          </a>
          <a
            href="mailto:protégéigdtuw@gmail.com"
            className="ft-btn ft-btn--mail"
          >
            ✉️&nbsp; Email Us
          </a>
          <a
            href="https://unstop.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ft-btn ft-btn--register"
          >
            🔗&nbsp; Register on Unstop
          </a>
        </div>

        {/* second divider */}
        <div className="ft-divider ft-divider--bottom">
          <div className="ft-divider-line" />
          <span className="ft-divider-label">BUILD · INNOVATE · DOMINATE</span>
          <div className="ft-divider-line ft-divider-line--right" />
        </div>

        {/* copyright */}
        <p className="ft-copy">
          © 2026 Protégé IGDTUW &nbsp;·&nbsp; All Rights Reserved
          <br />
        </p>

      </div>
    </footer>
  );
}
