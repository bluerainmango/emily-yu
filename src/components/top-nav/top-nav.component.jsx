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
    </Navbar>
  </div>
);
