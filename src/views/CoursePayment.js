import React from "react";
import { Button } from "reactstrap";
import LinkButton from "../components/LinkButton";
import PaymentCard from "../components/PaymentCard";
import { Link, useNavigate } from 'react-router-dom'
//กด continue to website
const CoursePayment = () => {
  const navigate=useNavigate()
  return (
    <div>
      <div className="PaymentCard">
        <div className="payment-info-text">
          <h4>You’re now reserved Course 3</h4>
          <h4>Please pay the fee in 2022 07 09</h4>
        </div>
        <PaymentCard />

        <div className="div-pay-btn mx-auto">
          <LinkButton onClick={() => navigate("/course-payment/:courseid/payment-method")} color="primary" className="pay-now-btn" size="lg" to="/course-payment/payment-method" label="Pay Now"/>
          <Button onClick={() => navigate("/course/:courseid")} color='secondary' className='pay-btn' size='lg'>Continue To Website</Button>
        </div>
      </div>
    </div>
    
  );
};

export default CoursePayment;
