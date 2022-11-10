import { AppBar } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import '../App.css'
// export const Resent =()=>{
 
const Verify = () => {
  return (
    <Container classname="veri-all-cont">
      <Row>
        <Col className="email-box">
        <img src="https://cdn-icons-png.flaticon.com/512/3296/3296464.png" alt="Google"/>
        </Col>
      </Row>
      <Row classname="verify-text">
        <Col className="verify-col">
        <h1>Please Verify Your Account</h1>
        <h3>We’ve sent you and confirmation to your email: xxxxxxxxxxxxxxxx@mail.com</h3>
        <h3>Please check your inbox to confirm your email</h3>
        <br/>
        <br/>
       
          <h3 classname = "resent-style">Didn’t recived your confirmation? Click here to resend.</h3>
       
        </Col>
      </Row>
    </Container>
  );
};
export default Verify  