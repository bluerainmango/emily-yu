import React from "react";
import "./side-nav.style.css";

// import { Waypoint } from "waypoints";

export const SideNav = () => {
  // Slide in the fixed sidenav according to scrolling
  //   new Waypoint({
  //     element: document.querySelector("header"),
  //     handler: function(direction) {
  //       if (direction === "down") {
  //         $(".sidenav")
  //           .attr("style", "display:block;")
  //           .addClass("sidenav-fixed");
  //       } else {
  //         if ($(window).width() > 992) {
  //           $(".sidenav").attr("style", "display:none;");
  //         }
  //       }
  //     },
  //     offset: function() {
  //       return -this.element.clientHeight;
  //     }
  //   });

  return (
    <aside>
      <ul id="slide-out" class="sidenav">
        <li>
          <div class="profile">
            <div class="background">
              <img src="../../assets/img/profile.jpeg" alt="profile" />
            </div>
            <div class="profileInfo">
              <span>Emily Yu | Full stack developer</span>
              <span>bluerainmango@gmail.com</span>
            </div>
          </div>
        </li>

        <li>
          <div class="divider" id="divider-nav"></div>
        </li>

        <li class="menu about">
          <a href="#anchor-about" class="waves-effect">
            <i class="material-icons">sentiment_very_satisfied</i>
            About
          </a>
        </li>
        <li class="menu skill">
          <a href="#anchor-skill" class="waves-effect">
            <i class="material-icons">equalizer</i>
            Skills
          </a>
        </li>
        <li class="menu project">
          <a href="#anchor-project" class="waves-effect">
            <i class="material-icons">videogame_asset</i>
            Projects
          </a>
        </li>
        <li class="menu experience">
          <a href="#anchor-experience" class="waves-effect">
            <i class="material-icons">work</i>
            Experience
          </a>
        </li>
        <li class="menu education">
          <a href="#anchor-education" class="waves-effect">
            <i class="material-icons">school</i>
            Education
          </a>
        </li>
        <li class="menu contact">
          <a href="#anchor-contact" class="waves-effect">
            <i class="material-icons">email</i>
            Contact
          </a>
        </li>
        <li>
          <a
            href="https://raw.githubusercontent.com/bluerainmango/emilyYu/661e64e47ac1ac550cc454ce38acf29e0c8387fd/assets/resume_emilyYu.pdf"
            target="_blank"
            class="waves-effect"
          >
            <i class="material-icons">insert_drive_file</i>
            Resume
          </a>
        </li>
      </ul>
    </aside>
  );
};
