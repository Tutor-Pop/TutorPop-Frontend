import React from 'react'
import { Link } from 'react-router-dom'

const AdminSchoolRequestBtn = () => {
  return (
    <span style={{"display": "block"}}>
    <Link to='/'>
        <div className='textbox-schoolman text-left'>
            <h3>School Open Request</h3>
        </div>
        <div className='imgschooledit'>
            <img src={require("../img/school-open-request-admin.png")}/>
        </div>
    </Link>
    </span>
  )
}

export default AdminSchoolRequestBtn