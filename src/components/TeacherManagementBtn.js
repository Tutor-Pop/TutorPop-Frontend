import React from 'react'
import { Link } from 'react-router-dom'

const TeacherManagementBtn = ({school}) => {
  return (
    <span style={{"display": "block"}}>
    <Link to={`/${school.school_id}/teacher-manage`}>
        <div className='textbox-schoolman text-left'>
            <h3>Teacher Management</h3>
        </div>
        <div className='imgschooledit'>
            <img src={require("../img/teacher.png")}/>
        </div>
    </Link>
  </span>
  )
}

export default TeacherManagementBtn