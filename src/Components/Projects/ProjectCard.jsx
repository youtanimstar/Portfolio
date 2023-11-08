import React from "react";
import Style from "../../css/projects.module.css";
import Button from "../../css/button.module.css";
import {AiOutlineGithub} from "react-icons/ai";
import {FiExternalLink} from "react-icons/fi"

const ProjectCard = () => {
  return (
    <div className={Style.projectCard}>
      <img src="coming_soon.jpg" alt="" />
      <h2 className={Style.projectTitle}>Project Name</h2>
      <div className={Style.buttonSection}>
        <button className={Button.button}>
          Github <AiOutlineGithub className={Button.icon} />
        </button>
        <button className={Button.button}>
          Demo <FiExternalLink className={Button.icon} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
