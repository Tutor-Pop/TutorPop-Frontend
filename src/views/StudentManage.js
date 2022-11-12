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

  useEffect(() => {
    dispatch(startLoading())
    getCourse(courseid).then((res) => {
      setCourse(res.data.result)
      return getAllReservationInCourse(courseid)
    }
    ).then((response) => {
      dispatch(stopLoading())
      setAccount([response.data.result])
      return getAccount()
    }
    ).catch( err => {
      console.log(err)
      dispatch(stopLoading())
    })
  }, [])

  return (
    <div>
      <div className='stutdent-manage-title'>
        <h1>Student Management</h1>
        <h3>{course.course_name}</h3>
      </div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Waiting for Confirmation (2)</AccordionHeader>
          <AccordionBody accordionId="1">
            <StudentCard/>
            <Table>
              <tbody>
                {
                  allReserve.map(
                    (reserve) => (
                      <tr>
                        <td>{reserve.status}</td>
                        
                      </tr>
                    )
                  )
                }
              </tbody>
            </Table>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Already Confirmed (18)</AccordionHeader>
          <AccordionBody accordionId="2">
            <StudentCard/>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
      
    </div>
  )
}

export default StudentManage