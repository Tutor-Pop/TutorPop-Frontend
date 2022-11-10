import React from 'react'
import { Card, CardImg, Col, Row } from 'reactstrap'
import FavButton from './FavButton'

const CourseCard = (
        {
          cardType='course',
          courseDetail={
            course_id: '0', 
            course_name: 'Course Name',
            type: 'General',
            course_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet semper mollis. Cras commodo ullamcorper sapien, eget molestie ligula accumsan quis. Pellentesque id ex non nibh facilisis condimentum eget aliquet elit.',
            course_price: '2500฿',
            school_name: 'School Name',
            school_address: 'School Location, Bangkok',
            teachers: [],
            course_progress: '0.35',
            thumbnail_url: '../img/logo-white-no-name.png',
          },
          schoolDetail={
            school_id: '0',
            name: 'School Name',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet semper mollis. Cras commodo ullamcorper sapien, eget molestie ligula accumsan quis. Pellentesque id ex non nibh facilisis condimentum eget aliquet elit.',
            address: 'School Location , Bangkok'
          }, 
          toggleProgress=false,
          toggleFavorite=false
        } 
      ) => {
  return (
    <div className='course-card'>
      <img className='course-card-img' src={require('../img/logo-white-no-name.png')}/>
      { ( cardType === 'course' ) &&
      <>
      <div className='course-text-left'>
        <div className='course-card-title'>
          <h4>{courseDetail.course_name}</h4>
        </div>
        {
          !toggleProgress &&
          <p className='card-description'>{courseDetail.course_description}</p>
        }
        { toggleProgress &&
        <div className='course-progress-bar'>
          <div className='course-progress-fill' 
               style={{
                  width: (Number(courseDetail.course_progress)*100) + '%'
               }}></div>
          <div className='course-progress-blank'
               style={{
                  width: ((1 - Number(courseDetail.course_progress))*100) + '%'
               }}
          ></div>
        </div>
        }
        <p>{courseDetail.school_name} <em>{courseDetail.school_address}</em></p> 
      </div>
      <div className='course-text-right'>
        { toggleFavorite &&  
        <FavButton/>
      }
        <h4>{courseDetail.course_price}</h4>
      </div>
      </>
    }
    { (cardType === 'school') &&
      <>
      <div className='course-text-left'>
        <div className='course-card-title'>
          <h4>{schoolDetail.name}</h4>
        </div>
        {
          !toggleProgress &&
          <p className='card-description'>{schoolDetail.description}</p>
        }
        <p><em>{schoolDetail.address}</em></p> 
      </div>
      <div className='course-text-right'>
        { toggleFavorite &&  
        <FavButton/>
      }
        <h4>{schoolDetail.course_price}</h4>
      </div>
      </>
    }
    </div>
  )
}

export default CourseCard
