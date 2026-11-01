import React from "react";
import "./App.css";

import { Nav } from "./components/nav/nav.component";
import Header from "./components/header/header.component";
import { About } from "./components/about/about.component";
import { Recommendation } from "./components/recommendation/recommendation.component";
import { Experience } from "./components/experience/experience.component";
import { Project } from "./components/project/project.component";
import { Skill } from "./components/skill/skill.component";
import { Education } from "./components/education/education.component";
import { Contact } from "./components/contact/contact.component";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Header />
        <About />
        <Recommendation />
        <Experience />
        <Project />
        <Skill />
        <Education />
      </main>
      <Contact />
    </div>
  );
}

export default App;
