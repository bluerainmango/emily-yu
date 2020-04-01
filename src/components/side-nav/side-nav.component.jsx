import React from "react";
import "./side-nav.style.css";
import { SideNav, SideNavItem } from "react-materialize";

import profileImg from "../../assets/img/profile.jpeg";
import js from "../../assets/img/js.png";
// import { Waypoint } from "waypoints";
// import $ from "jquery";

export const SideNavMenu = props => {
  // $(".sidenav").attr("style", "display:none;");

  // const [winWidth,setWinWidth] = useState($(window).width())
  // const winWidth = $(window).width();

  // useEffect(() => {
  //   if ($(window).width() > 992) {
  //     console.log("big");
  //     $(".sidenav").attr("style", "display:none;");
  //   }
  // }, [winWidth]);

  return (
    // <div style={{ display: "none" }}>
    <div
      style={{
        display: props.hidden ? "none" : "block"
      }}
    >
      <style>
        {`
                #root > div > div {
                  z-index: 99999 !important;
                  {/* transform: translateY(${props.sideNavTop}px) */}
                }
              `}
      </style>
      <SideNav
        id="sideNav"
        options={{
          closeOnClick: true
        }}
        fixed={false}
        // trigger={<Button node="button">SIDE NAV DEMO</Button>}
      >
        <SideNavItem
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
        <SideNavItem divider />
        <SideNavItem
          href="#anchor-about"
          icon="sentiment_very_satisfied"
          className="waves-effect"
        >
          About
        </SideNavItem>
        <SideNavItem
          href="#anchor-skill"
          icon="equalizer"
          className="waves-effect"
        >
          Skills
        </SideNavItem>
        <SideNavItem
          href="#anchor-project"
          icon="videogame_asset"
          className="waves-effect"
        >
          Project
        </SideNavItem>
        <SideNavItem
          href="#anchor-experience"
          icon="work"
          className="waves-effect"
        >
          Experience
        </SideNavItem>
        <SideNavItem
          href="#anchor-education"
          icon="school"
          className="waves-effect"
        >
          Education
        </SideNavItem>
        <SideNavItem
          href="#anchor-contact"
          icon="email"
          className="waves-effect"
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
