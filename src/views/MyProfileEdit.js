import React from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const MyProfileEdit = () => {
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
              />
            </Col>
            <Col>
              <Label for="lastname">
                Lastname<span className="required-star">*</span>
              </Label>
              <Input id="lastname" type="text" />
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
                id="username" />

              <Label className="mt-3" for="password">
                Password<span className="required-star">*</span>
              </Label>
              <Input
                required={true}
                className="input"
                id="password"
                type="password"
              />

              <Label className="mt-3" for="confirm_password">
                Confirm Password<span className="required-star">*</span>
              </Label>
              <Input
                required={true}
                className="input"
                id="confirm_password"
                type="password"
              />
            </FormGroup>
          </Row>
          <Row md={2} xs={1}>
            <Col>
              <FormGroup>
                <Label for="email">
                  Email<span className="required-star">*</span>
                </Label>
                <Input required={true} id="email" type="email" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="year_of_birth">Birthyear</Label>
                <Input id="year_of_birth" type="number" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <FormGroup>
              <Label for="description">Describe yourself</Label>
              <Input id="description" name="text" type="textarea" />
            </FormGroup>
          </Row>
          <Row className="justify-evenly">
            <Button className="my-20" type="submit" color="primary" size="lg">
              Register
            </Button>
          </Row>
        </Row>
      </Container>
    </Form>
    </div>
  )
}

export default MyProfileEdit