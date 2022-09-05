import React from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const Registerpage = () => {
  return (
    <div className="register">
      <Row className="register-box">
        <Row>
          <h1 className="mb-10">Register</h1>
        </Row>
        <Row>
          <Col>
            <Label for="fristname">Fristname*</Label>
            <Input id="fristname" type="text" />
          </Col>
          <Col>
            <Label for="lastname">Lastname*</Label>
            <Input id="lastname" type="text" />
          </Col>
        </Row>
        <Row>
          <Form>
            <FormGroup>
              <Label className="mt-3" for="User">
                Username*
              </Label>
              <Input className="input" id="User" />
              <Label className="mt-3" for="Password">
                Password*
              </Label>
              <Input className="input" id="Password" type="password" />
              <Label className="mt-3" for="Password">
                Confirm Password*
              </Label>
              <Input className="input" id="Password" type="password" />
            </FormGroup>
          </Form>
        </Row>
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <Label for="Email">Email*</Label>
                <Input id="Email" type="email" />
              </FormGroup>
            </Form>
          </Col>
          <Col>
            <Form>
              <FormGroup>
                <Label for="birthyear">Birthyear</Label>
                <Input id="birthyear" type="number" />
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <FormGroup>
            <Label for="description">Describe yourself</Label>
            <Input id="description" name="text" type="textarea" />
          </FormGroup>

        </Row>
        <Row className="justify-evenly">
        <Button
                  className="register-btn"
                  color="primary"
                  size="lg"
                >
                  Register
                </Button>
        </Row>
      </Row>
    </div>
  );
};

export default Registerpage;
