import React, { useState, useRef, useEffect } from "react";
import "./App.css";

import Header from "./components/header/header.component";
import { About } from "./components/about/about.component";
import { TopNav } from "./components/top-nav/top-nav.component";
import { SideNavMenu } from "./components/side-nav/side-nav.component";
import { Skill } from "./components/skill/skill.component";
import { Project } from "./components/project/project.component";
import { Experience } from "./components/experience/experience.component";
import { Education } from "./components/education/education.component";
import { Contact } from "./components/contact/contact.component";
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

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
  const [clickedMenu, setClickedMenu] = useState("");

  //! Scroll event handler for sidenav(current menu indicator + hide/show)
  const handleOnScroll = () => {
    const scrollY = window.scrollY;
    const aboutOffsetTop = aboutRef.current.offsetTop;
    const skillOffsetTop = skillRef.current.offsetTop;
    const projOffsetTop = projRef.current.offsetTop;
    const expOffsetTop = expRef.current.offsetTop;
    const eduOffsetTop = eduRef.current.offsetTop;
    const contactOffsetTop = contactRef.current.offsetTop;

    // console.log(
    //   `🐹 onScroll, window.scrollY: ${scrollY} aboutRef.scrollTop: ${aboutOffsetTop}`
    // );

    //* Follow scroll and set current menu state
    if (scrollY >= aboutOffsetTop && scrollY < skillOffsetTop) {
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

    //* Hide / show sidenav
    // if scroll down below header
    if (scrollY - aboutOffsetTop >= 0) {
      setHiddenSideNav(false);
    } else {
      setHiddenSideNav(true);
    }
  };

  //! [Init] Attach window scroll event handler
  // React comp's onScroll is not working since it's window not DOM?
  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  //! [Current Menu] Indicate current menu in side nav
  useEffect(() => {
    if (currentMenu) {
      // Remove prev menu highlight
      const prevMenu = sidenavRef.current.querySelector(".currentMenu");
      if (prevMenu) {
        prevMenu.classList.remove("currentMenu");
      }

      // Add style to current menu
      const menuToPaint = sidenavRef.current.querySelector(`.${currentMenu}`);
      menuToPaint.classList.add("currentMenu");
    }
    //! change hash
    window.location.hash = `#anchor-${currentMenu}`;
  }, [currentMenu]);

  //! [Clicked Menu] Smoothly scroll to the section when menu in side nav is clicked
  useEffect(() => {
    console.log("🦊 state's clickedMenu: ", clickedMenu);

    let scrollTo;
    switch (clickedMenu) {
      case "about":
        scrollTo = aboutRef.current.offsetTop;
        break;
      case "skill":
        scrollTo = skillRef.current.offsetTop;
        break;
      case "project":
        scrollTo = projRef.current.offsetTop;
        break;
      case "experience":
        scrollTo = expRef.current.offsetTop;
        break;
      case "education":
        scrollTo = eduRef.current.offsetTop;
        break;
      case "contact":
        scrollTo = contactRef.current.offsetTop;
        break;
      default:
        scrollTo = 0;
    }

    console.log("🐷scroll to", scrollTo, "window width:", window.innerWidth);

    //* Scroll to section (56: mobile/tablet top bar height)
    window.scroll({
      top: window.innerWidth > 992 ? scrollTo : scrollTo - 56,
      behavior: "smooth",
    });
  }, [clickedMenu]);

  // Set clicked menu state
  const handleSetClickedMenu = (() => {
    return function (e) {
      // console.log("🥝 inside", e.target, e.target.closest("a"));

      const hash = e.target.closest("a").href.split("#")[1].slice(7);
      setClickedMenu(hash);
    };
  })(setClickedMenu);

  return (
    <div className="App">
      <TopNav onClick={handleSetClickedMenu} />
      <Header onClick={handleSetClickedMenu} />
      <div ref={sidenavRef}>
        <SideNavMenu onClick={handleSetClickedMenu} hidden={hiddenSideNav} />
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
