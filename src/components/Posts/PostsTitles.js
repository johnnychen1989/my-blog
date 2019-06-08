import React, { Component } from "react";
import { Link } from "react-router-dom";
import react from "../../content/thumbnails/react.png";

export default class PostsHeader extends Component {
  render() {
    let imgStyle = {
      width: "100%",
      height: "100%"
    };

    return (
      <div>
        <section className="posts simple">
          <Link to="/blog/article-react-router/">
            <div className="each">
              <div className=" gatsby-image-wrapper">
                <img src={react} alt="React" style={imgStyle} />
              </div>
              <div>
                <h2>Using React Router for a Single Page Application</h2>
              </div>
              <div className="alert">
                <div className="new">New!</div>
              </div>
            </div>
          </Link>
        </section>
      </div>
    );
  }
}
