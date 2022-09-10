import React from "react";
import Logo from "../img/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input, Row, Col, Form, FormGroup, Label, Button } from "reactstrap";
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className="login">
      <Row className="cardlogin">
        <Col className="divlogo">
          <img
            width={250}
            height={250}
            className="mx-auto"
            id="logo"
            src={Logo}
          />
        </Col>
        <Col className="login-form">
          <Row>
            <Form>
              <FormGroup className="mt-10">
                <Label for="User">Username</Label>
                <Input
                  className="input"
                  id="User"
              />
              </FormGroup>
              <FormGroup>
                <Label for="Password">Password</Label>
                <Input
                  className="input"
                  id="Password"
                  type="password"
                />
              </FormGroup>
                <Button
                  className="login-btn"
                  color="primary"
                  size="lg"
                >
                  Login
                </Button>
            </Form>
          </Row>
          <Row className='createacc'>
            <p className="mt-3 mb-10">Don’t have an Account? <Link to="/register">Create Account</Link> </p>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default LoginPage;
