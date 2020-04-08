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
            email: "bluerainmango@gmail.com",
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
          href="https://raw.githubusercontent.com/bluerainmango/emilyYu/661e64e47ac1ac550cc454ce38acf29e0c8387fd/assets/resume_emilyYu.pdf"
          target="_blank"
          icon="insert_drive_file"
          className="waves-effect"
        >
          Resume
        </SideNavItem>
      </SideNav>
    </div>
  );
};
