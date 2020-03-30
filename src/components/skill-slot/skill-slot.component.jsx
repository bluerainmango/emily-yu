import React from "react";

export const SkillSlot = props => (
  <div class="section__slot">
    <h4 class="section__slot--title">{props.title}</h4>
    {props.images.map(image => (
      <img src={image} alt={image} />
    ))}
    {/* <img
      src="./assets/img/html5.png"
      alt="html5"
      class="tooltipped"
      data-tooltip="HTML5"
      data-position="bottom"
    />
    <img
      src="./assets/img/css3.png"
      alt="css3"
      class="tooltipped"
      data-tooltip="CSS3"
      data-position="bottom"
    />
    <img
      src="./assets/img/sass.png"
      alt="sass"
      class="tooltipped"
      data-tooltip="SASS"
      data-position="bottom"
    />
    <img
      src="./assets/img/bootstrap.png"
      alt="bootstrap"
      class="tooltipped"
      data-tooltip="Bootstrap"
      data-position="bottom"
    />
    <img
      src="./assets/img/materialize.png"
      alt="materialize"
      class="tooltipped"
      data-tooltip="Materialize"
      data-position="bottom"
    /> */}
  </div>
);
