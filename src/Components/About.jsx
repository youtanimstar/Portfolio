import React from "react";
import Style from "../css/about.module.css";
import { MdOutlineWork } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import Button from "../css/button.module.css"
import { FaArrowDown } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
const About = () => {
    
  return (
    <>
      <section className={Style.About} id="about">
        <div className={Style.top}>
          <div className={Style.subTitle}>Know More</div>
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
              reprehenderit et laborum
            </div>
          </div>
        </div>
        <Link to="#experience" className={`${Button.Next} ${Button.shakeVertical}`}><FaArrowDown className={Button.icon}/></Link>
      </section>
    </>
  );
};

export default About;
