import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Table,
} from 'reactstrap';
import StudentCard from '../components/StudentCard'
import { startLoading, stopLoading } from '../redux/loading.reducer';
import { getAccount } from '../services/account.service';
import { getCourse } from '../services/course.service';
import { getAllReservationInCourse } from '../services/reserveation.service';

function StudentManage() {
  const [open, setOpen] = useState('0');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const {courseid} = useParams();
  const dispatch = useDispatch();
  const [course, setCourse] = useState("");
  const [account, setAccount] = useState({});
  const [allReserve, setReserve] = useState([]);

  const [waitReserve,setwaitReserve] = useState([])
  const [confirmReserve,setconfirmReserve] = useState([])

  useEffect(() => {
    dispatch(startLoading())
    getCourse(courseid).then((res) => {
      setCourse(res.data.result)
      return getAllReservationInCourse(courseid)
    }
    ).then((response) => {
      dispatch(stopLoading())
      setReserve(response.data.reservations)
    }
    ).catch( err => {
      console.log(err)
      dispatch(stopLoading())
    })
  }, [])

  useEffect(()=>{
    setwaitReserve(allReserve.filter(value => value.status != "Confirmed"))
    setconfirmReserve(allReserve.filter(value => value.status == "Confirmed"))
  },[allReserve])

  return (
    <div>
      <div className='stutdent-manage-title'>
        <h1>Student Management</h1>
        <h3>{course.course_name}</h3>
      </div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Waiting for Confirmation ({waitReserve.length})</AccordionHeader>
          <AccordionBody accordionId="1">
            { waitReserve.map(value => 
              <StudentCard
                username={value.username}
                email={value.email}
                payment_pic={value.payment_pic}
                reservation_id={value.id}
              />)}
            
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Already Confirmed ({confirmReserve.length})</AccordionHeader>
          <AccordionBody accordionId="2">
          { confirmReserve.map(value => 
              <StudentCard
                username={value.username}
                email={value.email}
                payment_pic={value.payment_pic}
                reservation_id={value.id}
                noSelect={true}
              />)}
          </AccordionBody>
        </AccordionItem>
      </Accordion>
      
    </div>
  )
}

export default StudentManage