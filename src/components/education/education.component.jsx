import React from "react";

import { SectionHeading } from "../section-heading/section-heading.component";
import { EducationCard } from "../education-card/education-card.component";
import { educationData } from "./education.data";

import "./education.style.css";

export const Education = () => {
  return (
    <section id="education" className="section">
      <div className="section__inner">
        <SectionHeading eyebrow="06 / EDUCATION">Where it all started</SectionHeading>
        <div className="education__timeline">
          {educationData.map((edu) => (
            <EducationCard key={edu.id} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
};
