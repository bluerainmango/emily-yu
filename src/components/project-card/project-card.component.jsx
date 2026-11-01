import React from "react";

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  </svg>
);

// Side cards are inert (not focusable); clicking one brings it to the front
export const ProjectCard = ({ proj, label, active, near, onSelect }) => (
  <li
    className={`project__slide ${active ? "project__slide--active" : ""}`}
    role="group"
    aria-roledescription="slide"
    aria-label={label}
    onClick={active ? undefined : onSelect}
  >
    <article className="project__card" inert={!active}>
      <div className="project__image">
        {near && <img src={proj.image} alt={`${proj.title} demo`} />}
      </div>
      <div className="project__body">
        <div className="project__header">
          <h3 className="project__title">{proj.title}</h3>
          <span className={`project__type project__type--${proj.type}`}>
            {proj.type === "Team" ? "Team" : "Individual"}
          </span>
        </div>
        <p className="project__description">{proj.description}</p>
        {proj.role && <p className="project__role">{proj.role}</p>}
        <ul className="project__tags" aria-label="Tech stack">
          {proj.tech.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <div className="project__links">
          {proj.linkDeploy && (
            <a href={proj.linkDeploy} target="_blank" rel="noopener noreferrer">
              Live demo <ExternalIcon />
            </a>
          )}
          <a href={proj.linkRepo} target="_blank" rel="noopener noreferrer">
            GitHub repo <ExternalIcon />
          </a>
        </div>
      </div>
    </article>
  </li>
);
