import React from "react";
import "./top-nav.style.css";

import { Navbar, Icon } from "react-materialize";
import { SideNavMenu } from "../side-nav/side-nav.component";
import { SideNav, SideNavItem, Button } from "react-materialize";
import NavItem from "react-materialize/lib/NavItem";

export const TopNav = props => (
  <div>
    {/* <style>
      {`
            #root > div > div {
              display: ${props.hidden ? "none" : "block"}
            }
          `}
    </style> */}
    <Navbar
      // style={{
      //   display: props.hidden ? "none" : "block"
      // }}
      alignLinks="right"
      brand={
        <p className="brand-logo" href="#">
          Emily Yu
        </p>
      }
      centerChildren
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      fixed={true}
      centerLogo={true}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
      // data-target="slide-out"
      className="sidenav-trigger show-on-large"
      // sidenav={SideNavMenu(false)}
    >
      <NavItem id="profile-mobile">
        <span>bluerainmango@gmail.com</span>
        <span>Emily Yu</span>
      </NavItem>
      <div className="divider" />
      <NavItem href="#anchor-about" className="waves-effect sidenav-close">
        <Icon>sentiment_very_satisfied</Icon>
        About
      </NavItem>
      <NavItem href="#anchor-skill" className="waves-effect sidenav-close">
        <Icon>equalizer</Icon>
        Skills
      </NavItem>
      <NavItem href="#anchor-experience" className="waves-effect sidenav-close">
        <Icon>work</Icon>
        Experience
      </NavItem>
      <NavItem href="#anchor-education" className="waves-effect sidenav-close">
        <Icon>school</Icon>
        Education
      </NavItem>
      <NavItem href="#anchor-contact" className="waves-effect sidenav-close">
        <Icon>email</Icon>
        Contact
      </NavItem>
      <NavItem
        href="https://raw.githubusercontent.com/bluerainmango/emilyYu/661e64e47ac1ac550cc454ce38acf29e0c8387fd/assets/resume_emilyYu.pdf"
        target="_blank"
        className="waves-effect sidenav-close"
      >
        <Icon>insert_drive_file</Icon>
        Resume
      </NavItem>
      {/* <NavItem>{SideNavMenu(false)}</NavItem> */}
      {/* <NavItem
        className="profile"
        user={{
          // background: { profileImg },
          // background: "https://placeimg.com/640/480/tech",
          email: "bluerainmango@gmail.com",
          // image: { profileImg },
          name: "Emily Yu"
        }}
        userView
      />
      <NavItem divider />
      <NavItem
        href="#anchor-about"
        icon="sentiment_very_satisfied"
        className="waves-effect"
      >
        About
      </NavItem>
      <NavItem href="#anchor-skill" icon="equalizer" className="waves-effect">
        Skills
      </NavItem>
      <NavItem
        href="#anchor-project"
        icon="videogame_asset"
        className="waves-effect"
      >
        Project
      </NavItem>
      <NavItem href="#anchor-experience" icon="work" className="waves-effect">
        Experience
      </NavItem>
      <NavItem href="#anchor-education" icon="school" className="waves-effect">
        Education
      </NavItem>
      <NavItem href="#anchor-contact" icon="email" className="waves-effect">
        Contact
      </NavItem>
      <NavItem
        href="https://raw.githubusercontent.com/bluerainmango/emilyYu/661e64e47ac1ac550cc454ce38acf29e0c8387fd/assets/resume_emilyYu.pdf"
        target="_blank"
        icon="insert_drive_file"
        className="waves-effect"
      >
        Resume
      </NavItem> */}
      {/* <NavItem href="">Getting started</NavItem>
    <NavItem href="components.html">Components</NavItem> */}
    </Navbar>
  </div>
);
