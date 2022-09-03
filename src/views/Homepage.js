import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import logoWhite from '../img/logo-white.png'

const Homepage = () => {
  return (
    <div className='homepage'>
      <img className='app-logo' src={logoWhite} alt='tutor-pop-logo'/>
      <div className='main-container'>
        <h1>Lorem ipsum dolor sit amet,</h1>
        <div className='sub-text'>
          <h2>consectetur adipiscing elit.</h2> 
          <h2>Suspendisse vel eros vehicula,</h2>
        </div>
        <Link className='link-text' to='/course'>Enter Website</Link>
      </div>
    </div>
  )
}

export default Homepage