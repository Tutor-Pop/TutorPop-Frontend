import { AppBar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams, useRoutes } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import '../App.css'
import { getAccount } from '../services/account.service'
// export const Resent =()=>{

const Verify = () => {

  // const { state } = useLocation()
  const [email,setemail] = useState("")

  const { userid } = useParams()
  
  useEffect(()=>{
    getAccount(userid).then(response => {
      setemail(response.data.result.email)
    })
  },[])

  return (
    <Container>
      <Row>
        <Col className="email-box">
          <img src="https://cdn-icons-png.flaticon.com/512/3296/3296464.png" alt="Google" />
        </Col>
      </Row>
      <Row className="verify-text">
        <Col className="verify-col">
          <h1>Please Verify Your Account</h1>
          <h3>We’ve sent you and confirmation to your email: <b className='text-sky-700'>{ email }</b></h3>
          <h3>Please check your inbox to confirm your email</h3>
          <br />
          <br />

          {/* เดะทำ <h3 className="resent-style">Didn’t recived your confirmation? <span className="resent-click">Click here</span> to resend.</h3> */}

        </Col>
      </Row>
    </Container>
  );
};
export default Verify  