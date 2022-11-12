import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button, Col, Container, Row } from 'reactstrap';
import CardList from '../components/CardList';
import FavButton from '../components/FavButton';
import { startLoading, stopLoading } from '../redux/loading.reducer';
import { getSingleCourseWithDetail } from '../services/course.service';
import { createReservation } from '../services/reserveation.service';
//ไปหน้าคอร์ส หน้าอาจารย์ แล้วก็หน้า reserve คอร์ส พร้อมเอาหัวใจออก

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

const CourseDetail = () => {
  const { courseid } = useParams();

  const [course,setCourse] = useState({})
  const navigate = useNavigate()
  const dispatch = useDispatch()
    
  const seatRemain = Number(course.maximum_student) - Number(course.reserved_student)

  const handleClick = () => {
    
    let formData = new FormData()
      formData.append('account_id',localStorage.getItem('account_id'))
      formData.append('course_id',course.course_id)
      
      dispatch(startLoading())
      createReservation(formData).then( response =>{
          dispatch(stopLoading())
          navigate(`/course-payment/${course.course_id}`)
      })
  }

  useEffect(()=>{
    getSingleCourseWithDetail(courseid).then(response => {
      setCourse(response.data.result)
    })
  },[])

  return course.course_id && (
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
                        {course.school_name}
                      </Link>
                    </h5>
                    <Col xs={2}>
                      <h5>Duration: </h5>
                    </Col>
                    <Col xs={9} className='duration-list'>
                      {
                        course.study_time.map(value => (
                          <p>{value.day} {value.start_time} - {value.end_time}</p>
                        ))
                      }
             
                    </Col>
                    {/* <h5>Address: </h5>
                    <p></p> */}
                  </Row>
                </Col>
                <Col xs={4} className='right-course-detail'>
                  <div>
                    { (seatRemain <= 5) && 
                    <h5 style={{color: 'red'}}>{seatRemain} SEATS AVAILABLE!</h5>
                    }
                    <Button color='primary' onClick={handleClick}> 
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
              {course.course_description}
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