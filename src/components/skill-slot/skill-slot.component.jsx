import React from "react";

export const SkillSlot = props => (
  <div className="section__slot">
    <h4 className="section__slot--title">{props.title}</h4>
    <div className="section__slot--items">
      {props.skills.map(skill => (
        <figure className="section__slot--item" key={skill.name}>
          <img src={skill.image} alt="" />
          <figcaption>{skill.name}</figcaption>
        </figure>
      ))}
    </div>
  </div>
);
