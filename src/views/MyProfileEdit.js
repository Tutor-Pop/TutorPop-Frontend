import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const MyProfileEdit = () => {

  const profileData = {
    "account_id" : "1",
    "username" : "account01",
    "firstname" : "Pla",
    "lastname" : "Pud",
    "email" : "plapud_jj@gmail.com",
    "year_of_birth" : "2002",
    "description" : "Currently teaching at JJLab Tutoring School. 5 Years of Experiences",
    "is_verified" : "yes",
    "picture_url" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXZ5GsZzyJ6Jjqi3aqJl_s4uCu1bW_Cf6nfi7TudP0gFjIEOy3XroUucaADK7Ctljx2uQ&usqp=CAU",
    "user_status" : "active"
  }

  return (
    <div className='my-profile-edit'>
      <Form>
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
              <Link className='link-btn-text' to='/my-profile'>
                <Button className="edit-save-btn" type="submit" color="primary" size="lg">
                  Save
                </Button>
              </Link>
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