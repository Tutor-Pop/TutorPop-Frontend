import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import logoWhite from '../img/logo-white.png'
import { getActiveStats } from '../services/stats.service'

const Homepage = () => {
  
  const [stats, setStats] = useState({})

  useState(() => {
    getActiveStats().then((response) => {
      setStats(response.data)
    })
  }, [])

  return (
    <div className='homepage'>
      <div className='main-container'>
        <div className='text-area'>
          <h1>Welcome to TUTOR•POP</h1>
          <div className='sub-text'>
            <h2>consectetur adipiscing elit.</h2> 
            <h2>Suspendisse vel eros vehicula,</h2>
            <Link className='link-text' to='/search'>Enter Website</Link>
          </div>
        </div>
        <img className='app-logo' src={logoWhite} alt='tutor-pop-logo'/>
      </div>
      <div className='app-stat'>
        <div className='stat-item'>
          <p>{stats.accounts ? stats.accounts : 0}</p>
          <p>Users</p>
        </div>
        <div className='stat-item'>
          <p>{stats.courses ? stats.courses : 0}</p>
          <p>Courses</p>
        </div>
        <div className='stat-item'>
          <p>{stats.schools ? stats.schools : 0}</p>
          <p>Schools</p>
        </div>
      </div>
    </div>
  )
}

export default Homepage