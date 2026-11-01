import React, { useState } from "react";

import { SectionHeading } from "../section-heading/section-heading.component";
import { ProjectCard } from "../project-card/project-card.component";
import { projectData } from "./project.data";

import "./project.style.css";

const Chevron = ({ d }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);

// Centered slider: the current project in front, its neighbors peeking at the sides
export const Project = () => {
  const total = projectData.length;
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const goTo = (index) => setCurrent((index + total) % total);

  // The demo GIFs are large (up to 14MB), so only load the current one and its neighbors
  const isNear = (i) => {
    const distance = Math.abs(i - current);
    return Math.min(distance, total - distance) <= 1;
  };

  //! Swipe on touch devices
  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) > 50) goTo(diff < 0 ? current + 1 : current - 1);
    setTouchStartX(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") goTo(current - 1);
    if (e.key === "ArrowRight") goTo(current + 1);
  };

  return (
    <section id="projects" className="section">
      <div className="section__inner">
        <SectionHeading eyebrow="04 / PROJECTS">
          Individual or team projects. The passion is always the same.
        </SectionHeading>

        <div
          className="project__slider"
          aria-roledescription="carousel"
          aria-label="Projects"
          onKeyDown={handleKeyDown}
          onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
          onTouchEnd={handleTouchEnd}
        >
          <div className="project__viewport">
            <ul className="project__track" style={{ "--index": current }}>
              {projectData.map((proj, i) => (
                <ProjectCard
                  key={proj.title}
                  proj={proj}
                  label={`${i + 1} of ${total}`}
                  active={i === current}
                  near={isNear(i)}
                  onSelect={() => goTo(i)}
                />
              ))}
            </ul>
          </div>

          <div className="project__controls">
            <button
              className="project__arrow"
              onClick={() => goTo(current - 1)}
              aria-label="Previous project"
            >
              <Chevron d="M15 18l-6-6 6-6" />
            </button>
            <p className="project__count" aria-live="polite">
              <span>{String(current + 1).padStart(2, "0")}</span> /{" "}
              {String(total).padStart(2, "0")}
            </p>
            <button
              className="project__arrow"
              onClick={() => goTo(current + 1)}
              aria-label="Next project"
            >
              <Chevron d="M9 18l6-6-6-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
