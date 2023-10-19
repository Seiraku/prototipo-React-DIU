import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoUsm from '../assets/usm.png'

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
        <NavLink
          className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
          to='/'
        >
          <img src={LogoUsm} height={40} alt='inicio'></img>
        </NavLink>
        <NavLink
          className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
          to='/internal'
        >
          Página Interna
        </NavLink>
    </nav>
  )
}

export default NavBar
