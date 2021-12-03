import React from "react";
import Port2 from "../img/port-black-bg.png";
import Port1 from "../img/port-black.png";
import "./header.css";
import { ThemeContext } from "../../context";
import { useContext } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

const Header = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="container-header">
      <Slide delay={100} direction="down">
        <div className="header">
          <img
            src={darkMode ? Port1 : Port2}
            alt="port-img"
            width="200"
            style={{ color: darkMode && "#fff", marginTop: "-10px" }}
          />
          <div className="header-right">
            <NavLink
              to="/"
              style={{ color: darkMode && "#fff" }}
              exact
              activeClassName="header active"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              style={{ color: darkMode && "#fff" }}
              exact
              activeClassName="header active"
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              style={{ color: darkMode && "#fff" }}
              exact
              activeClassName="header active"
            >
              Projects
            </NavLink>
            <NavLink
              to="/services"
              style={{ color: darkMode && "#fff" }}
              exact
              activeClassName="header active"
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              style={{ color: darkMode && "#fff" }}
              exact
              activeClassName="header active"
            >
              Contact
            </NavLink>
            <Redirect to="/" />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Header;
