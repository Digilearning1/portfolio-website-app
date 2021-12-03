import React, { useContext, useRef } from "react";
import Phone from "../img/phone.png";
import Email from "../img/email.png";
import Address from "../img/address.png";
import "./contact.css";
import { ThemeContext } from "../../context";
import { Fade, Slide } from "react-awesome-reveal";

const Contact = () => {
  const formRef = useRef();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent to refresh page
    alert("Form submitted successfully");
  };
  return (
    <div className="cont">
      <div className="cont-bg"></div>
      <div className="cont-wrapper">
        <div className="cont-left">
          <Slide delay={200}>
            <div>
              <h1 className="cont-title">Let's get in touch today!</h1>
              <p className="cont-desc">
                <b>Lorem, ipsum dolor sit amet</b> consectetur adipisicing elit.
                Incidunt error omnis labore veritatis aperiam, animi
                exercitationem illum harum nobis fugit, quasi nam recusandae
                facere ad?
              </p>
              <div className="cont-info">
                <div className="cont-info-item">
                  <img src={Phone} alt="phone" className="cont-icon" /> +91
                  xxxxxxxxxx
                </div>
                <div className="cont-info-item">
                  <img src={Email} alt="email" className="cont-icon" />{" "}
                  contact@gmail.com
                </div>
                <div className="cont-info-item">
                  <img src={Address} alt="address" className="cont-icon" />
                  20/41, Macload Nagar, Mumbai
                </div>
              </div>
            </div>
          </Slide>
        </div>
        <div className="cont-right">
          <Fade delay={500}>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                type="text"
                name="user_name"
                placeholder="Full name"
                style={{
                  backgroundColor: darkMode && "#333",
                  color: darkMode && "#fff",
                }}
              />
              <input
                type="text"
                name="user_subject"
                placeholder="Subject"
                style={{
                  backgroundColor: darkMode && "#333",
                  color: darkMode && "#fff",
                }}
              />
              <input
                type="text"
                name="user_email"
                placeholder="Email"
                style={{
                  backgroundColor: darkMode && "#333",
                  color: darkMode && "#fff",
                }}
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                style={{
                  backgroundColor: darkMode && "#333",
                  color: darkMode && "#fff",
                }}
              ></textarea>
              <button className="contact-form-submit">Submit</button>
            </form>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Contact;
