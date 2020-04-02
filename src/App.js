import React, { useState, useRef, useEffect } from "react";
import "./App.css";

// import $ from "jquery";
// import { Waypoint } from "react-waypoint";

import Header from "./components/header/header.component";
import { About } from "./components/about/about.component";
import { TopNav } from "./components/top-nav/top-nav.component";
import { SideNavMenu } from "./components/side-nav/side-nav.component";
import { Skill } from "./components/skill/skill.component";
import { Project } from "./components/project/project.component";
import { Experience } from "./components/experience/experience.component";
import { Education } from "./components/education/education.component";
import { Contact } from "./components/contact/contact.component";

function App() {
  const sidenavRef = useRef();
  const aboutRef = useRef();
  const skillRef = useRef();
  const projRef = useRef();
  const expRef = useRef();
  const eduRef = useRef();
  const contactRef = useRef();
  const [hiddenSideNav, setHiddenSideNav] = useState(true);
  const [currentMenu, setCurrentMenu] = useState("");
  // const [hiddenTopNav, setHiddenTopNav] = useState(true);
  // const [sideNavTop, setSideNavTop] = useState(0);

  const handleOnScroll = () => {
    const scrollY = window.scrollY;
    const aboutOffsetTop = aboutRef.current.offsetTop;
    const skillOffsetTop = skillRef.current.offsetTop;
    const projOffsetTop = projRef.current.offsetTop;
    const expOffsetTop = expRef.current.offsetTop;
    const eduOffsetTop = eduRef.current.offsetTop;
    const contactOffsetTop = contactRef.current.offsetTop;

    console.log(
      `onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${aboutOffsetTop}`
    );

    //! Scroll follower(show current menu section in sidenav)
    if (scrollY >= aboutOffsetTop && scrollY < skillOffsetTop) {
      console.log("hello????");

      setCurrentMenu("about");
    } else if (scrollY >= skillOffsetTop && scrollY < projOffsetTop) {
      setCurrentMenu("skill");
    } else if (scrollY >= projOffsetTop && scrollY < expOffsetTop) {
      setCurrentMenu("project");
    } else if (scrollY >= expOffsetTop && scrollY < eduOffsetTop) {
      setCurrentMenu("experience");
    } else if (scrollY >= eduOffsetTop && scrollY < contactOffsetTop) {
      setCurrentMenu("education");
    } else if (scrollY >= contactOffsetTop) {
      setCurrentMenu("contact");
    }

    // setCurrentMenu("about");
    // const menu = sidenavRef.current.querySelector(`.${currentMenu}`);
    // console.log(currentMenu, menu);

    //! Hide / show sidenav
    // if scroll down below main
    if (scrollY - aboutOffsetTop >= 0) {
      console.log("show");
      setHiddenSideNav(false);
      // setHiddenTopNav(false);
    } else {
      console.log("hide");
      setHiddenSideNav(true);
      // setHiddenTopNav(true);
    }
  };

  //! Indicate current menu in side nav
  useEffect(() => {
    if (currentMenu) {
      // Remove prev menu highlight

      const prevMenu = sidenavRef.current.querySelector(".currentMenu");
      if (prevMenu) {
        prevMenu.classList.remove("currentMenu");
        console.log("🩸prev menu", prevMenu);
      }
      const menuToPaint = sidenavRef.current.querySelector(`.${currentMenu}`);
      menuToPaint.classList.add("currentMenu");
    }
  }, [currentMenu]);

  //! Attach scroll event handler
  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  return (
    <div className="App">
      <TopNav />
      <Header />
      <div ref={sidenavRef}>
        <SideNavMenu hidden={hiddenSideNav} />
      </div>
      <main>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={skillRef}>
          <Skill />
        </div>
        <div ref={projRef}>
          <Project />
        </div>
        <div ref={expRef}>
          <Experience />
        </div>
        <div ref={eduRef}>
          <Education />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
