import React from 'react'
import About from '../about/About';
import Contact from '../contact/Contact';
import Intro from "../intro/Intro";
import ProjectList from '../projectList/ProjectList';
import ServiceList from '../serviceList/ServiceList';


const Home = () => {
    return (
        <div>
            <Intro />
            <About />
            <ProjectList />
            <ServiceList />
            <Contact />

        </div>
    )
}

export default Home
