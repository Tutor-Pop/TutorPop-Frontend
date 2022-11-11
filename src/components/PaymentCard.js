import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";


const PaymentCard = ({details}) => {
  const start_date = new Date(details.start_date);
  const end_date = new Date(details.end_date);
  
  return (
    <Container className="paymentcard">
        <Row>
          <Col>
            <img
              className="course-img"
              // src={require(`../../../TutorPop-Backend/${details.course_pic}`)}
            />
          </Col>
          <Col className="nlink">
            <h2>{details.course_name}</h2>
            <h5>school: <span>{details.school_name}</span></h5>
            <h5>Schedule : </h5>
          </Col>
        </Row>
        <Row>
            <Col></Col>
            <Col className="nlink">
                <h6>Duration: {`${start_date.getDate()}/${(start_date.getMonth()+1)}/${start_date.getFullYear().toString()}`} to 
                {`${end_date.getDate()}/${(end_date.getMonth()+1)}/${end_date.getFullYear().toString()}`}</h6>
            </Col>
        </Row>
        <hr/>
        <Row>
          <Col className="nlink">
            <h4>Total</h4>
          </Col>
          <Col className="nlink">
            <h4 className="cost">฿{details.course_price}</h4>
          </Col>
        </Row>
        </Container>
  )
}

export default PaymentCard;
