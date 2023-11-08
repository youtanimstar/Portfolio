import React from "react";
import Style from "../css/navbar.module.css";
const Navbar = ({handleRef}) => {
  return (
    <nav className={Style.nav}>
      <div className={Style.logo}>Deep Das</div>
      {/* <div> */}
      <ul className={Style.navLinks}>
        <li onClick={handleRef}>
          <a href="#about" className={Style.navItems}>
            About
          </a>
        </li>
        <li onClick={handleRef}>
          <a href="#experience" className={Style.navItems}>
            Experience
          </a>
        </li>
        <li onClick={handleRef} >
          <a href="#projects" className={Style.navItems}>
            Projects
          </a>
        </li>
        <li onClick={handleRef} >
          <a href="#contact" className={Style.navItems}>
            Contact
          </a>
        </li>
      </ul>
      
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
