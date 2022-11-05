import React, { useState } from "react";
import Logo from "../img/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input, Row, Col, Form, FormGroup, Label, Button } from "reactstrap";
import { Link, useNavigate } from 'react-router-dom'
import { login } from "../services/auth.service";

const LoginPage = () => {

  const [invalid, setInvalid] = useState({
    username: false,
    password: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(body)
      .then((response) => {
        localStorage.setItem("account_id", response.data.account_id);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("token", response.data.token);
        window.location.reload(false);
      })
      .catch((err) => {
        if (err.response.status == 404) {
          setInvalid({ ...invalid, username: true, password: false });
        }
        else {
          setInvalid({ ...invalid, username: false, password: true });
        }
      });
  };
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
            <Form onSubmit={e => handleSubmit(e)}>
              <FormGroup className="mt-10">
                <Label for="username">Username</Label>
                <Input
                  className="input"
                  id="username"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  className="input"
                  id="password"
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
