import React from "react";
import { Link } from "react-router-dom";
import PaymentCardstatic from "./PaymentCardstatic";


const PaymentCard = () => {
  return (
    <span>
      <Link to='/course-payment/payment-method'>
        <PaymentCardstatic/>
      </Link>
    </span>
  );
};

export default PaymentCard;
