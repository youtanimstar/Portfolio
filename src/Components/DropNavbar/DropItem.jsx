import React from "react";
import Style from "../../css/dropnavbar.module.css";
import { HashLink as Link } from "react-router-hash-link";
const DropItem = ({ text, link, setOpen }) => {
  return (
    <li onClick={()=>setOpen(false)}>
      <Link to={`#${link}`} className={Style.dropItem}>
        {text}
      </Link>
    </li>
  );
};

export default DropItem;
