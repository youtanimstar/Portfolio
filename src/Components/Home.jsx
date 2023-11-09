import React from "react";
import Typewriter from "typewriter-effect";
import Style from "../css/home.module.css";
import Button from "../css/button.module.css";
import {RiContactsLine} from "react-icons/ri"
import {IoMdDownload} from "react-icons/io"
import {HashLink as Link} from "react-router-hash-link"
const Home = () => {
  return (
    <>
      <section className={Style.homeSection}>
        <div className={Style.left}>
          <img src="deep_das_dark.png" alt="Deep Das pic" />
        </div>
        <div className={Style.right}>
          <h2 className={Style.subTitle}>Hello, I'm</h2>
          <h1 className={Style.title}>Deep Das</h1>
          <Typewriter
            options={{
              strings: ["Frontend Developer", "UI/UX Designer"],
              autoStart: true,
              loop: true,
            }}
            className={Style.typewriter}
          />
          <div className={Style.buttonSection}>
            <button className={`${Button.button} ${Button.special}`}>Download CV<IoMdDownload className={Button.icon}/></button>
            <Link className={`${Button.button}`} to="#contact">Contact Me<RiContactsLine className={Button.icon}/></Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
