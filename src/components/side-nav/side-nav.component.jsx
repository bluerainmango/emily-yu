import React from "react";
import "./side-nav.style.css";
import { SideNav, SideNavItem } from "react-materialize";

export const SideNavMenu = props => {
  return (
    <div
      style={{
        display: props.hidden ? "none" : "block"
      }}
    >
      <style>
        {`
                #root > div > div {
                  z-index: 99999 !important;
                }
              `}
      </style>
      <SideNav
        id="sideNav"
        options={{
          closeOnClick: true
        }}
        fixed={false}
      >
        <SideNavItem
          className="profile"
          user={{
            email: "bluerainmango@gmail.com",
            name: "Emily Yu"
          }}
          userView
        />
        <SideNavItem divider />
        <SideNavItem
          href="#anchor-about"
          icon="sentiment_very_satisfied"
          className="waves-effect about"
        >
          About
        </SideNavItem>
        <SideNavItem
          href="#anchor-skill"
          icon="equalizer"
          className="waves-effect skill"
        >
          Skills
        </SideNavItem>
        <SideNavItem
          href="#anchor-project"
          icon="videogame_asset"
          className="waves-effect project"
        >
          Project
        </SideNavItem>
        <SideNavItem
          href="#anchor-experience"
          icon="work"
          className="waves-effect experience"
        >
          Experience
        </SideNavItem>
        <SideNavItem
          href="#anchor-education"
          icon="school"
          className="waves-effect education"
        >
          Education
        </SideNavItem>
        <SideNavItem
          href="#anchor-contact"
          icon="email"
          className="waves-effect contact"
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
