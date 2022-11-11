import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'

const CoursePicturebtn = () => {
  return (
    <span style={{"display": "inline-block"}} >
      <Link to=''>
        <div className='textbox-schoolman text-left'>
          <h3>Course Picture</h3>
        </div>
        <div className='block-info'>
          <FontAwesomeIcon icon={faImages} color="black" size="5x"/>
        </div>
        
      </Link>
    </span>
  )
}

export default CoursePicturebtn