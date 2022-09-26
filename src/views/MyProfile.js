import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Row } from 'reactstrap'

const MyProfile = () => {
  
  const userInfo = {
    username: 'Username8',
    firstname: 'Doodee',
    lastname: 'Goodsurname',
    email: 'Lorem@ipsum.go.th',
    year_of_birth: '2001',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia hendrerit fringilla. Ut ac ligula viverra ex tempus porta. Nam nec ante a nunc bibendum auctor. Integer malesuada enim nisl, sed vehicula nisl aliquet eget. Praesent non quam nec ante ultrices bibendum. Nam hendrerit sodales libero sit amet gravida.',
    picture_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXZ5GsZzyJ6Jjqi3aqJl_s4uCu1bW_Cf6nfi7TudP0gFjIEOy3XroUucaADK7Ctljx2uQ&usqp=CAU'
  }

  return (
    <div className='my-profile'>
      <div className='my-profile-picture-box'>
        <h1 className='m-5'>My Profile</h1>
        <div className='picture-container'>
          <img src={userInfo.picture_url}></img>
          <Button size='lg' className='change-profile-btn mt-5'>Change Profile Picture</Button>
        </div>
      </div>
      <div className='my-profile-info'>
        <Container className='info-container'>
          <Row>
            <h5 className='p-1'>Username</h5>
            <h4 className='p-1'>{userInfo.username}</h4>
          </Row>
          <Row>
            <Col className='p-1'>
              <h5 className='p-1'>Firstname</h5>
              <h4 className='p-1'>{userInfo.firstname}</h4>
            </Col>
            <Col className='p-1'>
              <h5 className='p-1'>Lastname</h5>
              <h4 className='p-1'>{userInfo.lastname}</h4>
            </Col>
          </Row>
          <Row>
            <h5 className='p-1'>Email</h5>
            <h4 className='p-1'>{userInfo.email}</h4>
          </Row>
          <Row>
            <h5 className='p-1'>Year of Birth</h5>
            <h4 className='p-1'>{userInfo.year_of_birth}</h4>
          </Row>
          <Row>
            <h5 className='p-1'>Describe Yourself</h5>
            <h4 className='p-1'>{userInfo.description}</h4>
          </Row>
        </Container>
        <Row className='mt-5'>
          <Col>
            <Button size='lg' className='edit-user-info-btn'>Edit Info</Button>
          </Col>
          <Col className='link-change-password mt-auto mb-auto'>
            <Link to='/change-password'>Change Password</Link>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default MyProfile