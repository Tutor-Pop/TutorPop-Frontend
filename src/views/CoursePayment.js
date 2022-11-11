import React from "react";
import { Button } from "reactstrap";
import LinkButton from "../components/LinkButton";
import PaymentCard from "../components/PaymentCard";
//กด continue to website
const CoursePayment = () => {
  return (
    <div>
      <div className="PaymentCard">
        <div className="payment-info-text">
          <h4>You’re now reserved Course 3</h4>
          <h4>Please pay the fee in 2022 07 09</h4>
        </div>
        <PaymentCard />

        <div className="div-pay-btn mx-auto">
          <LinkButton color="primary" className="pay-now-btn" size="lg" to="/course-payment/payment-method" label="Pay Now"/>
          <Button color='secondary' className='pay-btn' size='lg'>Continue To Website</Button>
        </div>
      </div>
    </div>
  );
};

export default CoursePayment;
