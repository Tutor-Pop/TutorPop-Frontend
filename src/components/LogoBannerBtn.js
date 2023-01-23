import React from 'react'
import { Link } from 'react-router-dom'

const LogoBannerBtn = ({school}) => {
  return (
    <span style={{"display": "block"}}>
    <Link to={`./logo-edit`}>
        <div className='textbox-schoolman text-left'>
            <h3>School Picture</h3>
        </div>
        <div className='imgschooledit'>
            <img src={require("../img/banner.png")}/>
        </div>  
    </Link>
  </span>
  )
}

export default LogoBannerBtn