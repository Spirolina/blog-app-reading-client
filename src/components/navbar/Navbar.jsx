import React from 'react'
import '../navbar/navbar.css'
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
      <div
      className='navbar'
      >
          <div className="buttons">
          <NavLink
              to='/'
              className={({isActive}) => isActive ? "active-navbar" : null}
          > Home </NavLink>
          <NavLink
              to='posts'
              className={({isActive}) => isActive ? "active-navbar" : null}
          > Posts </NavLink>
          <NavLink
              to='authors'
              className={({isActive}) => isActive ? "active-navbar" : null}
          > Authors </NavLink>
          </div>
        

      </div>
  )
}
