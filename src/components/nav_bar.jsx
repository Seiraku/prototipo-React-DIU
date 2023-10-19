import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoUsm from '../assets/usm.png'
import Notificacion from '../assets/bubble.png'

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <div className='nav.bar-left'>
        <NavLink
          className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
          to='/'
        >
          <img src={LogoUsm} height={35} alt='inicio'></img>
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
          to='/'
        >
          <img src={Notificacion} height={35} alt='inicio'></img>
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar
