import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../data/SiteConfig";
import PostsTitles from "../components/Posts/PostsTitles";

export default class Article extends Component {
  render() {
    return (
      <>
        <Helmet title={`Blog - ${config.siteTitle} `} />
        <div className="container">
          <h1>Articles</h1>
          <PostsTitles />
        </div>
      </>
    );
  }
}
