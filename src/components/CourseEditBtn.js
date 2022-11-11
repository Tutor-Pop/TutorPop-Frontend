import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const CourseEditBtn = () => {
    return (
        <span  style={{"display": "inline-block"}} >
          <Link to=''>
            <div className='textbox-schoolman text-lef'>
              <h3>Course Editing</h3>
            </div>
            <div className='block-info'>
              <FontAwesomeIcon icon={faPenToSquare} color="black" size="5x"/>
            </div>
          </Link>
        </span>
      )
}

export default CourseEditBtn