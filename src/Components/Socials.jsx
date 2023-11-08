import React from "react";
import Style from "../css/socials.module.css";
import {AiOutlineGithub} from "react-icons/ai";
import {BsLinkedin} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";

const Socials = () => {
  return (
    <>
      <div className={Style.Socials}>
        <a className={Style.socialLink} href="https://github.com/youtanimstar" target="_blank">
            <AiOutlineGithub className={Style.icon}/>
        </a>
        <a className={Style.socialLink} href="https://www.linkedin.com/in/deep-das-09b983248/" target="_blank">
            <BsLinkedin className={Style.icon}/>
        </a>
        <a className={Style.socialLink} href="https://www.facebook.com/youtanimstar" target="_blank">
            <BsFacebook className={Style.icon}/>
        </a>
        <a className={Style.socialLink} href="https://www.instagram.com/deep_arts_10/" target="_blank">
            <BsInstagram className={Style.icon}/>
        </a>

      </div>
    </>
  );
};

export default Socials;
