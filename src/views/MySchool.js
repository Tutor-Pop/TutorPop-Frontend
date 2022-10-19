import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import SchoolAddCard from '../components/SchoolAddCard'
import SchoolCard from '../components/SchoolCard'

const MySchool = () => {
  
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
    <div>
        <div className='MySchoolTitle'>
            <h1>My School</h1>
        </div>
        <div className='schoolcards'>
        <Container className='SchoolBox'>
            <Row md={3} xs={2} xl={4} xxl={5}>
              {allSchoolData.map((school) => (
                <Col className='myschool-img border'>
                  <SchoolCard 
                    school_id={school.school_id}
                    school_name={school.name}
                    logo_url={school.logo_url}
                  />
                </Col>
              ))}
              <Col className='myschool-img border'><SchoolAddCard/></Col>
            </Row>
        </Container>
        </div>
    </div>
  )
}

export default MySchool