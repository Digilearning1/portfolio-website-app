import React from "react";
import "./services.css";
import Services from "./Services";
import { skills } from "../../data";

const ServiceList = () => {
  return (
    <div className="container">
      <h1>Our Services</h1>
      <div className="img-container">
        {skills.map((item) => {
          return (
            <Services
              key={item.id}
              img={item.img}
              link={item.link}
              name={item.name}
              item={item.item}
              desc={item.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ServiceList;
