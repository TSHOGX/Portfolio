/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
// import {GiAchievement} from 'react-icons/gi'
import CV from '../../assets/cv.pdf'

const About = () => {
  return (
    <header>
      <section id='about'>
      {/* <h5>Get To Know</h5>
      <h2>About Me</h2> */}

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className="about__content">
          <h5>Hello I'm</h5>
          <h1>Shiwen Han</h1>
          {/* <div className="about__cards">
            <article className='about__card'>
              <GiAchievement className='about__icon'/>
              <h5>Experience</h5>
              <small>Lorem ipsum dolor</small>
            </article>

            <article className='about__card'>
              <GiAchievement className='about__icon'/>
              <h5>Experience</h5>
              <small>Lorem ipsum dolor</small>
            </article>

            <article className='about__card'>
              <GiAchievement className='about__icon'/>
              <h5>Experience</h5>
              <small>Lorem ipsum dolor</small>
            </article>
          </div> */}
          
          <p>
            I am a <span>Master student</span> of Computer Science and Engineering at <a href="https://cse.osu.edu/" target="_blank" rel="noreferrer">The Ohio State University</a>. My passion lies from <span>full stack</span> develope to frontier technologies in <span>CV</span> and <span>NLP</span>. My interest is to let real life utilize them. 
          </p>

          <a href="https://linkedin.com/">[ Linkedin ]</a> <a href="https://github.com/">[ Github ]</a> <a href={CV}>[ Resume ]</a>   

          {/* <a href='#contact' className='btn btn-primary'>Contact</a> */}

        </div>
      </div>
    </section>
    </header>
  )
}

export default About