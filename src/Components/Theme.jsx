import React from 'react'
import Style from "../css/theme.module.css"
import {BsMoonStarsFill} from "react-icons/bs"
import {HiOutlineSun} from "react-icons/hi"

const Theme = ({setTheme, theme}) => {
  return (
    <button className={Style.button} onClick={()=>setTheme(!theme)}>
        {
            theme? <BsMoonStarsFill/>:<HiOutlineSun/>
        }
    </button>
  )
}

export default Theme