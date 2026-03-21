import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="ft-top-bar" />
      <div className="ft-orb" />

      <div className="ft-inner">

        {/* LEFT — logo + org + copyright */}
        <div className="ft-left">
          <div className="ft-logo">PROTEX</div>
          <div className="ft-org">PROTÉGÉ &nbsp;·&nbsp; IGDTUW &nbsp;·&nbsp; HACK-2-WIN 2026</div>
          <p className="ft-copy">© 2026 PROTéGé IGDTUW &nbsp;·&nbsp; All Rights Reserved</p>
        </div>

        {/* divider */}
        <div className="ft-vdivider" />

        {/* RIGHT — CTA buttons + tagline */}
        <div className="ft-right">
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
          <p className="ft-tagline">BUILD · INNOVATE · DOMINATE</p>
        </div>

      </div>
    </footer>
  );
}

