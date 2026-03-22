import React from 'react';
import './Sponsors.css';


const Sponsors = () => {
  return (
    <section className="sponsors-section" id="sponsors">
      {/* Arcade Header */}
      <div className="sponsors-title-wrap">
  <h2 className="sponsors-title">
    <span className="title-accent">SPONSORS</span>
    <span className="title-plain"> - POWER-UPS</span>
  </h2>
  <div className="sponsors-title-underline" />
</div>

      {/* 4-Player Grid */}
      <div className="sponsors-grid">
        
        {/* Sponsor 1 */}
        <div className="sponsor-card player-one">
          <div className="sponsor-screen">
            {/* Direct path to the public folder */}
            <img src="/Sponsors/WHEREUELEVATE.jpeg" alt="WHERE U ELEVATE Logo" className="sponsor-logo" />
          </div>
          <div className="card-footer">
            <span className="player-tag">P1</span>
            <span className="sponsor-name">WHERE U ELEVATE</span>
          </div>
        </div>

        {/* Sponsor 2 */}
        <div className="sponsor-card player-two">
          <div className="sponsor-screen">
            <img src="/Sponsors/unstop.jpg" alt="Unstop Logo" className="sponsor-logo" />
          </div>
          <div className="card-footer">
            <span className="player-tag">P2</span>
            <span className="sponsor-name">Unstop</span>
          </div>
        </div>

        {/* Sponsor 3 */}
        <div className="sponsor-card player-three">
          <div className="sponsor-screen">
            <img src="/Sponsors/SarvagyaNirakar.jpeg" alt="Sarvagya Nirakar Logo" className="sponsor-logo" />
          </div>
          <div className="card-footer">
            <span className="player-tag">P3</span>
            <span className="sponsor-name">Sarvagya Nirakar</span>
          </div>
        </div>

        {/* Sponsor 4 */}
        <div className="sponsor-card player-four">
          <div className="sponsor-screen">
            <img src="/Sponsors/GeekRoom.jpeg" alt="Geek Room Logo" className="sponsor-logo" />
          </div>
          <div className="card-footer">
            <span className="player-tag">P4</span>
            <span className="sponsor-name">Geek Room</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Sponsors;