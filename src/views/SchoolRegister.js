import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const SchoolRegister = () => {
  return (
    <div className='school-register'>
      <Form>
        <Container className='register'>
          <Row className='register-box'>
            <Row>
              <h1 className='mb-10'>School Registering</h1>
            </Row>
            <Row>
              <FormGroup>
                <Label for='school-name'>
                  Tutoring School Name<span className='required-star'>*</span>
                </Label>
                <Input 
                  id='school-name'
                  type='text'
                  required={true}
                />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label for='school-description'>
                  School Description
                </Label>
                <Input 
                  id='school-description'
                  type='textarea'
                  rows='5'
                />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label for='school-address'>
                  School Address<span className="required-star">*</span>
                </Label>
                <Input 
                  id='school-address' 
                  type='textarea'
                  required={true} 
                />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label for='school-verify-doc'>
                  Upload School Verification Document<span className='required-star'>*</span>
                </Label>
                <Input 
                  id='school-verify-doc'
                  type='file'
                  required={true}
                />
              </FormGroup>
            </Row>
            <Row className="justify-evenly mt-5">
              <Col>
                <Link className='link-btn-text' to={`/search`}>
                  <Button className="school-register-btn" type="submit" color="primary" size="lg">
                    Register School
                  </Button>
                </Link>
              </Col>
              <Col>
                <Link className='link-btn-text' to={`/search`}>
                  <Button className='edit-cancel-btn' color='secondary' size='lg'>
                    Cancel
                  </Button>
                </Link>
              </Col>
            </Row>
            <Row>
              <p className='reply-text mt-2'>We will verify within 48 hours. Please wait for the reply.</p>
            </Row>
          </Row>
        </Container>
      </Form>
    </div>
  )
}

export default SchoolRegister