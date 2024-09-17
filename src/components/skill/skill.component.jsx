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
          images={[react, angular, ts, redux, saga, nextjs, electron, js, html5, css3, sass, storybook, bootstrap, materialize2, styledComponent, accessibility]}
        />
        {/* <SkillSlot title="Javascript" images={[]} /> */}

        <SkillSlot
          title="Backend"
          images={[nodejs, express, nestjs, mysql, sequelize, mongodb, mongoose, python]}
        />
        {/* <SkillSlot
          title="Automated Testing"
          images={[]}
        /> */}
        <SkillSlot
          title="Others"
          images={[webpack, github, aws, heroku, shopify, puppeteer, jest, mocha, chai, jenkins]}
        />
      </div>
    </section>
  );
};
