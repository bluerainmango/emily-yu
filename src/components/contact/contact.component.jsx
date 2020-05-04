import React from "react";
import { ContactSlot } from "../contact-slot/contact-slot.component";

import "./contact.style.css";

export const Contact = () => {
  const contacts = [
    { icon: "icon-gmail", to: "mailto:emily.jiyeon.yu@gmail.com" },
    { icon: "icon-linkedin", to: "https://linkedin.com/in/bluerainmango" },
    { icon: "icon-github", to: "https://github.com/bluerainmango" },
    { icon: "icon-mobile", to: "562-521-4851" },
  ];

  return (
    <section id="contact" className="scrollFollower height-100vh">
      <span className="anchor"></span>
      {/* <span className="anchor" id="anchor-contact"></span> */}
      <h2 className="section__header">CONTACT</h2>
      <div className="section__container">
        <h3>
          <blockquote>Email preferred</blockquote>
        </h3>
        {contacts.map((con) => (
          <ContactSlot key={con.icon} {...con} />
        ))}
      </div>
    </section>
  );
};
