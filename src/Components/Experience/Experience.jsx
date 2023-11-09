import React from "react";
import Style from "../../css/experience.module.css";
import Language from "./Language";

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
      name: "PHP",
      img: "php.png",
    },
    
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
      </section>
    </>
  );
};

export default Experience;
