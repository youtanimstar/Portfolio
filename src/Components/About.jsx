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
                I am currently pursuing a B.Tech degree at MSIT.
                </p>
              </div>
            </div>
            <div className={Style.aboutText}>
            Hello! I'm Deep Das, a dedicated B.Tech student currently enrolled at MSIT. Beyond the academic rigors, I find my true passion in the dynamic world of frontend development. As a frontend developer, I thrive on the marriage of design and functionality, transforming lines of code into visually appealing and user-friendly interfaces.
            </div>
          </div>
        </div>
        {/* <Link to="#experience" className={`${Button.Next} ${Button.shakeVertical}`}><FaArrowDown className={Button.icon}/></Link> */}
      </section>
    </>
  );
};

export default About;
