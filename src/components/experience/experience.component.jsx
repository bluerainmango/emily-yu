import React from "react";

import { Row, Col } from "react-materialize";
import {
  ExperienceCardLarge,
  ExperienceCardSmall,
} from "../experience-card/experience-card.component";

import { experienceData } from "./experience.data";

import "./experience.style.css";

export const Experience = () => {
  return (
    <section id="experience" className="scrollFollower">
      <span className="anchor"></span>
      {/* <span className="anchor" id="anchor-experience"></span> */}
      <h2 className="section__header">EXPERIENCE</h2>
      <div className="section__container">
        <h3>
          <blockquote>
            Diligent and a hard worker. Trustworthy and honest employee.
          </blockquote>
        </h3>

        <Row>
          <Col s={12}>
            <ExperienceCardLarge />
          </Col>
        </Row>

        <Row>
          {experienceData.map((experience) => (
            <Col s={12} m={6} key={experience.company}>
              <ExperienceCardSmall key={experience.company} {...experience} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};
