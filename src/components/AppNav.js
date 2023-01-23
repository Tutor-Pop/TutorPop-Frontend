import React, { useState } from 'react'

import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import AppLogo from '../img/logo-white-no-name.png'
import Heart from '../img/heart-white.png'
import Bell from '../img/bell-white.png'
import Support from '../img/support-white.png'
import UserProfile from '../img/user-white.png'

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
  Dropdown,
  NavbarText,
} from 'reactstrap';
import { logout } from '../services/auth.service';
import { BACKEND_URL } from '../constants/service.constant';

const AppNav = ({isLogin=false}) => {

  const profile_picture = localStorage.getItem("profile_picture")

  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [dropdownDelay, setDropdownDelay] = useState(false)

  const toggle = () => {
    if(!dropdownDelay){
      setIsOpenDropdown(!isOpenDropdown)
      setDropdownDelay(true)
      setTimeout(()=>setDropdownDelay(false),100)
    }
  }

  return (
    <div>
      <Navbar className='nav'>
        <NavbarBrand href="/search">
          <img className='nav-app-icon' src={AppLogo} all='tutor-pop'/>
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
          {isLogin ? 
            <>
            <Dropdown isOpen={isOpenDropdown} toggle={toggle}>
              <DropdownToggle nav caret>
                <img className='nav-icon rounded-full' src={profile_picture ? `${BACKEND_URL}${profile_picture}` : UserProfile} alt='user'/>                
                <NavbarText><h5 className='nav-name'>{localStorage.getItem('username')}</h5></NavbarText>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='/my-profile'>View Profile</DropdownItem>
                <DropdownItem href='/schedule'>Schedule</DropdownItem>
                <DropdownItem href='/my-course'>My Course</DropdownItem>
                <DropdownItem href='/my-school'>My School</DropdownItem>
                <DropdownItem href='/my-reservation'>My Reservation</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Setting</DropdownItem>
                <DropdownItem onClick={logout}>Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            </> : <>
            <NavItem className='nav-login'>
              <NavLink href="/login"> 
                <NavbarText><h5 className='nav-title'>Login</h5></NavbarText>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register">
                <NavbarText><h5 className='nav-title'>Register</h5></NavbarText>
              </NavLink>
            </NavItem>
            </>
          }
          
        </Nav>
      </Navbar>
    </div>
  );
}

export default AppNav