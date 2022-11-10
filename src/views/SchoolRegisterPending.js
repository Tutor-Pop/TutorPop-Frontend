import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Row } from 'reactstrap'

const SchoolRegisterPending = () => {
  return (
    <Container>
        <Row className='ch-box'>
            <img src='https://media.discordapp.net/attachments/692979848523677761/1040209094247710741/image.png' />
        </Row>
        <Row className='txt-payed'>
          <h4>
            Your regristry will be accept after recieving confirmation from our admin.
          </h4>
          <h4>Typically this takes about 2 days  you can safely close this window or </h4>
        </Row>
        <Row>
        <Col className="div-pay-btn">
          <Link to='/search'  className="pay-btn" >
            <Button color='primary' size="lg">
            CONTINUE TO WEBSITE
            </Button>
          </Link>
        </Col>
        </Row>
    </Container>
  )
}

export default SchoolRegisterPending