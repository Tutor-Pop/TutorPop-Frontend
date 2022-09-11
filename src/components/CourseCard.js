import React from 'react'
import { Card, CardImg, Col, Row } from 'reactstrap'

const CourseCard = ({courseName='Course Name', schoolName='School Name'}) => {
  return (
    <div className='course-card'>
      <img className='course-img' src={require('../img/logo-color.png')}/>
      <div className='course-text'>
        <h4>{courseName}</h4>
        <p>{schoolName} ( School Location , Bangkok )</p>
      </div>
    </div>
  )
}

export default CourseCard