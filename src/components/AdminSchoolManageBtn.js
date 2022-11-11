import React from 'react'
import { Link } from 'react-router-dom'

const AdminSchoolManageBtn = () => {
  return (
    <span style={{"display": "block"}}>
    <Link to='/admin/school-manage'>
        <div className='textbox-schoolman text-left'>
            <h3>School Management</h3>
        </div>
        <div className='imgschooledit'>
            <img src={require("../img/school-management-admin.png")}/>
        </div>
    </Link>
    </span>
  )
}

export default AdminSchoolManageBtn