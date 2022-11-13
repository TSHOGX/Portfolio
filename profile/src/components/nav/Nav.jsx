import React from 'react'
import "./nav.css"
import {BiHomeAlt} from 'react-icons/bi'
import {BiUserCircle} from 'react-icons/bi'
import {BiBookBookmark} from 'react-icons/bi'
import {MdOutlineContactSupport} from 'react-icons/md'
import { useState } from 'react'  // hook to activate 

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header')
  return (
    <nav>
      {/* <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === "#header" ? 'active':''}><BiHomeAlt/></a> */}
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active':''}><BiUserCircle/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === "#experience" ? 'active':''}><BiBookBookmark/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active':''}><MdOutlineContactSupport/></a>
    </nav>
  )
}

export default Nav