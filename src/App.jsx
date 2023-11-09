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
// import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {BrowserRouter} from "react-router-dom";


const App = () => {
  const [theme, setTheme] = useState(true);

  return (
    <>
    <BrowserRouter>
      <div
        className={Style.container}
        datatheme={`${theme ? "dark" : "light"}`}
      >
        {/* <Router> */}
          <Navbar />
          <Home/>
          <About/>
          <Experience/>
          <Projects/>
          <Contact/>
          <Footer />
          <Theme setTheme={setTheme} theme={theme} />
          <Socials />
        {/* </Router> */}
      </div>
      </BrowserRouter>
    </>
  );
};
// ${theme?"dark":"light"}
export default App;
