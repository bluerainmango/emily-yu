import React, { useState } from "react";

const icons = {
  learn: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  person: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21c0-4 4-6 8-6s8 2 8 6",
};

const Svg = ({ children, ...props }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    {children}
  </svg>
);

const Panel = ({ id, label, icon, lines, link }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="education__panel">
      <button
        className="education__panel-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
      >
        <Svg className="education__panel-icon">
          <path d={icons[icon]} />
        </Svg>
        <span>{label}</span>
        <Svg className="education__panel-chevron">
          <path d="M6 9l6 6 6-6" />
        </Svg>
      </button>
      {open && (
        <div className="education__panel-body" id={id}>
          {lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              See the curriculum
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export const EducationCard = (props) => (
  <article className="education__item">
    <span className="education__icon" aria-hidden="true">
      <Svg width="22" height="22" stroke="#FFFFFF">
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12v5c3 2 9 2 12 0v-5" />
      </Svg>
    </span>

    <div className="education__side">
      <h3 className="education__title">{props.title}</h3>
      <span className="education__logo">
        <img src={props.logo} alt={`${props.school} logo`} />
      </span>
    </div>

    <div className="education__details">
      <p className="education__program">{props.program}</p>
      <p className="education__location">
        {props.location}
      </p>
      <div className="education__panels">
        {props.panels.map((panel, i) => (
          <Panel key={panel.label} id={`${props.id}-panel-${i}`} {...panel} />
        ))}
      </div>
    </div>
  </article>
);
