import React, { Component } from "react";
import reactRouter from "../../content/thumbnails/reactrouter.png";

export default class PostHeader extends Component {
  render() {
    let imgStyle = {
      width: "100%"
    };
    return (
      <>
        <header className="single-header ">
          <div className=" gatsby-image-wrapper">
            <img src={reactRouter} alt="reactRouter" style={imgStyle} />
          </div>
          <div className="flex">
            <h1>Using React Router for a Single Page Application</h1>
            <div class="post-meta">
              <time class="date">Jun 10th, 2019</time>/
              <a class="twitter-link" href="https://github.com/johnnychen1989">
                Share
              </a>
              /
              <a class="github-link" href="https://github.com/johnnychen1989">
                Edit on Github{" "}
                <span role="img" aria-label="edit">
                  ✏️
                </span>
              </a>
            </div>
          </div>
        </header>
      </>
    );
  }
}
