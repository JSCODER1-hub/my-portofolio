import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF ,faLinkedin , faGithub , faYahoo} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer id='about'>
      <div>
      <p>Copyright &copy; 2021 Mohamed All Rights Reserved</p>
      </div>
      <div className='flex'>

        <div className='links'>
        <a href='https://www.facebook.com/mohamedte7a22/' ><FontAwesomeIcon  className='face' icon={faFacebookF} /></a>
        <a href="https://www.linkedin.com/in/mohamed-medhat-236575230/"><FontAwesomeIcon className='linked' icon={faLinkedin} /></a>
        <a href="https://github.com/CoDeBrEaKe"><FontAwesomeIcon className='git' icon={faGithub} /></a>
      </div>
      <div className='phone'>

        <FontAwesomeIcon className='phone' icon={faPhone} /> <p>+201112269700</p>
      </div>
      <div className='mail'>

        <FontAwesomeIcon className='yahoo' icon={faYahoo} /> <p>mohamedmedhat86452@yahoo.com</p>
      </div>

      </div>
    </footer>
  )
}

export default Footer