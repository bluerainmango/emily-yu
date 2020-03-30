import React from "react";

export const SkillSlot = props => (
  <div className="section__slot">
    <h4 className="section__slot--title">{props.title}</h4>
    {props.images.map(image => (
      <img src={image} alt={image} key={image} />
    ))}
  </div>
);
