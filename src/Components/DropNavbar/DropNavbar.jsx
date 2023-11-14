import React, { useEffect, useRef, useState } from 'react'
import Style from "../../css/dropnavbar.module.css"
import DropItem from './DropItem'

const DropNavbar = () => {
  const [open, setOpen] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target))
      {
        setOpen(false);
        
      }
    }
    document.addEventListener("mousedown", handler);

    return ()=>{
      document.removeEventListener("mousedown", handler);
    }
  });

  return (
    <>
        <div className={Style.dropNavbar} ref={menuRef}>
            <div className={Style.dropdownTrigger} onClick={()=>setOpen(!open)}>
                <div className={Style.line}></div>
                <div className={Style.line}></div>
            </div>
            <ul className={`${Style.dropdownMenu} ${open? Style.active:Style.inactive}`}>
                <DropItem text={"Home"} link={"home"} setOpen={setOpen}/>
                <DropItem text={"About"} link={"about"} setOpen={setOpen}/>
                <DropItem text={"Experience"} link={"experience"} setOpen={setOpen}/>
                <DropItem text={"Projects"} link={"projects"} setOpen={setOpen}/>
                <DropItem text={"Contact"} link={"contact"} setOpen={setOpen}/>
            </ul>
        </div>
    </>
  )
}

export default DropNavbar