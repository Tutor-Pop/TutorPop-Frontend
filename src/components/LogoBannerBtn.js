import React from 'react'
import { Link } from 'react-router-dom'

const LogoBannerBtn = () => {
  return (
    <span style={{"display": "block"}}>
    <Link to='/:schoolid/logo-editing'>
        <div className='textbox-schoolman text-left'>
            <h3>School Editing</h3>
        </div>
        <div className='imgschooledit'>
            <img src={require("../img/banner.png")}/>
        </div>  
    </Link>
  </span>
  )
}

export default LogoBannerBtn