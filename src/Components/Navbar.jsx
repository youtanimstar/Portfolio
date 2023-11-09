import React from "react";
import Style from "../css/navbar.module.css";
// import { Link } from 'react-router-dom';
import {HashLink as Link} from "react-router-hash-link"
const Navbar = () => {
  return (
    <nav className={Style.nav}>
      <div className={Style.logo}>Deep Das</div>
      <ul className={Style.navLinks}>
        <li>
          
          <Link to="#about" className={Style.navItems}>
            About
          </Link>
        </li>
        <li >
          <Link to="#experience" className={Style.navItems}>
            Experience
          </Link>
          
        </li>
        <li  >
          <Link to="#projects" className={Style.navItems}>
            Projects
          </Link>
          
        </li>
        <li  >
          <Link to="#contact" className={Style.navItems}>
            Contact
          </Link>
          
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
