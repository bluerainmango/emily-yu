import React from "react";
import "./top-nav.style.css";

import { Navbar, NavItem, Icon } from "react-materialize";

export const TopNav = () => (
  <Navbar
    alignLinks="right"
    brand={
      <a className="brand-logo" href="#">
        Emily Yu
      </a>
    }
    centerChildren
    id="mobile-nav"
    menuIcon={<Icon>menu</Icon>}
    options={{
      draggable: true,
      edge: "left",
      inDuration: 250,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 200,
      preventScrolling: true,
      fixed: true
    }}
  >
    {/* <NavItem href="">Getting started</NavItem>
    <NavItem href="components.html">Components</NavItem> */}
  </Navbar>
);
