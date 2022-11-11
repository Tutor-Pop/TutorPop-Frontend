import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Row } from 'reactstrap'
import { startLoading, stopLoading } from '../redux/loading.reducer'
import { getAccount } from '../services/account.service'
//หมุนเป็นลูกข่างเลยจ้าาาา
const MyProfile = () => {

  const DEFAULT_PROFILE_PICTURE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXZ5GsZzyJ6Jjqi3aqJl_s4uCu1bW_Cf6nfi7TudP0gFjIEOy3XroUucaADK7Ctljx2uQ&usqp=CAU"
  const dispatch = useDispatch()

  const [userInfo,setuserInfo] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    year_of_birth: '',
    description: '',
    profile_picture: ''
  })

  useEffect(()=>{
    dispatch(startLoading())
    getAccount(localStorage.getItem('account_id')).then(response => {
      dispatch(stopLoading())
      setuserInfo({
        username: response.data.result.username,
        firstname: response.data.result.firstname,
        lastname: response.data.result.lastname,
        email: response.data.result.email,
        year_of_birth: response.data.result.year_of_birth,
        description: response.data.result.description,
        profile_picture: response.data.result.profile_picture,
      })
    })
  },[])

  return (
    <div className='my-profile'>
      <div className='my-profile-picture-box'>
        <h1 className='m-5'>My Profile</h1>
        <div className='picture-container'>
          <img src={userInfo.profile_picture == "" ? DEFAULT_PROFILE_PICTURE : userInfo.profile_picture}></img>
          <Button color='primary' size='lg' className='change-profile-btn mt-5'>Change Profile Picture</Button>
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
            <Link className='link-btn-text' to='/my-profile/edit'>
              <Button color='primary' size='lg' className='edit-user-info-btn'>
                  Edit Info
              </Button>
            </Link>
          </Col>
          <Col className='link-change-password mt-auto mb-auto'>
            <Link to='/my-profile/change-password'>Change Password</Link>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default MyProfile