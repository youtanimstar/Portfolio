import React, { useRef, useState } from "react";
import Style from "../../css/projects.module.css";
import ProjectCard from "./ProjectCard";
import Button from "../../css/button.module.css";
import { FaArrowDown } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import Title from "../../css/title_subTitle.module.css"
import {projectData} from "./ProjectData";


const Projects = () => {
  const projectSection = useRef();
  return (
    <>
      <section className={Style.projectPage} id="projects">
        {/* Title section */}
        <div className={Title.subTitle}>Browse My Recent</div>
        <div className={Title.title}>Projects</div>
        {/* Project Section start */}
        <div className={Style.projectSectionWrap}>
          {/* Left Scroll Button */}
          <div className={`${Style.scrollButtonWrap} ${Style.left}`} onClick={()=>projectSection.current.scrollLeft -= 300}>
            <FaLessThan className={Style.scrollButton} />
          </div>
          
          {/* Project Section Horizontal Scroll Section */}
          <div className={`${Style.projectSection} snaps-inline`} ref={projectSection}  >
            {
              // Project Section Card Loading section
              projectData.map((item, index)=><ProjectCard key={index} item={item}/>)
            }
          </div>
          {/* Right Scroll Button */}
          <div className={`${Style.scrollButtonWrap} ${Style.right}`} onClick={()=>projectSection.current.scrollLeft += 300}>
            <FaGreaterThan className={Style.scrollButton} />
          </div>
        </div>

        {/* Others */}
        {/* <Link
          to="#contact"
          className={`${Button.Next} ${Button.shakeVertical}`}
        >
          <FaArrowDown className={Button.icon} />
        </Link> */}
      </section>
    </>
  );
};

export default Projects;
