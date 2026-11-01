import React, { useState, useEffect } from "react";

import { SectionHeading } from "../section-heading/section-heading.component";
import { recommendationData } from "./recommendation.data";

import "./recommendation.style.css";

const AUTOPLAY_MS = 7000;

// Cards visible at once
const getPerView = () => {
  if (window.innerWidth >= 1200) return 3;
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
  } catch {
    return false;
  }
};

const Chevron = ({ d }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);

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
    <article className="recommendation__card">
      <div className="recommendation__author">
        <img className="recommendation__photo" src={image} alt={name} />
        <div>
          <p className="recommendation__name">{name}</p>
          <p className="recommendation__meta">{title}</p>
          <p className="recommendation__meta">{relationship}</p>
        </div>
      </div>
      <svg className="recommendation__quote-icon" width="34" height="26" viewBox="0 0 32 24" aria-hidden="true">
        <path d="M0 24V14C0 6 4 1 12 0l1 4c-4 1-6 4-6 8h5v12H0Zm19 0V14c0-8 4-13 12-14l1 4c-4 1-6 4-6 8h5v12H19Z" />
      </svg>
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
    </article>
  );
};

export const Recommendation = () => {
  const total = recommendationData.length;
  const [perView, setPerView] = useState(getPerView);
  const [slideIndex, setSlideIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);

  // Number of slide positions (moves one card at a time)
  const positions = Math.max(total - perView + 1, 1);
  // Keep the position valid when perView grows on resize
  const current = Math.min(slideIndex, positions - 1);

  const goTo = (index) => {
    setExpandedIndex(null);
    setSlideIndex((index + positions) % positions);
  };

  //! Update cards per view on resize
  useEffect(() => {
    const handleResize = () => setPerView(getPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <section id="recommendations" className="section">
      <div className="section__inner">
        <SectionHeading eyebrow="02 / RECOMMENDATIONS">
          What my teammates say
        </SectionHeading>

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
            className="recommendation__arrow"
            onClick={() => goTo(current - 1)}
            aria-label="Previous recommendation"
          >
            <Chevron d="M15 18l-6-6 6-6" />
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
            className="recommendation__arrow"
            onClick={() => goTo(current + 1)}
            aria-label="Next recommendation"
          >
            <Chevron d="M9 18l6-6-6-6" />
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
            >
              <span />
            </button>
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
