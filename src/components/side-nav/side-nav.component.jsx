import React from "react";
import "./side-nav.style.css";
import { SideNav, SideNavItem } from "react-materialize";
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
        id="SideNav-10"
        options={{
          closeOnClick: true
        }}
        fixed={false}
        // trigger={<Button node="button">SIDE NAV DEMO</Button>}
      >
        <SideNavItem
          user={{
            background: "https://placeimg.com/640/480/tech",
            email: "jdandturk@gmail.com",
            image: "static/media/react-materialize-logo.824c6ea3.svg",
            name: "John Doe"
          }}
          userView
        />
        <SideNavItem href="#!icon" icon="cloud">
          First Link With Icon
        </SideNavItem>
        <SideNavItem href="#!second">Second Link</SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Subheader</SideNavItem>
        <SideNavItem href="#!third" waves>
          Third Link With Waves
        </SideNavItem>
      </SideNav>
    </div>
  );
};
