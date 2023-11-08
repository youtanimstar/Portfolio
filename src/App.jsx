import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Components/Navbar";
import Style from "./css/style.module.css"
import Home from "./Components/Home";
import Theme from "./Components/Theme";
import "./css/global.css"
import About from "./Components/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact"
import Footer from "./Components/Footer";
import Socials from "./Components/Socials";

const App = () => {
  // let prevTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  const navRef = useRef();
  const handleRef = ()=>{
    navRef.current.scrollIntoView();
  }
  return (
    <>
      <div className={Style.container} datatheme={`${theme?"dark":"light"}`}>
        <Navbar handleRef={handleRef}/>
        <Home navRef={navRef}/>
        <About navRef={navRef}/>
        <Experience navRef={navRef}/>
        <Projects/>
        <Contact/>
        <Footer/>
        <Theme setTheme={setTheme} theme={theme}/>
        <Socials/>
      </div>
    </>
  );
};
// ${theme?"dark":"light"}
export default App;
