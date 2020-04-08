import React from "react";
import { Carousel, Row } from "react-materialize";

import { ProjectCard } from "../project-card/project-card.component";
import { projectData } from "./project.data";

import "./project.style.css";

export const Project = () => {
  return (
    <section id="project" className="scrollFollower">
      <span className="anchor"></span>
      {/* <span className="anchor" id="anchor-project"></span> */}
      <h2 className="section__header">PROJECTS</h2>
      <div className="section__container section__container--project">
        <h3>
          <blockquote>
            Individual or Team projects. Passion will always be the same.
          </blockquote>
        </h3>
        <p className="carousel-help">≪ Slide or Touch previous/next card ≫</p>
        <Carousel
          carouselId="Carousel-2"
          options={{
            dist: -100,
            duration: 200,
            fullWidth: false,
            indicators: false,
            noWrap: false,
            numVisible: 5,
            onCycleTo: null,
            padding: 0,
            shift: 0,
          }}
        >
          {projectData.map((proj) => (
            <Row key={proj.title}>
              <ProjectCard proj={proj} />
            </Row>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
