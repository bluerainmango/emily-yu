import React from "react";
import { Carousel, Card, Icon, CardTitle, Row, Col } from "react-materialize";
import projMovieMap from "../../assets/img/proj_moviemap.gif";

import "./project.style.css";

export const Project = () => {
  return (
    <section id="project" className="scrollFollower">
      <span className="anchor" id="anchor-project"></span>
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
            indicators: true,
            noWrap: false,
            numVisible: 5,
            onCycleTo: null,
            padding: 0,
            shift: 0
          }}
        >
          <Row>
            <Col>
              <Card
                key={123}
                actions={[
                  <a
                    key={12}
                    href="https://gentle-savannah-70403.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Deployed version
                  </a>,
                  <a
                    key={1211}
                    href="https://github.com/fguzmanrs/reimagined-results"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Git repo
                  </a>
                ]}
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image={projMovieMap}></CardTitle>}
                revealIcon={<Icon>more_vert</Icon>}
              >
                <div className="card-header">
                  <h4>Movie Map</h4>
                  <span className="card-header--team">Team Proj</span>
                </div>
                <p className="role line-height-m red-text text-darken-4">
                  Role: Backend(RESTful APIs, Authentication - JWT & Cookie,
                  Error Handling), Client-side rendering(except styling, design)
                </p>
                <p>
                  The app has been created to help film buffs who want targeted
                  movie reccomendatios and the information and resources to
                  watch their finds.
                </p>
                <div className="card-tag">
                  <span>Node.js</span>
                  <span>MySQL</span>
                  <span>Sequelize</span>
                  <span>JWT</span>
                  <span>Cookie</span>
                  <span>Javascript</span>
                  <span>jQuery</span>
                  <span>Materialize</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Heroku</span>
                </div>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <Card
                key={223}
                actions={[
                  <a key="2" href="#">
                    This is a Link
                  </a>
                ]}
                closeIcon={<Icon>close</Icon>}
                header={
                  <CardTitle image="https://materializecss.com/images/sample-1.jpg">
                    Card Title
                  </CardTitle>
                }
                revealIcon={<Icon>more_vert</Icon>}
              >
                Here is the standard card with an image thumbnail.
              </Card>
            </Col>
          </Row>
        </Carousel>
      </div>
    </section>
  );
};
