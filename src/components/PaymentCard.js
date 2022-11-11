import React from "react";
import { Col, Container, Row } from "reactstrap";


const PaymentCard = () => {
  return (
    <Container className="paymentcard">
        <Row>
          <Col>
            <img
              className="course-img"
              src={require("../img/logo-white.png")}
            />
          </Col>
          <Col className="nlink">
            <h2>Course 1</h2>
            <h6>school: Lorem</h6>
            <p>Schedule : WED 15.00 - 17.00</p>
            <p>SUN 7.00 - 10.00</p>
          </Col>
        </Row>
        <Row>
            <Col></Col>
            <Col className="nlink">
                <h6>Duration: 1 May to 31 May 2056</h6>
            </Col>
        </Row>
        <hr/>
        <Row>
          <Col className="nlink">
            <h4>Total</h4>
          </Col>
          <Col className="nlink">
            <h4 className="cost">฿2500</h4>
          </Col>
        </Row>
        </Container>
  )
}

export default PaymentCard;
