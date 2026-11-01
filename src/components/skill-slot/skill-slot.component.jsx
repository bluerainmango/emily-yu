import React from "react";

export const SkillSlot = props => (
  <div className="skill__group">
    <h3 className="skill__group-title">{props.title}</h3>
    <ul className="skill__items">
      {props.skills.map(skill => (
        <li className="skill__item" key={skill.name}>
          <span className="skill__logo">
            <img src={skill.image} alt="" />
          </span>
          <span className="skill__name">{skill.name}</span>
        </li>
      ))}
    </ul>
  </div>
);
