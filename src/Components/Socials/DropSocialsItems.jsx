import React from "react";
import Style from "../../css/socialsSection.module.css"
import { HashLink as Link } from "react-router-hash-link";
const DropItem = ({ text, link, setOpen, children }) => {
  return (
    <li onClick={()=>setOpen(false)}>
      <a href={`${link}`} className={Style.dropItem} target="_blank">
        {children}
        {text}
        
      </a>
    </li>
  );
};

export default DropItem;
