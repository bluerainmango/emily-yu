import React from "react";

// Numbered eyebrow ("01 / ABOUT") over the section title
export const SectionHeading = ({ eyebrow, children }) => (
  <div className="section__heading">
    <p className="section__eyebrow">{eyebrow}</p>
    <h2 className="section__title">{children}</h2>
  </div>
);
