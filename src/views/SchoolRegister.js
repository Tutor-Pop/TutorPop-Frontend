import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const SchoolRegister = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData(e.target)
    // console.log(e.target['school-verify-doc'])
    formData.append("account_id",8)
    formData.append("school_id",1)
    formData.append("document",e.target['school-verify-doc'])
    formData.append("payment_pic",e.target['school-verify-doc'])
    // formData.append("account_id",<input value="5"></input>)
    // formData.append("school_id",'1')
    // formData.append("document",'asdf')
    // formData.append("payment_pic",'asdf')
    for(const i of formData.keys()){
      console.log(i)
    }
    for(const i of formData.values()){
      console.log(i)
    }
    console.log('Sending',formData)
    axios.post('http://localhost:8000/api/requests', formData, {
      headers: {
        'content-type': 'multipart/form-data',
        'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY1OTk1NDE5LCJpYXQiOjE2NjU5OTUxMTksImp0aSI6IjgwN2MxZThlMDBkMzRhZDE5OTEyODJkYjQxMGNhZmE1IiwidXNlcl9pZCI6M30.YCCUAJ4wRqdxwvkDowQ-s-aLWD1Yjh0KKmRApnkiUIs"
      }
    }).then((response)=>{
      console.log(response.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div className='school-register'>
      <Form onSubmit={(e) => handleSubmit(e)}>
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
                {/* <Link className='link-btn-text' to={`/search`}> */}
                  <Button className="school-register-btn" type="submit" color="primary" size="lg">
                    Register School
                  </Button>
                {/* </Link> */}
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