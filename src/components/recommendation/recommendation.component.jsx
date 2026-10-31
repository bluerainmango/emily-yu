import React, { useState, useEffect } from "react";

import { recommendationData } from "./recommendation.data";

import "./recommendation.style.css";

const AUTOPLAY_MS = 7000;

// Cards visible at once (sidenav takes 300px above 992px, so 3 cards need a wide screen)
const getPerView = () => {
  if (window.innerWidth >= 1400) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
};

const prefersReducedMotion = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Pause only for keyboard focus, so a click/tap on arrows or dots keeps autoplay going
const isKeyboardFocus = (el) => {
  try {
    return el.matches(":focus-visible");
  } catch (err) {
    return false;
  }
};

const RecommendationCard = ({
  name,
  image,
  title,
  relationship,
  text,
  active,
  expanded,
  onToggle,
}) => {
  const isLong = text.length > 300;

  return (
    <div className="recommendation__card">
      <div className="recommendation__author">
        <img className="recommendation__photo" src={image} alt={name} />
        <div>
          <p className="recommendation__name">{name}</p>
          <p className="recommendation__meta">{title}</p>
          <p className="recommendation__meta">{relationship}</p>
        </div>
      </div>
      <i className="material-icons recommendation__quote-icon">format_quote</i>
      <p
        className={`recommendation__text ${
          isLong && !expanded ? "recommendation__text--clamped" : ""
        }`}
      >
        {text}
      </p>
      {isLong && (
        <button
          className="recommendation__toggle"
          onClick={onToggle}
          tabIndex={active ? 0 : -1}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
};

export const Recommendation = () => {
  const total = recommendationData.length;
  const [perView, setPerView] = useState(getPerView);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);

  // Number of slide positions (moves one card at a time)
  const positions = Math.max(total - perView + 1, 1);

  const goTo = (index) => {
    setExpandedIndex(null);
    setCurrent((index + positions) % positions);
  };

  //! Update cards per view on resize
  useEffect(() => {
    const handleResize = () => setPerView(getPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //! Keep current position valid when perView changes
  useEffect(() => {
    if (current > positions - 1) setCurrent(positions - 1);
  }, [current, positions]);

  //! Auto slide to the right (stops while hovered, focused, or reading a full quote)
  useEffect(() => {
    if (paused || expandedIndex !== null || prefersReducedMotion()) return;

    const timer = setTimeout(() => goTo(current + 1), AUTOPLAY_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, paused, expandedIndex, positions]);

  //! Swipe on touch devices
  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) > 50) goTo(diff < 0 ? current + 1 : current - 1);
    setTouchStartX(null);
  };

  return (
    <section id="recommendation" className="scrollFollower">
      <span className="anchor"></span>
      <h2 className="section__header">RECOMMENDATIONS</h2>
      <div className="section__container">
        <h3>
          <blockquote>What my teammates say</blockquote>
        </h3>

        <div
          className="recommendation__slider"
          aria-roledescription="carousel"
          aria-label="Recommendations"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={(e) => isKeyboardFocus(e.target) && setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="recommendation__arrow recommendation__arrow--prev"
            onClick={() => goTo(current - 1)}
            aria-label="Previous recommendation"
          >
            <i className="material-icons">chevron_left</i>
          </button>

          <div className="recommendation__viewport">
            <div
              className="recommendation__track"
              style={{ transform: `translateX(-${(current * 100) / perView}%)` }}
            >
              {recommendationData.map((rec, i) => {
                const visible = i >= current && i < current + perView;
                return (
                  <div
                    className="recommendation__slide"
                    style={{ flexBasis: `${100 / perView}%` }}
                    key={rec.name}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${i + 1} of ${total}`}
                    aria-hidden={!visible}
                  >
                    <RecommendationCard
                      {...rec}
                      active={visible}
                      expanded={expandedIndex === i}
                      onToggle={() =>
                        setExpandedIndex(expandedIndex === i ? null : i)
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <button
            className="recommendation__arrow recommendation__arrow--next"
            onClick={() => goTo(current + 1)}
            aria-label="Next recommendation"
          >
            <i className="material-icons">chevron_right</i>
          </button>
        </div>

        <div className="recommendation__dots">
          {Array.from({ length: positions }, (_, i) => (
            <button
              key={i}
              className={`recommendation__dot ${
                i === current ? "recommendation__dot--active" : ""
              }`}
              onClick={() => goTo(i)}
              aria-label={`Show recommendations starting from ${recommendationData[i].name}`}
              aria-current={i === current}
            />
          ))}
        </div>

        <a
          className="recommendation__more"
          href="https://www.linkedin.com/in/bluerainmango/details/recommendations/"
          target="_blank"
          rel="noopener noreferrer"
        >
          See all on LinkedIn
        </a>
      </div>
    </section>
  );
};
