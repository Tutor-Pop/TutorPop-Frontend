import React, {useState} from 'react'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import StudentCard from '../components/StudentCard'

function StudentManage() {
  const [open, setOpen] = useState('0');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <div>
      <div className='stutdent-manage-title'>
        <h1>Student Management</h1>
        <h3>course name</h3>
      </div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Waiting for Confirmation (10)</AccordionHeader>
          <AccordionBody accordionId="1">
            <StudentCard/>
            <StudentCard/>
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