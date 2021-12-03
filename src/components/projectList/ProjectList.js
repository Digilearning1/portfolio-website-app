import React from "react";
import Projects from "../projects/Projects";
import "./projectList.css";
import {projects} from '../../data.js'

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Latest Projects</h1>
        <p className="pl-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
          distinctio nostrum eius voluptas praesentium ab? Facere, tenetur
          corrupti. Nulla aperiam facere excepturi architecto veritatis harum
          iste voluptas praesentium non ab?
        </p>
      </div>
      <div className="pl-list">
            {
                projects.map((item)=>{
                    return (
                        <Projects key={item.id} img={item.img} link={item.link} />
                    )
                })
            }


          
      </div>
    </div>
  );
};

export default ProjectList;
