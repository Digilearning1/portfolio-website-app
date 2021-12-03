import React from "react";
import portLogo from "../img/port-black.png";
import "./footer.css";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer>
      <Fade delay={500}>
        <div>
          <img src={portLogo} alt="port-logo" width="200" />
        </div>
        <div className="footer_copyright">
          Copyright &copy; 2021 All rights reserved.
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
