import React, { useState } from 'react'

import '../App.css'

import AppLogo from '../img/Logo.png'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

const AppNav = () => {
  return (
    <div className='app-nav'>
      <Navbar>
        <NavbarBrand href='/search'>
          <img className='nav-logo' src={AppLogo}/>
        </NavbarBrand>
      </Navbar>
    </div>
  )
}

export default AppNav