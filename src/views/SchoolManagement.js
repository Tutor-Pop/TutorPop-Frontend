import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import ClassroomManagementBtn from '../components/ClassroomManagementBtn'
import LogoBannerBtn from '../components/LogoBannerBtn'
import SchoolEditingBtn from '../components/SchoolEditingBtn'
import SchoolManagementBtn from '../components/TeacherManagementBtn'
import { startLoading, stopLoading } from '../redux/loading.reducer'
import { getSchool } from '../services/school.service'

const SchoolManagement = () => {

  const { schoolid } = useParams()
  const dispatch = useDispatch()
  const [school, setSchool] = useState({})

  useEffect(() => {
    dispatch(startLoading())
    getSchool(schoolid).then((response) => {
      dispatch(stopLoading())
      setSchool(response.data.result)  
    })
  }, [])

  return (
    <div>
<div className='MySchoolTitle'>
            <h1>School Management</h1>
            <h5>{school.name}</h5>
        </div>
        <div className='schoolcards'>
        <Container className='SchoolBox'>
            <Row md={3} xs={2} xl={4} xxl={5}>
              <Col className='border'><SchoolEditingBtn school={school}/></Col>
              <Col className='border'><SchoolManagementBtn school={school}/></Col>
              <Col className='border'><ClassroomManagementBtn school={school}/></Col>
              <Col className='border'><LogoBannerBtn school={school}/></Col>
            </Row>
        </Container>
        </div>
    </div>
  )
}

export default SchoolManagement