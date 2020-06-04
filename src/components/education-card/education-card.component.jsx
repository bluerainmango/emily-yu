import React from "react";
import { Collapsible, CollapsibleItem, Icon } from "react-materialize";
import taAdam from "../../assets/img/adam.png";
import taAndy from "../../assets/img/andy.jpeg";

import "./education-card.style.css";

export const EducationCard = (props) => (
  <div className="row no-margin">
    <div className="card horizontal wide card-restyle-edu">
      <div className="card-left">
        <h5 className="no-margin">
          <i className="material-icons medium moving-icon icon-bg">school</i>
          {props.title}
        </h5>
        <div className="card-image card-img-edu">
          <img src={props.logo} alt={`${props.logo}`} />
        </div>
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <p>{props.program}</p>
          <p>{props.period}</p>
          <p>{props.location}</p>

          <Collapsible accordion>
            <CollapsibleItem
              expanded={false}
              header="What I learned"
              icon={<Icon>widgets</Icon>}
              node="div"
            >
              {props.study}
              {props.link ? (
                <a
                  href={props.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="margin-top-3"
                >
                  <br /> > Detail Curriculum
                </a>
              ) : (
                ""
              )}
            </CollapsibleItem>

            {["ucr", "swu"].includes(props.id) ? (
              <CollapsibleItem
                expanded={false}
                header="How I was"
                icon={<Icon>person_pin</Icon>}
                node="div"
              >
                {props.id === "ucr" ? <HowIWasUcr /> : <HowIWasSwu />}
              </CollapsibleItem>
            ) : (
              ""
            )}
          </Collapsible>
        </div>
      </div>
    </div>
  </div>
);

function HowIWasUcr() {
  return (
    <div>
      <blockquote className="grade">Average Academic Grade: A+</blockquote>
      <p className="how-header">Some of the comments for projects</p>

      <div className="row comment">
        <figure className="ta">
          <img src={taAdam} alt="UCR TA's comment" />
          <figcaption className="center">Adam Abundis, Nov.21.2019</figcaption>
        </figure>
        <div className="valign-wrapper comment-words">
          "Great job...Using a while loop and setting an exit condition was a
          really good use of ensuring your requirement for min-max of
          characters. This was a professional-level solution...This is a best
          practice that will be appreciated by employers. Overall, great job.
          Keep up the good work."
        </div>
      </div>
      <div className="row comment">
        <figure className="ta">
          <img src={taAndy} alt="UCR TA's comment" />
          <figcaption className="center">Andy Huynh, Apr.08.2020</figcaption>
        </figure>
        <div className="valign-wrapper comment-words">
          "Great job on the homework, including going above and beyond. Your
          work has vastly improved and your code looks very neat and organized.
          Great quality work overall."
        </div>
      </div>
    </div>
  );
}

function HowIWasSwu() {
  return (
    <div>
      <ul>
        <li>PGA: 4.1/4.5</li>
        <li>Scholarship awarded for 2007 - 2011</li>
        <li>Graduated first place in the department</li>
        <li>Top 5% of the university</li>
      </ul>
    </div>
  );
}
