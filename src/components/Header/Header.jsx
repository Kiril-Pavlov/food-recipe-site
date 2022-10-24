import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "./Header.css"
import Navbar from '../Navbar/Navbar'

import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"

const Header = ({ links }) => {
  const [isHamburgerOpened, setIsHamburgerOpened] = useState(false);

  const handleHamburgerOpened = () => {
    setIsHamburgerOpened(!isHamburgerOpened)
  }
  return (
    <div className='header-container'>
      <div className='header-logo'>
        LOGO
      </div>
      <div className='navbar-component'>
        <Navbar links={links} />
      </div>
      <div className='navbar-hamburger-button'>
        {isHamburgerOpened === true ? (
          <AiOutlineClose size={25} onClick={handleHamburgerOpened} />
        ) : (
          <GiHamburgerMenu size={25} onClick={handleHamburgerOpened} />
        )}
      </div>
      <div className={isHamburgerOpened === false ? "header-link-list" : "header-link-list active"}>
        <div className="hamburger-close-btn">
          <AiOutlineClose size={25} fill="white" onClick={handleHamburgerOpened} />
        </div>
        {links.map((item) => {
          return (
            <Link to={item.linkTo} className="hamburger-link">
              {item.linkName}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Header