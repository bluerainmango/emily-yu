import React from "react";
import sprite from "../../assets/icon/sprite.svg";

export const ContactSlot = ({ icon, to }) => (
  <div className="contact-info">
    <p>
      <svg className="icon">
        {console.log(icon)}
        <use href={sprite + "#" + icon} />
      </svg>
      {icon !== "icon-mobile" ? (
        <a href={to} target="_blank" rel="noopener noreferrer">
          {to.includes("mailto:")
            ? to.replace("mailto:", "")
            : to.includes("https://")
            ? to.replace("https://", "")
            : to}
        </a>
      ) : (
        to
      )}
    </p>
  </div>
);
