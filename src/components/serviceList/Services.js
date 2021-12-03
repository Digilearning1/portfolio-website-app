import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";

const Services = ({ img, link, name, item, desc }) => {
  return (
    <div className="main">
      <Zoom delay={100}>
        <img src={img} alt={name} className="skills-image" />
        <div>
          <a href={link} target="_blank">
            <button className="s-btn">{item}</button>
          </a>
        </div>
        <Fade delay={1000}>
          <div className="main-title">
            <h3 className="skill-title">{name}</h3>
            <p className="desc">{desc}</p>
          </div>
        </Fade>
      </Zoom>
    </div>
  );
};

export default Services;
