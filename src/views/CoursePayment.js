
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "reactstrap";
import LinkButton from "../components/LinkButton";
import PaymentCard from "../components/PaymentCard";
import { getSingleCourseWithDetail } from "../services/course.service";
import { getAllReservationInCourse, getResevationIdFromAccountCourse } from "../services/reserveation.service";

//กด continue to website
const CoursePayment = () => {
  // const accountId = localStorage.getItem('account_Id')
  const accountId = 40;
  const { courseid } = useParams();
  const [details, setDetails] = useState([]);
  const [reservationId, setReservationId] = useState(0);
  const [reservationDetails, setReservationDetails] = useState([])
  const [payDate, setPayDate] = useState("");
  const [done, isDone] = useState(false);
  const [done1, isDone1] = useState(false);
  const [done2, isDone2] = useState(false);
  const [done3, isDone3] = useState(false);

    useEffect(()=>{
        getSingleCourseWithDetail(courseid).then(
            response1 => setDetails(response1.data.result)
        )
        getResevationIdFromAccountCourse(accountId,courseid).then(
          response2 => setReservationId(response2.data.reservation_id)
        )
        getAllReservationInCourse(courseid).then(
          response3 => setReservationDetails(response3.data.reservations)
        )
    },[])
            
          
      return (
        <div>
      <div>
        <div className="PaymentCard mt-20">
          <div className="payment-info-text">
            <h4>You are now reserved Course 3</h4>
            <h4>Please pay the fee in 2022 07 09</h4>
          </div>
          <PaymentCard details={details}/>
          </div>
          
        <div className="div-pay-btn mx-auto">
          <LinkButton color="primary" className="pay-now-btn" size="lg" to={`/course-payment/${courseid}/payment-method`} label="Pay Nowaaa"/>
          <LinkButton color='secondary' className='con-to-web-btn' size='lg' to="/search" label="Continue To Website"/>
        </div>
        <PaymentCard details={details} />
      </div>
      {/* <div className="div-pay-btn mx-auto">
        <LinkButton color="primary" className="pay-now-btn" size="lg" to="/course-payment/payment-method" label="Pay Now" />
        <LinkButton color='secondary' className='con-to-web-btn' size='lg' to="/search" label="Continue To Website" />
      </div> */}
    </div>
    
  );
};

export default CoursePayment;
