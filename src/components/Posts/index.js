import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";

export default class Posts extends Component {
  render() {
    return (
      <>
        <Helmet title={`Articles - ${config.siteTitle} `} />
        <div className="container">
          <article className="single container">
            <PostHeader />
            <PostContent />
          </article>
        </div>
      </>
    );
  }
}
