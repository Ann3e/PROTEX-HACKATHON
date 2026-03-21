import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="ft-top-bar" />
      <div className="ft-orb" />

      <div className="ft-inner">

        {/* logo + org */}
        <div className="ft-logo">PROTEX</div>
        <div className="ft-org">PROTÈGÈ &nbsp;·&nbsp; IGDTUW &nbsp;·&nbsp; HACK-2-WIN 2026</div>

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

        {/* divider */}
        <div className="ft-divider">
          <div className="ft-divider-line" />
          <span className="ft-divider-label">BUILD · INNOVATE · DOMINATE</span>
          <div className="ft-divider-line ft-divider-line--right" />
        </div>

        {/* copyright */}
        <p className="ft-copy">
          © 2026 Protégé IGDTUW &nbsp;·&nbsp; All Rights Reserved
        </p>

      </div>
    </footer>
  );
}

