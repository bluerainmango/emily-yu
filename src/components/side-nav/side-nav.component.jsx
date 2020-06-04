import React from "react";
import "./side-nav.style.css";
import { SideNav, SideNavItem } from "react-materialize";

export const SideNavMenu = (props) => {
  // // Set clicked menu state
  // const handleSetClickedMenu = (e) => {
  //   const hash = e.target.href.split("#")[1].slice(7);
  //   props.setClickedMenu(hash);
  // };

  return (
    <div
      style={{
        display: props.hidden ? "none" : "block",
        zIndex: "99999 !important",
      }}
    >
      <SideNav
        id="sideNav"
        options={{
          closeOnClick: true,
        }}
        fixed={false}
      >
        <SideNavItem
          className="profile"
          user={{
            email: "emily.jiyeon.yu@gmail.com",
            name: "Emily Yu",
          }}
          userView
        />
        <SideNavItem divider />
        <SideNavItem
          href="#anchor-about"
          icon="sentiment_very_satisfied"
          className="waves-effect about"
          onClick={props.onClick}
        >
          About
        </SideNavItem>
        <SideNavItem
          href="#anchor-skill"
          icon="equalizer"
          className="waves-effect skill"
          onClick={props.onClick}
        >
          Skills
        </SideNavItem>
        <SideNavItem
          href="#anchor-project"
          icon="videogame_asset"
          className="waves-effect project"
          onClick={props.onClick}
        >
          Project
        </SideNavItem>
        <SideNavItem
          href="#anchor-experience"
          icon="work"
          className="waves-effect experience"
          onClick={props.onClick}
        >
          Experience
        </SideNavItem>
        <SideNavItem
          href="#anchor-education"
          icon="school"
          className="waves-effect education"
          onClick={props.onClick}
        >
          Education
        </SideNavItem>
        <SideNavItem
          href="#anchor-contact"
          icon="email"
          className="waves-effect contact"
          onClick={props.onClick}
        >
          Contact
        </SideNavItem>
        <SideNavItem
          href="https://github.com/bluerainmango/emily-yu/blob/master/src/assets/resume-emily-yu-graphic.pdf?raw=true"
          target="_blank"
          icon="insert_drive_file"
          className="waves-effect"
        >
          Resume(Graphic ver.)
        </SideNavItem>
        <SideNavItem
          href="https://github.com/bluerainmango/emily-yu/blob/master/src/assets/resume-emily-yu-ats.docx?raw=true"
          target="_blank"
          icon="insert_drive_file"
          className="waves-effect"
        >
          Resume(Word ver.)
        </SideNavItem>
      </SideNav>
    </div>
  );
};
