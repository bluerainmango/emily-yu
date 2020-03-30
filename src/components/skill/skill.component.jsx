import React from "react";

import { SkillSlot } from "../skill-slot/skill-slot.component";
import html5 from "../../assets/img/html5.png";
import css3 from "../../assets/img/css3.png";
import sass from "../../assets/img/sass.png";
import bootstrap from "../../assets/img/bootstrap.png";
import materialize from "../../assets/img/materialize.png";
import js from "../../assets/img/js.png";
import jquery from "../../assets/img/jquery.png";
import react from "../../assets/img/react.png";
import nodejs from "../../assets/img/nodejs.png";
import express from "../../assets/img/express.png";
import mysql from "../../assets/img/mysql.jpg";
import sequelize from "../../assets/img/sequelize.jpg";
import mongodb from "../../assets/img/mongodb.png";
import mongoose from "../../assets/img/mongoose.png";
import webpack from "../../assets/img/webpack.png";
import github from "../../assets/img/github.png";
import heroku from "../../assets/img/heroku.png";
import shopify from "../../assets/img/shopify.png";
import cafe24 from "../../assets/img/cafe24.jpg";

import "./skill.style.css";

export const Skill = () => {
  return (
    <section id="skill" class="scrollFollower">
      <span class="anchor" id="anchor-skill"></span>
      <h2 class="section__header">SKILLS</h2>
      <div class="section__container">
        <h3>
          <blockquote>
            Love learning and always ready for new technology
          </blockquote>
        </h3>

        <SkillSlot
          title="HTML & CSS"
          images={[html5, css3, sass, bootstrap, materialize]}
        />
        <SkillSlot title="Javascript" images={[js, jquery, react]} />
        <SkillSlot
          title="Backend"
          images={[nodejs, express, mysql, sequelize, mongodb, mongoose]}
        />
        <SkillSlot
          title="Others"
          images={[webpack, github, heroku, shopify, cafe24]}
        />
      </div>
    </section>
  );
};
