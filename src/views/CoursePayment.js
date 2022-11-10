import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import PaymentCard from "../components/PaymentCard";

const CoursePayment = () => {
  return (
    <div>
      <div className="PaymentCard">
        <div className="payment-info-text">
          <h4>You’re now reserved Course 3</h4>
          <h4>Please pay the fee in 2022 07 09</h4>
        </div>
        <Link to="/promospace/detail">
          <PaymentCard />
        </Link>
        <PaymentCard />
        <PaymentCard />
        <div className="div-pay-btn">
          <Button color="primary" className="pay-btn" size="lg">
            PAY NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoursePayment;
