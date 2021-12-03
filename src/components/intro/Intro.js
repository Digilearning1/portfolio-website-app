import React from "react";
import "./intro.css";
import Me from "../img/me3.png";
import { Slide, Fade } from "react-awesome-reveal";

const Intro = () => { 
  return (
    <div className="intro">
      <div className="intro-left">
        <Slide direction="right">
        <div className="intro-left-wrapper">
          <div className="intro-title">Web Developer</div>
          <h2 className="intro-intro">Hello, my name is</h2>
          <h1 className="intro-name">Digital Solutions Master</h1>
          <p className="intro-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            molestiae placeat facere, laborum ducimus vero!
          </p>
          <div className="btn-top-25px">
            <div className="button-container">
              <a href="#" className="button-primary w-button">
                Browse Gallery
              </a>
            </div>
          </div>
        </div>
        </Slide>
      </div>
      <div className="intro-right">
        <Fade delay={500} triggerOnce>
        <div className="intro-bg"></div>
        <img src={Me} alt="" className="intro-img" />
        </Fade>
      </div>
    </div>
  );
};

export default Intro;
