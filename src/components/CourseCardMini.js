import React from 'react'
import { Container, Row } from 'reactstrap'

const CourseCardMini = () => {
  return (
    <div className='course-card-mini border'>
        <Container>
            <Row className='course-img'>
                <img src='https://cdn-icons-png.flaticon.com/512/3253/3253220.png' alt='Course-Img'/>
            </Row>
            <Row>
                <p>peach wongsu</p>
                <p>@guru school</p>
                <p>200 THB</p>
            </Row>
        </Container>
    </div>
  )
}

export default CourseCardMini

