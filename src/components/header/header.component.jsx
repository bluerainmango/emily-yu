import React, { useEffect } from "react";
import "materialize-css";
import { Icon } from "react-materialize";

import { headerAnimation } from "./header.util";
import "./header.style.css";

const Header = (props) => {
  useEffect(() => {
    headerAnimation();
  }, []);

  return (
    <header className="header__container">
      <div className="header__intro header__intro--greet valign-wrapper">
        <div className="text">
          <p>Hi! I'm Emily,&nbsp;</p>
          <p className="word-group">
            <span className="word first">passionate</span>
            <span className="word second">diligent</span>
            <span className="word third">trustworthy</span>
            <span className="word fourth">honest</span>
          </p>
        </div>

        <a
          className="downArrow bounce"
          href="#anchor-about"
          // onClick={props.onClick}
        >
          <p>Scroll Down</p>
          <Icon className="material-icons large">keyboard_arrow_down</Icon>
        </a>
      </div>
    </header>
  );
};

export default Header;
