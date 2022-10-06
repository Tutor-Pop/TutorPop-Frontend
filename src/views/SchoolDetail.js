import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Col, Container, Row, Tooltip } from 'reactstrap'
import CardList from '../components/CardList'
import SchoolBanner from '../img/logo-white.png'

import Favorite from '../img/heart.png'
import Homepage from './Homepage'
import FavButton from '../components/FavButton'

const SchoolDetail = () => {

  const { schoolid } = useParams()

  const schoolCourses = [{
    'course_id' : '8',
    'course_name' : 'Calculus I',
    'course_description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet semper mollis. Cras commodo ullamcorper sapien, eget molestie ligula accumsan quis.',
    'course_price' : '2500฿',
    'school_name' : 'School 1',
    'school_address' : '123 Street, Bangkok'
  },
  {
    'course_id' : '9',
    'course_name' : 'Calculus II',
    'course_description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet semper mollis. Cras commodo ullamcorper sapien, eget molestie ligula accumsan quis.',
    'course_price' : '2500฿',
    'school_name' : 'School 1',
    'school_address' : '123 Street, Bangkok'
  },
  {
    'course_id' : '10',
    'course_name' : 'Calculus III',
    'course_description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet semper mollis. Cras commodo ullamcorper sapien, eget molestie ligula accumsan quis.',
    'course_price' : '2500฿',
    'school_name' : 'School 1',
    'school_address' : '123 Street, Bangkok'
  },
  {
    'course_id' : '11',
    'course_name' : 'Linear Algebra',
    'course_description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet semper mollis. Cras commodo ullamcorper sapien, eget molestie ligula accumsan quis.',
    'course_price' : '2500฿',
    'school_name' : 'School 1',
    'school_address' : '123 Street, Bangkok'
  },
  {
    'course_id' : '12',
    'course_name' : 'AP Calculus',
    'course_description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet semper mollis. Cras commodo ullamcorper sapien, eget molestie ligula accumsan quis.',
    'course_price' : '2500฿',
    'school_name' : 'School 1',
    'school_address' : '123 Street, Bangkok'
  },
  {
    'course_id' : '13',
    'course_name' : 'Physics I',
    'course_description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet semper mollis. Cras commodo ullamcorper sapien, eget molestie ligula accumsan quis.',
    'course_price' : '2500฿',
    'school_name' : 'School 1',
    'school_address' : '123 Street, Bangkok'
  },
  {
    'course_id' : '14',
    'course_name' : 'Physics II',
    'course_description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet semper mollis. Cras commodo ullamcorper sapien, eget molestie ligula accumsan quis.',
    'course_price' : '2500฿',
    'school_name' : 'School 1',
    'school_address' : '123 Street, Bangkok'
  },
  {
    'course_id' : '15',
    'course_name' : 'Basic Probability',
    'course_description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet semper mollis. Cras commodo ullamcorper sapien, eget molestie ligula accumsan quis.',
    'course_price' : '2500฿',
    'school_name' : 'School 1',
    'school_address' : '123 Street, Bangkok'
  },
  {
    'course_id' : '16',
    'course_name' : 'Advance Statistics',
    'course_description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet semper mollis. Cras commodo ullamcorper sapien, eget molestie ligula accumsan quis.',
    'course_price' : '2500฿',
    'school_name' : 'School 1',
    'school_address' : '123 Street, Bangkok'
  }]

  const schoolTeachers = {
      'teachers': [
        {
          'user_id' : '1',
          'firstname' : 'Jean',
          'lastname' : 'Doe',
          'picture_url' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVl9oeHxsqdBZ-0lJKKSM0NEIcac0bJtN7GA&usqp=CAU',
        },
        {
          'user_id' : '2',
          'firstname' : 'Jane',
          'lastname' : 'Doe',
          'picture_url' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29woM2pCbrauRfpGBg_AnFUuHFKQIwovD-Xz8vQ58PNQl6idY72L53gngFAvhLYXy0b4&usqp=CAU',
        },
        {
          'user_id' : '3',
          'firstname' : 'Joe',
          'lastname' : 'Doe',
          'picture_url' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzy41Se0MDkOHC8ZiMqFoqbDpm9MkcW6Hlia_ClnEwhf9pJqF09gBByQllTVjKUV7YdJo&usqp=CAU',
        },
        {
          'user_id' : '4',
          'firstname' : 'Jean',
          'lastname' : 'Doe',
          'picture_url' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVl9oeHxsqdBZ-0lJKKSM0NEIcac0bJtN7GA&usqp=CAU',
        },
        {
          'user_id' : '5',
          'firstname' : 'Joey',
          'lastname' : 'Doe',
          'picture_url' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29woM2pCbrauRfpGBg_AnFUuHFKQIwovD-Xz8vQ58PNQl6idY72L53gngFAvhLYXy0b4&usqp=CAU',
        },
        {
          'user_id' : '6',
          'firstname' : 'Jack',
          'lastname' : 'Doe',
          'picture_url' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzy41Se0MDkOHC8ZiMqFoqbDpm9MkcW6Hlia_ClnEwhf9pJqF09gBByQllTVjKUV7YdJo&usqp=CAU',
        },
        {
          'user_id' : '7',
          'firstname' : 'Jean',
          'lastname' : 'Doe',
          'picture_url' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzy41Se0MDkOHC8ZiMqFoqbDpm9MkcW6Hlia_ClnEwhf9pJqF09gBByQllTVjKUV7YdJo&usqp=CAU',
        },
        {
          'user_id' : '8',
          'firstname' : 'Joey',
          'lastname' : 'Doe',
          'picture_url' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVl9oeHxsqdBZ-0lJKKSM0NEIcac0bJtN7GA&usqp=CAU',
        },
        {
          'user_id' : '9',
          'firstname' : 'Jack',
          'lastname' : 'Doe',
          'picture_url' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29woM2pCbrauRfpGBg_AnFUuHFKQIwovD-Xz8vQ58PNQl6idY72L53gngFAvhLYXy0b4&usqp=CAU',
        },
      ]
  }
  
  const teachersData = schoolTeachers.teachers;

  return (
    <div className='school-detail'>
      <div className='school-banner-box'>
        <img className='school-banner' src={SchoolBanner} alt='School-Banner'/>
      </div>
      <Container className='school-main'>
        <Row>
          <div className='school-title'>
            <h2>School Name</h2>
            <FavButton/>
          </div>
        </Row>
        <Row className='description-teacher'>
          <Col xs='8' className='school-description'>
            <h4>Description</h4>    
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent massa urna, condimentum sit amet pharetra id, imperdiet sit amet magna. In dapibus ut augue eu porta. Curabitur sapien nulla, volutpat non mollis at, vulputate ut quam. Quisque egestas velit lectus. Suspendisse tempus dolor odio, vel dapibus nisl molestie sed. Aenean auctor vulputate dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam vel tortor ac sem pulvinar tristique.
            </p>
          </Col>
          <Col xs='4'>
            <h4>Our Teachers</h4>
            <Row className='school-teacher-list'> 
            { teachersData.map((teacher) => (
                  <Link className='teacher-item-link 'to={`/teachers/${teacher.user_id}`}>
                    <img 
                      className='user-profile-icon'
                      src={teacher.picture_url}
                      alt={`${teacher.firstname}-${teacher.lastname}`}
                    />
                  </Link>
            )) }
            </Row>
            <Link to={`/school/${schoolid}/teachers`}>See all {'>'}</Link>
          </Col>
        </Row>
        <Row className='school-address'>
            <h4>School Address</h4>
            <Row className='school-address-box'>
              <Col xs='2' className='school-map'></Col>
              <Col xs='10'>
                <p>
                  Strada Petru Rares bl. CV1-CV6,14, Alba Iulia, 510056, Romania 
                </p>
                <p>
                  open in google map
                </p>
                <p>
                  Tel. xxx-xxx-xxxx
                </p>
              </Col>
            </Row>
        </Row>
      </Container>
      <hr/>
      <Container className='school-course-list'>
        <h2>Our Courses</h2>
          <CardList 
            cardType='course'
            cardData={schoolCourses}
            toggleFavorite={true}
          />
      </Container>
    </div>
  )
}

export default SchoolDetail