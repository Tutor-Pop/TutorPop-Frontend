import React, { useState } from 'react'

import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import AppLogo from '../img/logo-color.png'
import Heart from '../img/heart.png'
import Bell from '../img/bell.png'
import Support from '../img/support.png'
import UserProfile from '../img/user.png'

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
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='nav'>
      <Navbar>
        <NavbarBrand href="/search">
          <img class='nav-app-icon' src={AppLogo} all='tutor-pop'/>
        </NavbarBrand>
        <NavbarText><h5>TUTOR POP</h5></NavbarText>
        <Nav className="ms-auto nav-items" navbar>
          <NavItem>
            <NavLink href="/support">
              <img className='nav-icon' src={Support} alt='support'/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/notification">
              <img className='nav-icon' src={Bell} alt='notification'/>                
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/favorite">
              <img className='nav-icon' src={Heart} alt='favorite'/>                
            </NavLink>
          </NavItem>
          {isLogin && 
            <>
              <NavItem className='nav-profile'>
                <NavLink href="/user">
                  <img className='nav-icon' src={UserProfile} alt='user'/>                
                </NavLink>
              </NavItem>
              <NavbarText><h5>Jaroonpong Suklerd</h5></NavbarText>
            </>
          }
          {!isLogin &&
            <NavItem className='nav-profile'>
              <NavLink href="/login"> <h5>Login</h5></NavLink>
            </NavItem>
          }
          
        </Nav>
      </Navbar>
    </div>
  );
}

export default AppNav