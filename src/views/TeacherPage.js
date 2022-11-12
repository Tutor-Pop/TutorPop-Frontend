import { faCoffee, faComment, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { startLoading, stopLoading } from '../redux/loading.reducer'
import CourseCardMini from '../components/CourseCardMini'
import SchoolCard from '../components/SchoolCard'
import { getAccount } from '../services/account.service'
import { getTeachingCourses } from '../services/course.service'
import { getAllTeachingSchool } from '../services/school.service'

const TeacherPage = () => {

    const dispatch = useDispatch()
    // const [allSchoolData,setAllSchoolData] = useState([{
    //     'school_id' : '1',
    //     'name': 'school A',
    //     'logo_url' : 'https://cdn-icons-png.flaticon.com/512/2830/2830191.png'
    //   },
    //   {
    //     'school_id' : '2',
    //     'name': 'school B',
    //     'logo_url' : 'https://cdn-icons-png.flaticon.com/512/2602/2602412.png'
    //   },
    //   {
    //     'school_id' : '3',
    //     'name': 'school C',
    //     'logo_url' : 'https://cdn-icons-png.flaticon.com/512/3390/3390009.png'
    //   }])

    const { teacherid } = useParams();

    const [allTeachingCourses, setAllTeachingCourses] = useState([]);
    const [allSchools, setAllSchools] = useState([]);
    const [teacher, setTeacher] = useState({})


    useEffect(() => {
        getAccount(teacherid).then(
            (response) => (setTeacher(response.data.result))
        )        
        getTeachingCourses(teacherid).then(
            (response) => (setAllTeachingCourses(response.data.courses))
        )
        getAllTeachingSchool(teacherid).then(
            (response) => (setAllSchools(response.data.schools))
        )
    }, [])

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
                        <h4 className='text-center pb-10'>{teacher.firstname + ' ' + teacher.lastname}</h4>
                    </Row>
                </Col>
                <Col>
                    <div className=''>
                        <h2>Description</h2>
                        <p>{teacher.description}</p>
                        <hr/>
                        <Row>
                            <Col>
                                <p><FontAwesomeIcon icon={faEnvelope} className='pr-4' />{teacher.email}</p>
                            </Col>
                        </Row>
                    </div>
                    
                </Col>
            </Row>
            <div className='teacher-courses-box'>
                <h3 className='text-center pb-4'>{teacher.firstname}'s Courses</h3>
                <div className='courseslidebar'>
                    {
                        allTeachingCourses.map((course) => (
                            <Col xs={3} className='col-course-card-mini'><CourseCardMini course={course}/></Col>
                        )
                        )
                    }
                    {/* <Col className='col-course-card-mini'><CourseCardMini/></Col>
                    <Col className='col-course-card-mini'><CourseCardMini/></Col>
                    <Col className='col-course-card-mini'><CourseCardMini/></Col> */}
                </div>
            </div>
            <Row>
                <h4 className='text-center mt-3 mb-3'>{teacher.firstname} teach at</h4>
            </Row>
            <Row>
                {allSchools.map((school) => (
                    <Col xs={4} className='border myschool-img'>
                        <SchoolCard
                        status={'SchoolCard'} 
                        school_id={school.school_id}
                        school_name={school.name}
                        logo_url={'https://cdn-icons-png.flaticon.com/512/2830/2830191.png'}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
  )
}

export default TeacherPage