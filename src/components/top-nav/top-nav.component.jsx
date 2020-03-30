import React from "react";
import "./top-nav.style.css";

import { Navbar, Icon } from "react-materialize";

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
      {/* <NavItem href="">Getting started</NavItem>
    <NavItem href="components.html">Components</NavItem> */}
    </Navbar>
  </div>
);
