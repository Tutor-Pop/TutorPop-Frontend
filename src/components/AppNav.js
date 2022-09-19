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
  Dropdown,
  NavbarText,
} from 'reactstrap';

const AppNav = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [dropdownDelay, setDropdownDelay] = useState(false)
  const [isLogin, setIsLogin] = useState(true);

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
            <Dropdown isOpen={isOpenDropdown} toggle={toggle}>
              <DropdownToggle nav caret>
                <img className='nav-icon' src={UserProfile} alt='user'/>                
                <NavbarText><h5 className='nav-name'>Jaroonpong Suklerd</h5></NavbarText>
              </DropdownToggle>
              {/* <DropdownToggle caret>Dropdown</DropdownToggle> */}
              <DropdownMenu>
                <DropdownItem>View Profile</DropdownItem>
                <DropdownItem>Schedule</DropdownItem>
                <DropdownItem>My Course</DropdownItem>
                <DropdownItem>My School</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Setting</DropdownItem>
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            {/* <UncontrolledDropdown nav inNavbar>
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
            </UncontrolledDropdown> */}
            </>
          }
          {!isLogin &&
            <NavItem className='nav-login'>
              <NavLink href="/login"> <h5>Login</h5></NavLink>
            </NavItem>
          }
          
        </Nav>
      </Navbar>
    </div>
  );
}

export default AppNav