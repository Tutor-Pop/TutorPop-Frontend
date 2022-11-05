import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { getAccount, updateAccount } from '../services/account.service'

const MyProfileEdit = () => {

  const nevigate = useNavigate()

  const [profileData,setprofileData] = useState({
    username : "",
    firstname : "",
    lastname : "",
    email : "",
    year_of_birth : "",
    description : "",
  })

  useEffect(()=>{
    getAccount(localStorage.getItem('account_id')).then(response => {
      setprofileData({
        username: response.data.result.username,
        firstname: response.data.result.firstname,
        lastname: response.data.result.lastname,
        email: response.data.result.email,
        year_of_birth: response.data.result.year_of_birth,
        description: response.data.result.description,
      })
    })
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = {
      username : e.target.username.value,
      firstname : e.target.firstname.value,
      lastname : e.target.lastname.value,
      email : e.target.email.value,
      year_of_birth : e.target.year_of_birth.value,
      description : e.target.description.value,
    }

    updateAccount(localStorage.getItem('account_id'),body).then(response => {
      console.log(response.data)
      nevigate('/my-profile')
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className='my-profile-edit'>
      <Form onSubmit={e => handleSubmit(e)}>
      <Container className="register">
        <Row className="register-box">
          <Row>
            <h1 className="mb-10">Edit Profile</h1>
          </Row>
          <Row xs={1} md={2}>
            <Col>
              <Label for="firstname">
                Firstname<span className="required-star">*</span>
              </Label>
              <Input
                // valid={validation.submit && validation.firstname}
                // invalid={validation.submit && !validation.firstname}
                id="firstname"
                type="text"
                defaultValue={profileData.firstname}
              />
            </Col>
            <Col>
              <Label for="lastname">
                Lastname<span className="required-star">*</span>
              </Label>
              <Input id="lastname" 
                     type="text"
                     defaultValue={profileData.lastname}
              />
            </Col>
          </Row>
          <Row>
            <FormGroup>
              <Label className="mt-3" for="username">
                Username<span className="required-star">*</span>
              </Label>
              <Input
                required={true}
                className="input"
                id="username" 
                defaultValue={profileData.username}
              />

            </FormGroup>
          </Row>
          <Row md={2} xs={1}>
            <Col>
              <FormGroup>
                <Label for="email">
                  Email<span className="required-star">*</span>
                </Label>
                <Input required={true} 
                       id="email" 
                       type="email"
                       defaultValue={profileData.email}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="year_of_birth">Birthyear</Label>
                <Input id="year_of_birth" 
                       type="number"
                       defaultValue={profileData.year_of_birth}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <FormGroup>
              <Label for="description">Describe yourself</Label>
              <Input id="description" 
                     name="text" 
                     type="textarea"
                     defaultValue={profileData.description}
              />
            </FormGroup>
          </Row>
          <Row className="justify-evenly mt-4">
            <Col>
                <Button className="edit-save-btn" type="submit" color="primary" size="lg">
                  Save
                </Button>
            </Col>
            <Col>
              <Link className='link-btn-text' to='/my-profile'>
                <Button className='edit-cancel-btn' color='secondary' size='lg'>
                  Cancel
                </Button>
              </Link>
            </Col>
          </Row>
        </Row>
      </Container>
    </Form>
    </div>
  )
}

export default MyProfileEdit