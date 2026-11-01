import React from "react";

import { SectionHeading } from "../section-heading/section-heading.component";
import {
  ExperienceCardLarge,
  ExperienceItem,
} from "../experience-card/experience-card.component";

import { experienceData } from "./experience.data";

import "./experience.style.css";

export const Experience = () => {
  return (
    <section id="experience" className="section section--alt">
      <div className="section__inner">
        <SectionHeading eyebrow="03 / EXPERIENCE">
          Diligent, trustworthy, and honest. A teammate you can count on.
        </SectionHeading>

        <ExperienceCardLarge />

        <div className="experience__timeline">
          {experienceData.map((experience, i) => (
            <ExperienceItem
              key={experience.company}
              current={i === 0}
              {...experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
