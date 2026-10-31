import React from "react";
// no-inline: SVG <use> can't reference a data: URL, which Vite uses for small assets
import sprite from "../../assets/icon/sprite.svg?no-inline";

export const ContactSlot = ({ icon, to }) => (
  <div className="contact-info">
    <p>
      <svg className="icon">
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
