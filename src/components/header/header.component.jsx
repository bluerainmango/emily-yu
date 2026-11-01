import React from "react";

import profile from "../../assets/img/profile-hero.jpg";
import "./header.style.css";

const RAIN_DENSITY = 36;

// Deterministic pseudo-random in [0, 1) so the rain looks the same on every load
const random = (i, seed) => (((Math.sin((i + 1) * seed) * 10000) % 1) + 1) % 1;

// About one in nine drops falls in mango
const drops = Array.from({ length: RAIN_DENSITY }, (_, i) => ({
  mango: i % 9 === 4,
  style: {
    left: `${(random(i, 12.9898) * 100).toFixed(2)}%`,
    height: `${Math.round(50 + random(i, 78.233) * 90)}px`,
    animationDuration: `${(1.6 + random(i, 37.719) * 1.8).toFixed(2)}s`,
    animationDelay: `${(-random(i, 93.989) * 3).toFixed(2)}s`,
    // Resting spot when motion is reduced
    "--rest": `${Math.round(random(i, 45.164) * 520)}px`,
  },
}));

const Header = () => (
  <section id="top" className="header">
    <div className="header__rain" aria-hidden="true">
      {drops.map((drop, i) => (
        <span
          key={i}
          className={`header__drop ${drop.mango ? "header__drop--mango" : ""}`}
          style={drop.style}
        />
      ))}
    </div>

    <div className="header__content">
      <div className="header__photo">
        <img src={profile} alt="Emily Yu" width="640" height="640" />
      </div>
      <div className="header__text">
        <p className="header__eyebrow">
          FULL-STACK &amp; FRONTEND ENGINEER IN ANAHEIM, CA
        </p>
        <h1 className="header__title">
          Hi, I'm <strong>Emily</strong>.<br />I sweat the <em>details</em>,
          <br />
          so software feels fast and kind to everyone.
        </h1>
        <p className="header__intro">
          I'm a full-stack and frontend engineer with 4+ years of experience at
          Amazon (AWS WorkDocs) and Extron. I build with React, Angular,
          TypeScript, Node.js, and AWS.
        </p>
      </div>
    </div>

    <a className="header__scroll" href="#about" aria-label="Scroll down to About">
      <span aria-hidden="true">SCROLL</span>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </a>
  </section>
);

export default Header;
