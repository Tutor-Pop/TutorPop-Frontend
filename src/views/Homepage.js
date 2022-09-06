import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import logoWhite from '../img/logo-white.png'

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className='main-container'>
        <div className='text-area'>
          <h1>Welcome to TUTOR•POP</h1>
          <div className='sub-text'>
            <h2>consectetur adipiscing elit.</h2> 
            <h2>Suspendisse vel eros vehicula,</h2>
            <Link className='link-text' to='/course'>Enter Website</Link>
          </div>
        </div>
        <img className='app-logo' src={logoWhite} alt='tutor-pop-logo'/>
      </div>
      <div className='app-stat'>
        <div className='stat-item'>
          <p>0000</p>
          <p>Users</p>
        </div>
        <div className='stat-item'>
          <p>0000</p>
          <p>Courses</p>
        </div>
        <div className='stat-item'>
          <p>0000</p>
          <p>Teachers</p>
        </div>
        <div className='stat-item'>
          <p>0000</p>
          <p>Schools</p>
        </div>
      </div>
    </div>
  )
}

export default Homepage