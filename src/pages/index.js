import React, { Component } from "react";
import Helmet from "react-helmet";
import GitHubButton from "react-github-btn";
import { Link } from "react-router-dom";
// import PostListing from "../components/PostListing";
import config from "../data/SiteConfig";
// import projects from "../data/projects";
// import speaking from "../data/speaking";
// import podcasts from "../data/podcasts";
import react from "../content/thumbnails/react.png";
import vue from "../content/thumbnails/vue.png";
import js from "../content/thumbnails/js.png";
import PostsHeader from "../components/Posts/PostsTitles";

export default class Index extends Component {
  render() {
    // const { data } = this.props;
    // const latestPostEdges = data.latest.edges;
    console.log(this.props);
    return (
      <>
        <Helmet title={`${config.siteTitle} – Front-End Software Developer`} />
        <div className="container">
          <div className="lead">
            <div>
              <h1>{`Hi, I'm Zijin`}</h1>
              <p>
                {`I'm a front-end software developer specializing in modern JavaScript. I write about
                what I know and break down complex concepts in an accessible and intuitive
                way.`}
              </p>
              <p>
                There are some practical projects what I did before:{` `}
                <a href="https://github.com/" target="blank">
                  Project 1
                </a>
                {`, `}
                <a href="https://github.com/" target="blank">
                  Project 2
                </a>
                {`, `}
                <a href="https://github.com/" target="blank">
                  Project 3
                </a>
              </p>
              <div className="social-buttons">
                <div>
                  <GitHubButton
                    href="https://github.com/johnnychen1989"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Follow @johnnychen on GitHub"
                  >
                    Follow
                  </GitHubButton>
                </div>
              </div>
            </div>
            <div className="callouts">
              <Link to="/blog" className="article-callout">
                <img src={react} alt="React" /> React
              </Link>
              <Link to="/blog" className="article-callout">
                <img src={vue} alt="Vue" /> Vue
              </Link>
              <Link to="/blog" className="article-callout">
                <img src={js} alt="JS" /> JavaScript ES6
              </Link>
            </div>
          </div>

          <div className="container front-page">
            <section className="section">
              <h2>Latest Articles</h2>
              {/* <PostListing simple postEdges={latestPostEdges} /> */}
              <PostsHeader />
            </section>
          </div>
        </div>
      </>
    );
  }
}
