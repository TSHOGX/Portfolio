import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {FaDribbbleSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><AiOutlineGithub/></a>
        <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer"><FaDribbbleSquare/></a>
    </div>
  )
}

export default HeaderSocials