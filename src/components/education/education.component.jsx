import React from "react";

import { EducationCard } from "../education-card/education-card.component";
import { educationData } from "./education.data";

import "./education.style.css";

export const Education = () => {
  return (
    <section id="education" className="scrollFollower no-max-height">
      <span className="anchor"></span>
      {/* <span className="anchor" id="anchor-education"></span> */}
      <h2 className="section__header">EDUCATION</h2>
      <div className="section__container no-height margin-top-3">
        {educationData.map((edu) => (
          <EducationCard key={edu.id} {...edu} />
        ))}
      </div>
    </section>
  );
};
