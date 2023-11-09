import React from "react";
import Style from "../../css/projects.module.css";
import ProjectCard from "./ProjectCard";

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
      </section>
    </>
  );
};

export default Projects;
