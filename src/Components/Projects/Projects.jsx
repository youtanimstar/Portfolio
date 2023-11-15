import React, { useRef, useState } from "react";
import Style from "../../css/projects.module.css";
import ProjectCard from "./ProjectCard";
import Button from "../../css/button.module.css";
import { FaArrowDown } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";

const Projects = () => {

  const projectData = [
    {
      name: "musichub",
      img: "musichub.png",
      github: "https://github.com/youtanimstar/music-hub",
      demo: "https://music-hub-10.netlify.app/"
    },
    {
      name: "hackerspace",
      img: "hackerspace.png",
      github: "https://github.com/youtanimstar/hackerspace",
      demo: "https://codecraft-hackerspace.netlify.app/"
    },
    {
      name: "passwordgenerator",
      img: "passwordgenerator.png",
      github: "https://github.com/youtanimstar/password-generator",
      demo: "https://passwordgeneratoryoutanimstar.netlify.app/"
    },
    {
      name: "mytodoapp",
      img: "mytodoapp.png",
      github: "https://github.com/youtanimstar/My-Todo-App",
      demo: "https://youtanimstar.github.io/My-Todo-App/"
    },
    {
      name: "hostinger",
      img: "hostinger.png",
      github: "https://github.com/youtanimstar/Hostinger",
      demo: "https://hostingers.netlify.app/"
    },
    {
      name: "calculator",
      img: "calculator.png",
      github: "https://github.com/youtanimstar/calculator",
      demo: "https://starcalculator.netlify.app/"
    },
    {
      name: "animatedbuttons",
      img: "animatedbuttons.png",
      github: "https://github.com/youtanimstar/animated-buttons",
      demo: "https://animated-button-youtanimstar.netlify.app/"
    },
  ]

  return (
    <>
      <section className={Style.projectPage} id="projects">
        <div className={Style.subTitle}>Browse My Recent</div>
        <div className={Style.title}>Projects</div>
        <div className={Style.projectSectionWrap}>
          <div className={`${Style.scrollButtonWrap} ${Style.left}`}>
            <FaLessThan className={Style.scrollButton} />
          </div>
          <div className={`${Style.scrollButtonWrap} ${Style.right}`} >
            <FaGreaterThan className={Style.scrollButton} />
          </div>
          <div className={`${Style.projectSection} snaps-inline`}  >
            {
              projectData.map((item, index)=><ProjectCard key={index} item={item}/>)
            }
          </div>
        </div>
        <Link
          to="#contact"
          className={`${Button.Next} ${Button.shakeVertical}`}
        >
          <FaArrowDown className={Button.icon} />
        </Link>
      </section>
    </>
  );
};

export default Projects;
