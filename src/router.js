import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Layout from "./Layout";
import Blog from "./pages/Blog";
import Index from "./pages";
import AboutMe from "./pages/AboutMe";
import Page404 from "./pages/404";
import Contact from "./pages/Contact";
import Posts from "./components/Posts";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Layout>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route path="/me/" component={AboutMe} />
              <Route exact path="/blog/" component={Blog} />
              <Route path="/blog/article-react-router/" component={Posts} />
              <Route path="/contact/" component={Contact} />
              <Route component={Page404} />
            </Switch>
          </Layout>
        </App>
      </BrowserRouter>
    );
  }
}
