import React from "react";
import Style from "../../css/projects.module.css";
import Button from "../../css/button.module.css";
import {AiOutlineGithub} from "react-icons/ai";
import {FiExternalLink} from "react-icons/fi"

const ProjectCard = ({item}) => {
  return (
    <div className={`${Style.projectCard} project`}>
      <img src={item.img} alt={item.name} />
      {/* <h2 className={Style.projectTitle}>Project Name</h2> */}
      <div className={Style.buttonSection}>
        <a className={Button.button} href={item.github} target="_blank">
          Github <AiOutlineGithub className={Button.icon} />
        </a>
        <a className={`${Button.button} ${Button.special}`} href={item.demo} target="_blank">
          Demo <FiExternalLink className={Button.icon} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
