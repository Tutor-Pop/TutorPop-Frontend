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
  const [isLogin, setIsLogin] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='nav'>
        <NavbarBrand href="/search">
          <img class='nav-app-icon' src={AppLogo} all='tutor-pop'/>
        </NavbarBrand>
        <NavbarText><h5 className='nav-title'>TUTOR POP</h5></NavbarText>
        <Nav className="d-none d-md-flex ms-auto nav-items" navbar>
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
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <img className='nav-icon' src={UserProfile} alt='user'/>                
                <NavbarText><h5 className='nav-name'>Jaroonpong Suklerd</h5></NavbarText>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
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