import React from 'react';
import './Prizes.css';

const Prizes = () => {
  return (
    <section className="prizes-section" id="prizes">

      <div className="prizes-title-wrap">
        <h2 className="prizes-title">
          <span className="title-accent">PRIZES</span>
          <span className="title-plain"> · CLAIM YOUR LOOT</span>
        </h2>
        <div className="prizes-title-underline" />
      </div>

      {/* Total Prize Pool */}
      <div className="prize-pool-container">
        <p className="pool-label">TOTAL PRIZE POOL</p>
        <h1 className="pool-amount">₹1,00,000</h1>
        <div className="spinning-coins">
          <div className="coin"></div>
          <div className="coin"></div>
          <div className="coin"></div>
          <div className="coin"></div>
          <div className="coin"></div>
        </div>
      </div>

      {/* Prize Cards */}
      <div className="prize-cards-container">

        {/* 1st Place */}
        <div className="prize-card first-place">
          <div className="icon-wrapper yellow">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
              <path d="M4 22h16"/>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
            </svg>
          </div>
          <div className="prize-amount yellow-text">₹5,000</div>
          <h3>1ST PLACE</h3>
          <p>CASH + GIFT HAMPER +<br/>CERTIFICATE</p>
        </div>

        {/* 2nd Place */}
        <div className="prize-card second-place">
          <div className="icon-wrapper blue">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
              <circle cx="12" cy="8" r="7"/>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
            </svg>
          </div>
          <div className="prize-amount blue-text">₹3,000</div>
          <h3>2ND PLACE</h3>
          <p>CASH + GIFT HAMPER +<br/>CERTIFICATE</p>
        </div>

        {/* 3rd Place */}
        <div className="prize-card third-place">
          <div className="icon-wrapper pink">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.61 2.14a2 2 0 0 1 .14 2.2L16.79 15"/>
              <path d="M11 12 5.12 2.2"/>
              <path d="m13 12 5.88-9.8"/>
              <path d="M8 7h8"/>
              <circle cx="12" cy="17" r="5"/>
              <polyline points="12 18 13 16 14 17"/>
            </svg>
          </div>
          <div className="prize-amount pink-text">₹2,000</div>
          <h3>3RD PLACE</h3>
          <p>CASH + GIFT HAMPER +<br/>CERTIFICATE</p>
        </div>

      </div>

      {/* Bottom banners */}
      <div className="prize-banners">
        <div className="prize-banner">
          <svg className="banner-icon pink" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
            <polyline points="20 12 20 22 4 22 4 12"/>
            <rect x="2" y="7" width="20" height="5"/>
            <line x1="12" y1="22" x2="12" y2="7"/>
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
          </svg>
          <div>
            <div className="banner-title">GIFT HAMPERS</div>
            <div className="banner-sub">INDIVIDUAL HAMPER FOR EACH WINNING TEAM MEMBER</div>
          </div>
        </div>

        <div className="prize-banner">
          <svg className="banner-icon cyan" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
          <div>
            <div className="banner-title">PARTICIPATION CERTIFICATE</div>
            <div className="banner-sub">FOR ALL PARTICIPANTS WHO COMPLETE THE HACKATHON</div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Prizes;