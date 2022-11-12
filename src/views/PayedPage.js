import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Row } from 'reactstrap'

const PayedPage = () => {
  return (
    <Container>
        <Row className='ch-box'>
            <img src='https://cdn-icons-png.flaticon.com/512/3073/3073440.png' />
        </Row>
        <Row className='txt-payed'>
          <h4>
            Your regristry will be accept after recieving confirmation from your teacher.
          </h4>
          <h4>Typically this takes about 2 days  you can safely close this window or </h4>
        </Row>
        <Row>
        <Col className="div-pay-btn">
          <Link to='/search'  className="pay-btn">
            <Button color='primary' size="lg">
            CONTINUE TO WEBSITE
            </Button>
          </Link>
        </Col>
        </Row>
    </Container>
  )
}

export default PayedPage