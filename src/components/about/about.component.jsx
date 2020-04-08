import React from "react";
import "materialize-css";
// import { H2 } from "react-materialize";
import "./about.style.css";

export const About = (props) => {
  return (
    <section id="about" className="scrollFollower">
      <span className="anchor"></span>
      {/* <span className="anchor" id="anchor-about"></span> */}
      <h2 className="section__header">ABOUT</h2>

      <div className="section__container">
        <h3>
          <blockquote>
            Fast learner who truly enjoys solving problems
          </blockquote>
        </h3>

        <div className="section__description">
          <p>
            Full Stack Web Developer with 5 years of experience in E-commerce
            and Online marketing. Recently educated at the University of
            California, Riverside Extension and geared up with the skill sets in
            front-end and back-end development.
          </p>

          <p>
            Pure curiosity motivated me to pursue web development and take
            pleasure in solving challenges from programming. Passionate to
            create web applications with comprehensive perspectives combined
            with my background in multimedia design and online marketing.
          </p>

          <p>
            Always persistently ready to improve performance at the highest
            level, constantly learning, and showing innovation. Significantly
            responsible for achieving goals and meeting deadlines. Works
            effectively as a team and balances personal achievement with group
            goals. Fast learner, stays positive, and dependably honest even in
            stressful challenging circumstances.
          </p>
        </div>
      </div>
    </section>
  );
};
