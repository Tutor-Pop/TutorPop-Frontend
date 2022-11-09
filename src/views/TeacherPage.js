import { faCoffee, faComment, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import CourseCardMini from '../components/CourseCardMini'
import SchoolCard from '../components/SchoolCard'

const TeacherPage = () => {

    const [allSchoolData,setAllSchoolData] = useState([{
        'school_id' : '1',
        'name': 'school A',
        'logo_url' : 'https://cdn-icons-png.flaticon.com/512/2830/2830191.png'
      },
      {
        'school_id' : '2',
        'name': 'school B',
        'logo_url' : 'https://cdn-icons-png.flaticon.com/512/2602/2602412.png'
      },
      {
        'school_id' : '3',
        'name': 'school C',
        'logo_url' : 'https://cdn-icons-png.flaticon.com/512/3390/3390009.png'
      }])

  return (
    <div className='pt-20'>
        <Container className='mt-12'>
            <Row>
                <Col>
                    <Row className='mx-auto' style={{

                    }}>
                        <img
                            className='rounded-full border mx-auto mb-3'
                            alt='profile'
                            src={'https://cdn-icons-png.flaticon.com/512/2784/2784488.png'}
                            style={{
                                width: '40%'
                            }}
                        />
                    </Row>
                    <Row>
                        <h4 className='text-center'>jittat fakcharoenphol</h4>
                    </Row>
                </Col>
                <Col>
                    <div className=''>
                        <h2>Description</h2>
                        <p>ประสบการณ์การสอนมา 15 ปี Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iru </p>
                        <hr/>
                        <Row>
                            <Col>
                                <p><FontAwesomeIcon icon={faPhone} className='pr-4' /> xxx-xxx-xxxx</p>
                            </Col>
                            <Col>
                                <p><FontAwesomeIcon icon={faEnvelope} className='pr-4' /> lorem.gmail.com</p>
                            </Col>
                        </Row>
                    </div>
                    
                </Col>
            </Row>
            <Row className='courseslidebar'>
                <Col className='col-course-card-mini'><CourseCardMini/></Col>
                <Col className='col-course-card-mini'><CourseCardMini/></Col>
                <Col className='col-course-card-mini'><CourseCardMini/></Col>
                <Col className='col-course-card-mini'><CourseCardMini/></Col>
            </Row>
            <Row>
                <h4 className='text-center mt-3 mb-3'>Jittat teach at</h4>
            </Row>
            <Row>
                {allSchoolData.map((school) => (
                    <Col className='border myschool-img'>
                        <SchoolCard 
                        school_id={school.school_id}
                        school_name={school.name}
                        logo_url={school.logo_url}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
  )
}

export default TeacherPage