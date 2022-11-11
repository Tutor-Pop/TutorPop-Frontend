import React from 'react'
import { Link } from 'react-router-dom'

const AdminUserManageBtn = () => {
  return (
    <span style={{"display": "block"}}>
    <Link to='/admin/user-manage'>
        <div className='textbox-schoolman text-left'>
            <h3>User Management</h3>
        </div>
        <div className='imgschooledit'>
            <img src={require("../img/user-management-admin.png")}/>
        </div>
    </Link>
    </span>
  )
}

export default AdminUserManageBtn