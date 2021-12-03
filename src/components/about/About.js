import React from "react";
import "./about.css";
import aboutImage from "../img/about-img.png";
import polo from "../img/polo.png";
import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="about">
      <Fade delay={500}>
        <div className="about-left">
          <div className="about-card bg"></div>
          <div className="about-card">
            <img src={aboutImage} alt="about-img" className="about-img" />
          </div>
        </div>
      </Fade>
      <div className="about-right">
        <Slide delay={500} direction="right">
          <div>
            <h1 className="about-title">About Me</h1>
            <p className="about-sub">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus sunt ratione illo expedita sit aperiam assumenda
              quia at facere iure?
            </p>
            <p className="about-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              iusto soluta itaque consequatur dolores, consectetur, omnis quod
              atque accusantium nam, explicabo perspiciatis officia? Cum
              explicabo ratione corrupti voluptas, at consectetur placeat
              perferendis neque praesentium reiciendis excepturi, aliquam rem
              repellat vitae unde velit rerum maiores magnam. Recusandae
              architecto obcaecati ab modi.
            </p>
            <div className="about-award">
              <img src={polo} alt="polo" className="about-award-img" />
              <div className="about-award-texts">
                <h4 className="award-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h4>
                <p className="about-award-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium magnam sapiente, enim saepe vitae ullam blanditiis
                  odit error suscipit et.
                </p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default About;
