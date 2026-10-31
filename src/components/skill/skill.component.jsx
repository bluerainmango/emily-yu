import React from "react";

import { SkillSlot } from "../skill-slot/skill-slot.component";
import html5 from "../../assets/img/html5.svg";
import css3 from "../../assets/img/css3.svg";
import sass from "../../assets/img/sass.png";
import bootstrap from "../../assets/img/bootstrap.png";
import materialize2 from "../../assets/img/materialize2.png";
import js from "../../assets/img/js.png";
import jquery from "../../assets/img/jquery.png";
import react from "../../assets/img/react.jpg";
import redux from "../../assets/img/redux.png";
import nodejs from "../../assets/img/nodejs.png";
import express from "../../assets/img/express.png";
import mysql from "../../assets/img/mysql.jpg";
import sequelize from "../../assets/img/sequelize.jpg";
import mongodb from "../../assets/img/mongodb.png";
import mongoose from "../../assets/img/mongoose.jpg";
import webpack from "../../assets/img/webpack.png";
import github from "../../assets/img/github.png";
import heroku from "../../assets/img/heroku.png";
import shopify from "../../assets/img/shopify.png";
import puppeteer from "../../assets/img/puppeteer.jpg";
import jest from "../../assets/img/jest.jpg";
import mocha from "../../assets/img/mocha.png";
import chai from "../../assets/img/chai.png";
import jenkins from "../../assets/img/jenkins.png";
import styledComponent from '../../assets/img/styled-component.png';
import aws from '../../assets/img/aws-logo.jpeg';
import saga from '../../assets/img/redux-saga.png';
import ts from '../../assets/img/typescript.png';
import python from '../../assets/img/python.png';
import accessibility from '../../assets/img/accessibility.png';
import angular from '../../assets/img/angular.png';
import nextjs from '../../assets/img/nextjs.jpg';
import nestjs from '../../assets/img/nestjs.png';
import electron from '../../assets/img/electron.png';
import storybook from '../../assets/img/storybook.png';
import cypress from '../../assets/img/cypress.png';
import datadog from '../../assets/img/datadog.png';
import bedrock from '../../assets/img/bedrock.png';

import "./skill.style.css";

export const Skill = () => {
  return (
    <section id="skill" className="scrollFollower">
      <span className="anchor"></span>
      {/* <span className="anchor" id="anchor-skill"></span> */}
      <h2 className="section__header">SKILLS</h2>
      <div className="section__container">
        <h3>
          <blockquote>
            Love learning and always ready for new technology
          </blockquote>
        </h3>

        <SkillSlot
          title="Frontend"
          skills={[
            { name: "React", image: react },
            { name: "Angular", image: angular },
            { name: "TypeScript", image: ts },
            { name: "Redux", image: redux },
            { name: "Redux-Saga", image: saga },
            { name: "Next.js", image: nextjs },
            { name: "Electron", image: electron },
            { name: "JavaScript", image: js },
            { name: "HTML5", image: html5 },
            { name: "CSS3", image: css3 },
            { name: "Sass", image: sass },
            { name: "Storybook", image: storybook },
            { name: "Bootstrap", image: bootstrap },
            { name: "Materialize", image: materialize2 },
            { name: "Styled Components", image: styledComponent },
            { name: "Accessibility", image: accessibility },
          ]}
        />
        {/* <SkillSlot title="Javascript" images={[]} /> */}

        <SkillSlot
          title="Backend"
          skills={[
            { name: "Node.js", image: nodejs },
            { name: "Express", image: express },
            { name: "NestJS", image: nestjs },
            { name: "MySQL", image: mysql },
            { name: "Sequelize", image: sequelize },
            { name: "MongoDB", image: mongodb },
            { name: "Mongoose", image: mongoose },
            { name: "Python", image: python },
          ]}
        />
        {/* <SkillSlot
          title="Automated Testing"
          images={[]}
        /> */}
        <SkillSlot
          title="Others"
          skills={[
            { name: "AWS", image: aws },
            { name: "Amazon Bedrock", image: bedrock },
            { name: "Datadog", image: datadog },
            { name: "Webpack", image: webpack },
            { name: "GitHub", image: github },
            { name: "Heroku", image: heroku },
            { name: "Shopify", image: shopify },
            { name: "Cypress", image: cypress },
            { name: "Puppeteer", image: puppeteer },
            { name: "Jest", image: jest },
            { name: "Mocha", image: mocha },
            { name: "Chai", image: chai },
            { name: "Jenkins", image: jenkins },
          ]}
        />
      </div>
    </section>
  );
};
