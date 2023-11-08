import React, { useRef } from "react";
import Style from "../css/about.module.css";
import { MdOutlineWork } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
const About = ({navRef}) => {
    
  return (
    <>
      <section className={Style.About} ref={navRef}>
        <div className={Style.top}>
          <div className={Style.subTitle}>Get To Know More</div>
          <div className={Style.title}>About Me</div>
        </div>
        <div className={Style.bottom}>
          <div className={Style.left}>
            <img src="youtanimstar3.jpg" alt="about_img" />
          </div>
          <div className={Style.right}>
            <div className={Style.experienceSection}>
              <div className={Style.card}>
                <MdOutlineWork className={Style.cardIcon}/>
                <h2 className={Style.cardTitle}>Experience</h2>
                <p className={Style.cardDescription}>
                  2+ years <br/>Frontend Development
                </p>
              </div>
              <div className={Style.card}>
                <BsFillPeopleFill className={Style.cardIcon}/>
                <h2 className={Style.cardTitle}>Education</h2>
                <p className={Style.cardDescription}>
                B.Sc. Bachelors Degree <br/>M.Sc. Masters Degree
                </p>
              </div>
            </div>
            <div className={Style.aboutText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
