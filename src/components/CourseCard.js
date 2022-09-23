import React from 'react'
import { Card, CardImg, Col, Row } from 'reactstrap'
import FavButton from './FavButton'

const CourseCard = (
        {
          courseName='Course Name', 
          schoolName='School Name',
          toggleProgressBar=false,
          toggleFavorite=false
        }
      ) => {
  return (
    <div className='course-card'>
      <img className='course-img' src={require('../img/logo-white.png')}/>
      <div className='course-text'>
        <div className='course-card-title'>
          <h4>{courseName}</h4>
          { toggleFavorite &&  
          <FavButton/>
          }
        </div>
        { toggleProgressBar &&
        <div className='course-progress-bar'>
          <div className='course-progress-fill'></div>
          <div className='course-progress-blank'></div>
        </div>
        }
        <p>{schoolName} ( School Location , Bangkok )</p> 
      </div>
    </div>
  )
}

export default CourseCard