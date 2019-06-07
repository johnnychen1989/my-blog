import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../data/SiteConfig";

export default class UserInfo extends Component {
  render() {
    return (
      <>
        <Helmet title={`About Me – ${config.siteTitle}`} />
        <div className="container">
          <h1>About Me</h1>
          <p>I’m Zijin Chen, a front-end software developer.</p>
          <hr />
          <h1>TimeLine</h1>
          <ul>
            <li>
              <strong>1989</strong> - Born in Guangzhou, CHINA.
            </li>
            <li>
              <strong>2007</strong> - I graduate from High School and go to
              South China University of Technology for a Electronic and
              Information Engineering degree.
            </li>
            <li>
              <strong>2011</strong> - I started my first job and worked for
              Guangzhou CSR Co., Ltd. as an information system administrator for
              3 years.
            </li>
            <li>
              <strong>2014</strong> - I decided to work in Sydney, Australia, as
              a staff member of a logistics company, responsible for
              China-Australia's import and export trade work.
            </li>
            <li>
              <strong>2017</strong> - I started to like web development, and I
              enrolled in TAFE Ultimo web design course this year and got a
              certificate4.
            </li>
            <li>
              <strong>2018</strong> - I continued to study at TAFE Ultimo for a
              web development diploma.
            </li>
            <li>
              <strong>2019</strong> - I am going to complete a postgraduate
              course in web development at TAFE Ultimo and have an internship at
              a company in Auburn.
            </li>
          </ul>
        </div>
      </>
    );
  }
}
