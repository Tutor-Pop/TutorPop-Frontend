import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const ChangePassword = () => {
  return (
    <Form>
      <Container className="register">
        <Row className="register-box">
          <Row className='mt-5'>
            <h1>Change Password</h1>
          </Row>
          <Row>
            <FormGroup>
              <Label className="mt-3" for="old-password">
                Old Password<span className="required-star">*</span>
              </Label>
              <Input
                required={true}
                className="input"
                id="old-password"
                type="password"
              />

              <Label className="mt-3" for="new-password">
                New Password<span className="required-star">*</span>
              </Label>
              <Input
                required={true}
                className="input"
                id="new-password"
                type="password"
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
  )
}

export default ChangePassword