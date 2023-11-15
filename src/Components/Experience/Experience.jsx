import React from "react";
import Style from "../../css/experience.module.css";
import Language from "./Language";
import Button from "../../css/button.module.css"
import { FaArrowDown } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

const Experience = ({navRef}) => {
    
  const frontendLanguageData = [
    {
      name: "HTML",
      img: "html.png",
    },
    {
      name: "CSS",
      img: "css.png",
    },
    {
      name: "Javascript",
      img: "js.png",
    },
    {
      name: "React",
      img: "react.png",
    },
    {
      name: "Tailwind CSS",
      img: "tailwind.png",
    },
  ];
  const backendLanguageData = [
    {
      name: "Node JS",
      img: "nodejs.png",
    },
    {
      name: "Express",
      img: "express.png",
    },
    {
      name: "Mongo DB",
      img: "mongodb.png",
    }
  ];
  const otherLanguageData = [
    {
      name: "C",
      img: "c.png",
    },
    {
      name: "C++",
      img: "cpp.png",
    },
    {
      name: "Python",
      img: "python.png",
    }
  ];
  return (
    <>
      <section className={Style.experience} id="experience">
        <h2 className={Style.subTitle}>Explore My</h2>
        <h1 className={Style.title}>Experience</h1>
        <div className={Style.experienceCard}>
          <h2 className={Style.cardTitle}>Frontend Development</h2>
          <div className={Style.languageSection}>
            {frontendLanguageData.map((item, index) => (
              <Language key={index} name={item.name} img={item.img} />
            ))}
          </div>
        </div>
        <div className={Style.experienceCard}>
          <h2 className={Style.cardTitle}>Backend Development</h2>
          <div className={Style.languageSection}>
            {backendLanguageData.map((item, index) => (
              <Language key={index} name={item.name} img={item.img} />
            ))}
          </div>
        </div>
        <div className={Style.experienceCard}>
          <h2 className={Style.cardTitle}>Other Languages</h2>
          <div className={Style.languageSection}>
            {otherLanguageData.map((item, index) => (
              <Language key={index} name={item.name} img={item.img} />
            ))}
          </div>
        </div>
        <Link to="#projects" className={`${Button.Next} ${Button.shakeVertical}`}><FaArrowDown className={Button.icon}/></Link>
      </section>
    </>
  );
};

export default Experience;
