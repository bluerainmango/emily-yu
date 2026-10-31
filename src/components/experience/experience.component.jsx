import React from "react";

import { Row, Col } from "react-materialize";
import {
  ExperienceCardLarge,
  ExperienceItem,
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

        <div className="experience__timeline">
          {experienceData.map((experience) => (
            <ExperienceItem key={experience.company} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};
