import React from "react";
import { Col, Container, Row } from "reactstrap";

const PaymentCard = () => {
  return (
    <div className="paymentcard">
      <Container>
        <Row>
          <Col>
            <img
              className="course-img"
              src={require("../img/logo-white.png")}
            />
          </Col>
          <Col>
            <h1>Course 1</h1>
            <h5>school: Lorem</h5>
            <p>Schedule : WED 15.00 - 17.00</p>
            <p>SUN 7.00 - 10.00</p>
          </Col>
        </Row>
        <Row>
            <Col></Col>
            <Col>
                <h5>Duration: 1 May to 31 May 2056</h5>
            </Col>
        </Row>
        <hr/>
        <Row>
          <Col>
            <h3>Total</h3>
          </Col>
          <Col>
            <h3 className="cost">฿2500</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PaymentCard;
