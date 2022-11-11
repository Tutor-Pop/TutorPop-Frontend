import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import ClassroomManagementBtn from '../components/ClassroomManagementBtn'
import LogoBannerBtn from '../components/LogoBannerBtn'
import SchoolEditing from '../components/SchoolEditingBtn'
import SchoolManagementBtn from '../components/TeacherManagementBtn'

const SchoolManagement = () => {
  return (
    <div>
      <div className='MySchoolTitle'>
            <h1>SchoolManagement</h1>
            <h5>School Name</h5>
      </div>
      <div className='schoolcards'>
        <Container className='SchoolBox'>
            <Row className="school-manage-menu" md={3} xs={2} xl={4} xxl={5}>
              <Col className='border'><LogoBannerBtn/></Col>
              <Col className='border'><SchoolEditing/></Col>
              <Col className='border'><SchoolManagementBtn/></Col>
              <Col className='border'><ClassroomManagementBtn/></Col>
              
            </Row>
        </Container>
      </div>
    </div>
  )
}

export default SchoolManagement