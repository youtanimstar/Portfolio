import React, { useEffect, useRef, useState } from "react";
import Style from "../../css/socialsSection.module.css";
import DropSocialsItem from "./DropSocialsItems";
import { FaShareAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const DropSocials = () => {
  const [open, setOpen] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <div className={Style.dropNavbar} ref={menuRef}>
        <div className={Style.dropdownTrigger} onClick={() => setOpen(!open)}>
          <FaShareAlt className={Style.icon} />
        </div>
        <ul
          className={`${Style.dropdownMenu} ${
            open ? Style.active : Style.inactive
          }`}
        >
          <DropSocialsItem
            text={"Github"}
            link={"https://github.com/youtanimstar"}
            setOpen={setOpen}
          >
            <FaGithub />
          </DropSocialsItem>
          <DropSocialsItem
            text={"Linkedin"}
            link={"https://www.linkedin.com/in/deep-das-09b983248/"}
            setOpen={setOpen}
          >
            <FaLinkedin />
          </DropSocialsItem>
          <DropSocialsItem
            text={"Facebook"}
            link={"https://www.facebook.com/youtanimstar"}
            setOpen={setOpen}
          >
            <FaFacebook />
          </DropSocialsItem>
          <DropSocialsItem
            text={"Instagram"}
            link={"https://www.instagram.com/deep_arts_10/"}
            setOpen={setOpen}
          >
            <FaInstagram />
          </DropSocialsItem>
        </ul>
      </div>
    </>
  );
};

export default DropSocials;
