import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Col, Container, Row } from 'reactstrap';
import CardList from '../components/CardList';
import FavButton from '../components/FavButton';
import { useNavigate } from 'react-router-dom'
//ไปหน้าคอร์ส หน้าอาจารย์ แล้วก็หน้า reserve คอร์ส

const CourseDetail = () => {
  const { courseid } = useParams();
  const navigate=useNavigate()
  const course = {
    'course_id' : '1',
    'school_id' : '1',
    'course_name' : 'Business 101',
    'maximum_student': '20',
    'reserved_student': '15',
    'course_price': '12500'
  }

  const school = {
    'school_id' : '1',
    'name' : 'Stonk Business School'
  }

  const teachers = [
    { 
      'user_id' : '1',
      'firstname' : 'John',
      'lastname' : 'Doe',
      'picture_url' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29woM2pCbrauRfpGBg_AnFUuHFKQIwovD-Xz8vQ58PNQl6idY72L53gngFAvhLYXy0b4&usqp=CAU'
    },
    {
      'user_id' : '2',
      'firstname' : 'Jane',
      'lastname' : 'Doe',
      'picture_url' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29woM2pCbrauRfpGBg_AnFUuHFKQIwovD-Xz8vQ58PNQl6idY72L53gngFAvhLYXy0b4&usqp=CAU'
    }
  ]

  const relatedCourse = [{
    'course_id' : '8',
    'course_name' : 'Economy I',
    'course_description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet semper mollis. Cras commodo ullamcorper sapien, eget molestie ligula accumsan quis.',
    'course_price' : '2500฿',
    'school_name' : 'Stonk Business School',
    'school_address' : '123 Street, Bangkok'
  },
  {
    'course_id' : '9',
    'course_name' : 'Economy II',
    'course_description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet semper mollis. Cras commodo ullamcorper sapien, eget molestie ligula accumsan quis.',
    'course_price' : '2500฿',
    'school_name' : 'Stonk Business School',
    'school_address' : '123 Street, Bangkok'
  },
  {
    'course_id' : '10',
    'course_name' : 'How to STONK with NFTs',
    'course_description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet semper mollis. Cras commodo ullamcorper sapien, eget molestie ligula accumsan quis.',
    'course_price' : '2500฿',
    'school_name' : 'Stonk Business School',
    'school_address' : '123 Street, Bangkok'
  }]

  const seatRemain = Number(course.maximum_student) - Number(course.reserved_student)

  return (
    <div className='course-detail'>
      <div className='course-main-detail'>
        <Container>
          <Row>
            <Col xs={4}>
              <div className='course-detail-img'>
                <img 
                  src='https://compote.slate.com/images/926e5009-c10a-48fe-b90e-fa0760f82fcd.png?width=1200&rect=680x453&offset=0x30' 
                />  
              </div>
            </Col>
            <Col xs={8}>
              <Row className='course-detail-text'>
                <Col xs={8} className='left-course-detail'>
                  <Row>
                      <h1>{course.course_name}</h1>
                  </Row>
                  <Row>
                    <h5>School: <Link to={`/school/${course.school_id}`}>
                        {school.name}
                      </Link>
                    </h5>
                    <Col xs={2}>
                      <h5>Duration: </h5>
                    </Col>
                    <Col xs={9} className='duration-list'>
                      <p>WED 15.00 - 17.00</p>
                      <p>SUN 7.00 - 10.00</p>
                    </Col>
                    <h5>Address: </h5>
                  </Row>
                </Col>
                <Col xs={4} className='right-course-detail'>
                  <FavButton/>
                  <div>
                    { (seatRemain <= 5) && 
                    <h5 style={{color: 'red'}}>{seatRemain} SEATS AVAILABLE!</h5>
                    }
                    <Button onClick={() => navigate("/course-payment/:courseid")}color='primary'> 
                      Reserve Course
                    </Button>
                    <h4>
                      {course.course_price} THB
                    </h4>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>    
      <div className='course-detail-bottom pt-5'>
        <Container className='pb-5'>
          <Row>
            <Col>
              <h2 className='mb-3'>Course Detail</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in varius nisi. Sed aliquet arcu at leo feugiat congue eget maximus sapien. Quisque eu egestas nulla. Quisque vitae gravida est, sed facilisis libero. Donec posuere aliquam egestas. Phasellus a lacus in enim varius posuere et a magna. In massa sem, scelerisque sed elit at, luctus mattis dolor.
              </p>
            </Col>
            <Col>
              <div className='course-teachers-box'>
                <h2>Teachers</h2>
                {
                  teachers.map((teacher) => (
                    <div className='course-teacher-card mt-3'>
                      <img className='course-teacher-img' 
                          src={teacher.picture_url} 
                          alt={teacher.user_id}
                          />
                      <Link className='ml-3 mt-auto course-teacher-link' to={`/teachers/${teacher.user_id}`}>
                        <p>{teacher.firstname + '  ' + teacher.lastname}</p>
                      </Link>
                    </div>
                  ))
                }
              </div>
            </Col>
          </Row>
        </Container>
        <hr/>
        <Container className='pt-3 pb-5'>
          <Row>
            <h2>Related Courses</h2>
          </Row>
          <CardList 
            cardType='course'
            cardData={relatedCourse}
            toggleFavorite={true}
          />
        </Container>
      </div>
    </div>
  )
}

export default CourseDetail