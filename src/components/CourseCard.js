import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, Col, Row } from 'reactstrap'
import { BACKEND_URL } from '../constants/service.constant'
import FavButton from './FavButton'

const CourseCard = (
        {
          isEditable=false,
          cardType='course',
          courseDetail={
            course_id: '0', 
            course_name: 'Course Name',
            type: 'General',
            course_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet semper mollis. Cras commodo ullamcorper sapien, eget molestie ligula accumsan quis. Pellentesque id ex non nibh facilisis condimentum eget aliquet elit.',
            course_price: '2500',
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

        useEffect(()=>{
          console.log(courseDetail)
        },[courseDetail])
  return (
    <div className='course-card'>
      {/* <img className='course-card-img' src={require('../img/logo-white-no-name.png')}/> */}
      { ( cardType === 'course' ) && (isEditable === false) &&
      <Link className='course-card-link' to={`/course/${courseDetail.course_id}`}>
      <img className='course-card-img' src={require('../img/logo-white-no-name.png')}/>
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

        <h4>{courseDetail.course_price} ฿asdwd</h4>
      </div>
      </Link>
    }
    { ( cardType === 'course' ) && ( isEditable === true ) &&
      <Link className='course-card-link' to={`/course-manage/${courseDetail.course_id}/student-manage`}>
      <img className='course-card-img' src={courseDetail.payment_method_pic == "" ? require('../img/logo-white-no-name.png') : `${BACKEND_URL}/media/${courseDetail.payment_method_pic}`}/>
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

        <h4>{courseDetail.course_price} ฿</h4>
      </div>
      </Link>
    }
    { (cardType === 'school') &&
      <Link to={`/school/${schoolDetail.school_id}`}>
      <img className='course-card-img' src={require('../img/logo-white-no-name.png')}/>
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

      </div>
      </Link>
    }
    </div>
  )
}

export default CourseCard
