import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function StudentManageBtn() {
    return (
        <span  style={{"display": "inline-block"}} >
          <Link to='/course-manage/:schoolid/:courseid/student-manage'>
            <div className='textbox-schoolman text-left'>
              <h3>Student Management</h3>
            </div>
            <div className='block-info'>
              <FontAwesomeIcon icon={faGraduationCap} color="black" size="5x"/>
            </div>
          </Link>
        </span>
      )
}

export default StudentManageBtn