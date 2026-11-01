import React from "react";

import "./contact.style.css";

export const Contact = () => {
  const contacts = [
    { label: "emily.jiyeon.yu@gmail.com", to: "mailto:emily.jiyeon.yu@gmail.com", primary: true },
    { label: "LinkedIn", to: "https://linkedin.com/in/bluerainmango" },
    { label: "GitHub", to: "https://github.com/bluerainmango" },
  ];

  return (
    <footer id="contact" className="contact">
      <div className="contact__inner">
        <h2 className="contact__title">
          Let's build something fast, accessible, and thoughtful together.
        </h2>
        <div className="contact__links">
          {contacts.map((con) => (
            <a
              key={con.label}
              className={`contact__link ${con.primary ? "contact__link--primary" : ""}`}
              href={con.to}
              {...(con.to.startsWith("https://") && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {con.label}
            </a>
          ))}
        </div>
        <p className="contact__copyright">© {new Date().getFullYear()} Emily Yu | emily-yu.dev</p>
      </div>
    </footer>
  );
};
