import React from 'react'
import { Card, CardImg, Col, Row } from 'reactstrap'

const CourseCard = ({courseName='Course Name', schoolName='School Name'}) => {
  return (
    <div className='course-card'>
      <img className='course-img' src={require('../img/logo-white.png')}/>
      <div className='course-text'>
        <h4>{courseName}</h4>
        <div className='course-progress-bar'>
          <div className='course-progress-fill'></div>
          <div className='course-progress-blank'></div>
        </div>
        <p>{schoolName} ( School Location , Bangkok )</p>
      </div>
    </div>
  )
}

export default CourseCard