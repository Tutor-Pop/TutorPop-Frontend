import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const SchoolPayment = () => {
  const schoolData = { 'school_name' : 'Tutoring School 1' }

  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  const imageOnchangeHandler = (e) => {
    setImages([...e.target.files]);
  }

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((img) => newImageUrls.push(URL.createObjectURL(img)))
    setImageURLs(newImageUrls)
  }, [images])

  return (
    <div className='school-payment'>
      <Form>
        <Container className='register'>
          <Row className='register-box'>
            <Row className='mb-5'>
              <h1>School Registering Payment</h1>
              <p>{schoolData.school_name}</p>
            </Row>
            <Row className='mb-5'>
              <h4>Payment Methods</h4>
              <Col xs={3}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Rickrolling_QR_code.png'></img>
              </Col>
              <Col xs={9}>
                <p>Bank Name</p>
                <p>Account Number: XXX-XXXXXX-XX</p>
                <p>(Account's Owner Name)</p>
              </Col>
            </Row>
            <Row>
              <FormGroup>
                <Label for='upload-slip'>
                  Upload Payment Slip
                </Label>
                <Input 
                  id='upload-slip'
                  type='file'
                  required={true}
                  onChange={imageOnchangeHandler}
                />
              </FormGroup>
            </Row>
            <Row>
              { imageURLs.map( (url, idx) => <img id={idx} src={url}/>) }
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

export default SchoolPayment