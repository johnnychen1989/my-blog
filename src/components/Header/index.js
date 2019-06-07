import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import floppy from "../../images/floppy.png";
import sun from "../../images/sun.svg";
import moon from "../../images/moon.svg";
import ThemeContext from "../context/ThemeContext";

export default class Header extends Component {
  static contextType = ThemeContext;

  state = {
    scrolled: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.navOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.navOnScroll);
  }

  navOnScroll = () => {
    if (window.scrollY > 20) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  render() {
    const { menuLinks } = this.props;
    const { scrolled } = this.state;
    const theme = this.context;

    return (
      <nav className={scrolled ? "nav scroll" : "nav"}>
        <div className="nav-container">
          <div className="brand">
            <NavLink to="/">
              <img src={floppy} className="favicon" alt="floppy" />
              <span className="text">Zijin Chen</span>
            </NavLink>
          </div>
          <div className="links">
            {menuLinks.map(link => (
              <NavLink key={link.name} to={link.link} activeClassName="active">
                {link.name}
              </NavLink>
            ))}
            <div className="cta">
              <button className="dark-switcher" onClick={theme.toggleDark}>
                {theme.dark ? (
                  <span>
                    <img src={sun} className="theme-icon" alt="Light Mode" />
                  </span>
                ) : (
                  <span>
                    <img src={moon} className="theme-icon" alt="Dark Mode" />
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
