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

function App() {
  const mainRef = useRef();
  const [hiddenSideNav, setHiddenSideNav] = useState(true);
  // const [hiddenTopNav, setHiddenTopNav] = useState(true);
  // const [sideNavTop, setSideNavTop] = useState(0);

  const handleOnScroll = () => {
    const scrollY = window.scrollY;
    const mainOffsetTop = mainRef.current.offsetTop;

    console.log(
      `onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${mainOffsetTop}`
    );

    // if scroll down below main
    if (scrollY - mainOffsetTop >= 0) {
      console.log("show");
      setHiddenSideNav(false);
      // setHiddenTopNav(false);
    } else {
      console.log("hide");
      setHiddenSideNav(true);
      // setHiddenTopNav(true);
    }
  };

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
      <SideNavMenu hidden={hiddenSideNav} />
      <main ref={mainRef}>
        <About />
        <Skill />
        <Project />
      </main>
    </div>
  );
}

export default App;
