import React, { Component } from "react";
import Helmet from "react-helmet";
import ThemeContext from "../components/context/ThemeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import config from "../data/SiteConfig";
import favicon from "../images/favicon.png";
import "../styles/main.scss";

export default class Layout extends Component {
  static contextType = ThemeContext;

  render() {
    const { dark, notFound } = this.context;
    const { children } = this.props;
    // console.log(this.props);
    let themeClass = "";

    if (dark && !notFound) {
      themeClass = "dark";
    } else if (notFound) {
      themeClass = "not-found";
    }

    return (
      <>
        <Helmet
          bodyAttributes={{
            class: `theme ${themeClass}`
          }}
        >
          <meta name="description" content={config.siteDescription} />
          <link rel="shortcut icon" type="image/png" href={favicon} />
        </Helmet>
        <Header menuLinks={config.menuLinks} />
        <main id="main-content">{children}</main>
        <Footer />
      </>
    );
  }
}
