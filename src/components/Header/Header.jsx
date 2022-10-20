import React from 'react'

import "./Header.css"
import Navbar from '../Navbar/Navbar'

const Header = ({links}) => {
  return (
    <div className='header-container'>
      <div className='header-logo'>
        LOGO
      </div>
      <Navbar links={links}/>
    </div>
  )
}

export default Header