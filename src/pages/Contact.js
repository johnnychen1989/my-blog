import React, { Component } from "react";
import Helmet from "react-helmet";
import NewsletterForm from "../components/NewsletterForm";
import config from "../data/SiteConfig";

export default class Contact extends Component {
  render() {
    return (
      <>
        <Helmet title={`Contact – ${config.siteTitle}`} />
        <div className="container">
          <h1>Stay in Touch</h1>
          <p>I write about JavaScript, programming, and front-end design.</p>
          <NewsletterForm />
          <p>You can also contact me via email or find me around the web.</p>
          <ul>
            <li>
              <strong>Email</strong>:{" "}
              <a href="mailto:johnnychen198901@gmail.com.au">
                johnnychen198901@gmail.com.au
              </a>
            </li>
            <li>
              <strong>GitHub</strong>:{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/johnnychen1989"
              >
                johnnychen
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
