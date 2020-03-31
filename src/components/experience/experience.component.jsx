import React from "react";

import "./experience.style.css";

export const Experience = () => {
  return (
    <section id="experience" class="scrollFollower">
      <span class="anchor" id="anchor-experience"></span>
      <h2 class="section__header">EXPERIENCE</h2>
      <div class="section__container">
        <h3>
          <blockquote>
            Diligent and a hard worker. Trustworthy and honest employee.
          </blockquote>
        </h3>

        <div class="row">
          <div class="col s12">
            <div class="card wide gradient-border">
              <div class="bar top"></div>
              <div class="bar right delay"></div>
              <div class="bar bottom delay"></div>
              <bar class="bar left"></bar>
              <div class="card-content card-highlight">
                <span class="card-title">
                  Seeking! My first Job as a web developer
                </span>
                <p>
                  This slot is exclusively available for all employers.
                  Interested in me for your entry-level or junior developer?
                  Contact and take this slot!
                </p>
                <div class="card-link margin-top-3">
                  <a class="play-btn" href="mailto:bluerainmango@gmail.com">
                    <p class="valign-wrapper">Send Email</p>
                  </a>
                  <a
                    href="https://linkedin.com/in/bluerainmango"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Send a message via Linkedin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s12 m6">
            <div class="card max-width">
              <div class="card-content activator">
                <span class="card-title activator text-header">
                  Ecommerce & Online Marketing Manager
                </span>
                <p>CAILYN Cosmetics & Double Dare</p>
                <p>Santa Fe Springs, USA</p>
                <p>Aug. 2015 - Mar.2019</p>
                <a class="btn-floating halfway-fab waves-effect waves-light blue">
                  <i class="material-icons activator">library_books</i>
                </a>
                <div class="card-link margin-top-3">
                  <a href="https://www.cailyncosmetics.com" target="_blank">
                    CAILYN Cosmetics
                  </a>
                  <a href="https://doubledarespa.com/" target="_blank">
                    Double Dare
                  </a>
                </div>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  Works<i class="material-icons right">close</i>
                </span>
                <ul class="square">
                  <li>
                    Created and operated SEO optimized websites through Shopify,
                    Cafe24 and open cart web.(Retail, Wholesale, Microsite)
                  </li>
                  <li>
                    Analyzed web data and gathered insights for sales with
                    Google Analytics, campaign tags and etc.
                  </li>
                  <li>
                    Setup KPIs and built up strategies for online & eCommerce.
                    Managed social media advertisements.
                  </li>
                  <li>
                    Setup and handled online platforms such as EDI, social
                    commerce and online markets(Amazon Luxury & seller, Groupon,
                    Ulta.com, Dillard’s, Bloomingdale’s)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col s12 m6">
            <div class="card max-width">
              <div class="card-content activator">
                <span class="card-title activator text-header">
                  Online Marketer & PR Coordinator
                </span>
                <p>Hackers Education Group, Korea</p>
                <p>Seoul, South Korea</p>
                <p>Dec. 2013 - Mar.2015</p>
                <a class="btn-floating halfway-fab waves-effect waves-light blue">
                  <i class="material-icons activator">library_books</i>
                </a>
                <div class="card-link margin-top-3">
                  <a href="https://www.hackers.co.kr/" target="_blank">
                    Hackers English
                  </a>
                </div>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  Works<i class="material-icons right">close</i>
                </span>
                <ul class="square">
                  <li>
                    Planned and developed online content and e-learning systems.{" "}
                  </li>
                  <li>Operated website (www.hackers.co.kr) and mobile apps.</li>
                  <li>In charge of PR and managed online media and press.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
