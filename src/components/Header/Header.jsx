import React, { useState } from 'react'

import "./Header.css"
import Navbar from '../Navbar/Navbar'

import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"

const Header = ({ links }) => {
  const [isHamburgerOpened,setIsHamburgerOpened] =useState(false);

  const handleHamburgerOpened = () => {
    setIsHamburgerOpened(!isHamburgerOpened)
  }
  return (
    <div className='header-container'>
      <div className='header-logo'>
        LOGO
      </div>
      <div className='navbar-component'>
        <Navbar links={links}/>
      </div>
      <div className='navbar-hamburger-button'>
        {isHamburgerOpened === true ? (
          <AiOutlineClose size={25} onClick={handleHamburgerOpened}/>
        ) : (
          <GiHamburgerMenu size={25} onClick={handleHamburgerOpened}/>
        )}
      </div>
    </div>
  )
}

export default Header