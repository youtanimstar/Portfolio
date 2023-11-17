import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Components/Navbar";
import Style from "./css/style.module.css";
import Home from "./Components/Home";
import Theme from "./Components/Theme";
import "./css/global.css";
import About from "./Components/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Socials from "./Components/Socials";
import {BrowserRouter} from "react-router-dom";
import ScrollPercentageIndicator from "./Components/ScrollPercentageIndicator";
import DropNavbar from "./Components/DropNavbar/DropNavbar";
import DropSocials from "./Components/Socials/DropSocials";


const App = () => {
  const [theme, setTheme] = useState(true);

  return (
    <>
    <BrowserRouter>
      <div
        className={`${Style.container} main`}
        datatheme={`${theme ? "dark" : "light"}`}
      >
          {/* <Navbar/> */}
          
          <Home className="section"/>
          <About className="section" />
          <Experience className="section"/>
          <Projects className="section"/>
          <Contact className="section"/>
          <Footer />
          <Theme setTheme={setTheme} theme={theme} />
          {/* <Socials /> */}
          <ScrollPercentageIndicator/>
          <DropNavbar/>
          <DropSocials/>
      </div>
      </BrowserRouter>
    </>
  );
};
export default App;
