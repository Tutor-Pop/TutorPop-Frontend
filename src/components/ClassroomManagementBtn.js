import React from 'react'
import { Link } from 'react-router-dom'

const ClassroomManagementBtn = ({school}) => {
  return (
    <span style={{"display": "block"}}>
    <Link to={`./classroom-manage`}>
        <div className='textbox-schoolman text-left'>
            <h3>Classroom Management</h3>
        </div>
        <div className='imgschooledit'>
            <img src={require("../img/classroom.png")}/>
        </div>
    </Link>
  </span>
  )
}

export default ClassroomManagementBtn