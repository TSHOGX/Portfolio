import React from 'react'
import "./headbar.css"
import LOGO from '../../assets/logo.svg'
import { useState } from 'react'  // hook to activate 

const Headbar = () => {
  const [activeNav, setActiveNav] = useState('#header')
  return (
    <section className='section headbar__section' id='headbar'>
        <div className="container headbar__container">
            <div className="logo">
                <img src={LOGO} alt="logo img" />
                <span>SHIWEN HAN</span>
            </div>
            <div className="headbar__links">
                {/* <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === "#header" ? 'active':''}>home</a> */}
                <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active':''}>about</a>
                <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? 'active':''}>portfolio</a>
                <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active':''}>contact</a>
            </div>
        </div>
    </section>
  )
}

export default Headbar