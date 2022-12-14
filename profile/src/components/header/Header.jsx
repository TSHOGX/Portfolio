import React from 'react'
import "./header.css"
import CTA from './CTA'
// import ME from '../../assets/me.png'
// import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <section id='header' className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Shiwen Han</h1>
        {/* <h5>Fullstack Developer</h5> */}
        <CTA></CTA>
        {/* <HeaderSocials></HeaderSocials> */}

        {/* <div className='me'>
          <img src={ME} alt='me' />
        </div> */}

        {/* <a href='#footer' className='scroll__down'>Scroll Down</a> */}

      </section>
    </header>
  )
}

export default Header