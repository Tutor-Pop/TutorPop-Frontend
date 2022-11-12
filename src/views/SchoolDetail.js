import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Col, Container, Row, Tooltip } from 'reactstrap'
import CardList from '../components/CardList'
import SchoolBanner from '../img/logo-white.png'

import Favorite from '../img/heart.png'
import Homepage from './Homepage'
import FavButton from '../components/FavButton'
import { getAllSchoolDetail } from '../services/school.service'

const SchoolDetail = () => {

  const { schoolid } = useParams();
  const [alldetail, setAlldetail] = useState({});
  
  useEffect(()=>{
    getAllSchoolDetail(schoolid).then(
      response => setAlldetail(response.data)
    )
  },[])

  // console.log(alldetail);

  return (
    <div className='school-detail'>
      <div className='school-banner-box'>
        <img className='school-banner' src={SchoolBanner} alt='School-Banner'/>
      </div>
      <Container className='school-main'>
        <Row>
          <div className='school-title'>
            <h2>{alldetail.name}</h2>
             
          </div>
        </Row>
        <Row className='description-teacher'>
          <Col xs='8' className='school-description'>
            <h4>Description</h4>    
            <p>
              {alldetail.description}
            </p>
          </Col>
          <Col xs='4'>
            <h4>Our Teachers</h4>
            <Row className='school-teacher-list'> 
            { alldetail.all_teachers.teachers.map((teacher) => (
                  <Link className='teacher-item-link 'to={`/teachers/${teacher.user_id}`}>
                    <img 
                      className='user-profile-icon'
                      src={teacher.profile_picture}
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
                  {`${alldetail.addr_description} ${alldetail.sub_district} ${alldetail.district} ${alldetail.province} ${alldetail.postal_code}`}
                </p>
                <p>
                  
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
          {<CardList 
            cardType='course'
            cardData={alldetail.all_courses.courses}
            toggleFavorite={true}
          />}
      </Container>
    </div>
  )
}

export default SchoolDetail