import React from "react";
import Style from "../../css/projects.module.css";
import ProjectCard from "./ProjectCard";
import Button from "../../css/button.module.css"
import { FaArrowDown } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";


const Projects = () => {
  return (
    <>
      <section className={Style.projectPage} id="projects">
        <div className={Style.subTitle}>Browse My Recent</div>
        <div className={Style.title}>Projects</div>
        <div className={Style.projectSection}>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            
        </div>
        <Link to="#contact" className={`${Button.Next} ${Button.shakeVertical}`}><FaArrowDown className={Button.icon}/></Link>
      </section>
    </>
  );
};

export default Projects;
