import React from 'react';
import './Prizes.css';

const Prizes = () => {
  return (
    <section className="prizes-section" id="prizes">
      {/* Header */}
     <div className="prizes-title-wrap">
  <h2 className="prizes-title">
    <span className="title-accent">PRIZES</span>
    <span className="title-plain"> - CLAIM YOUR LOOT</span>
  </h2>
  <div className="prizes-title-underline" />
</div>

      {/* Total Prize Pool */}
      <div className="prize-pool-container">
        <p className="pool-label">TOTAL PRIZE POOL</p>
        <h1 className="pool-amount">₹1,00,000</h1>
        
        {/* Spinning Arcade Coins */}
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
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
              <path d="M4 22h16"></path>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
            </svg>
          </div>
          <h3>1st Place</h3>
          <p>Cash Prize + Hamper</p>
        </div>

        {/* 2nd Place */}
        <div className="prize-card second-place">
          <div className="icon-wrapper blue">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
              <circle cx="12" cy="8" r="7"></circle>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
            </svg>
          </div>
          <h3>2nd Place</h3>
          <p>Cash Prize + Hamper</p>
        </div>

        {/* 3rd Place */}
        <div className="prize-card third-place">
          <div className="icon-wrapper pink">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.61 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path>
              <path d="M11 12 5.12 2.2"></path>
              <path d="m13 12 5.88-9.8"></path>
              <path d="M8 7h8"></path>
              <circle cx="12" cy="17" r="5"></circle>
              <polyline points="12 18 13 16 14 17"></polyline>
            </svg>
          </div>
          <h3>3rd Place</h3>
          <p>Cash Prize + Hamper</p>
        </div>
      </div>

      <div className="gift-hamper-banner">
        <svg className="gift-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
          <polyline points="20 12 20 22 4 22 4 12"></polyline>
          <rect x="2" y="7" width="20" height="5"></rect>
          <line x1="12" y1="22" x2="12" y2="7"></line>
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
        </svg>
        <span className="gift-text">Gift Hampers for all winners!</span>
      </div>

    </section>
  );
};

export default Prizes;