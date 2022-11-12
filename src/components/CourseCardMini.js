import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row } from 'reactstrap'

const CourseCardMini = ({course}) => {

  return (
    <Link to={`/course/${course.course_id}`} className='course-card-mini border'>
        <Container>
            <Row className='course-img'>
                <img src='https://cdn-icons-png.flaticon.com/512/3253/3253220.png' alt='Course-Img'/>
            </Row>
            <Row>
                <p className='my-1'>{course.course_name}</p>
                <p className='my-1'>@guru school</p>
                <p className='my-1'>{course.course_price}</p>
            </Row>
        </Container>
    </Link>
  )
}

export default CourseCardMini

