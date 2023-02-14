import { Button, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Row } from 'reactstrap'
import SearchBar from '../components/SearchBar'
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import SendNoti from "../components/SendNoti";
import React, { useState } from "react"
import { useEffect } from 'react';
import { editRequestStatus, getAllRequest } from '../services/request.service';
import { useDispatch } from 'react-redux';
import { openComfirmation } from '../redux/confirmation.reducer';
import { startLoading, stopLoading } from '../redux/loading.reducer';
import { BACKEND_URL } from '../constants/service.constant';
import { updateTeacher } from '../services/school.service';

// ยัง search ไม่ได้ , send feedback ยังไม่ได้ คลิ๊กดูเชี่ยอะไรไม่ได้เลย ตรงเสิร์จเเว่นขยายติดช่องเสิร์จมากไป


const SchoolOpenRequest = () => {
  const [isOpen, setisOpen] = useState(false)
  const [data,setdata] = useState([])
  const dispatch = useDispatch()

  const [selectRow,setselectRow] = useState([])

  const columns = [
    {
      name: 'School: Name (A-Z)',
      selector: row => row.school_name,
      sortable: true,
    },
    {
      name: 'School owner: Default',
      selector: row => row.username,
      sortable: true,
    },
    {
      name: 'Status',
      selector: row => row.request_status,
      sortable: true,
    },
    {
      name: 'Document',
      selector: row => row.document,
    },
    {
      name: 'Pay Slip',
      selector: row => <img src={"/src/img/add.png"}/>,
    },
    {
      name: 'Date: Latest',
      selector: row => row.request_timestamp,
      sortable: true,
    },
    {
      name: 'Send feedback',
      selector: row => <Button onClick={() => setisOpen(true)}><FontAwesomeIcon icon={faPaperPlane} /></Button>,
    },
  ];

  const handleConfirmed = async () => {
    for(var i in selectRow){
      await editRequestStatus(selectRow[i].request_id,"Confirmed")
      await updateTeacher(selectRow[i].school_id, 
        {
          "teachers" : [selectRow[i].account_id]
        }
      )
    }
    window.location.reload()
  }

  const handleRejected = () => {
    for(var i in selectRow){
      editRequestStatus(selectRow[i].request_id,"Rejected")
    }
    window.location.reload()
  }

  const handleConfirmDoc = () => {
    for(var i in selectRow){
      editRequestStatus(selectRow[i].request_id,"WaitForPayment")
    }
    window.location.reload()
  }

  useEffect(() => {
    dispatch(startLoading())
    getAllRequest().then(response => {
      dispatch(stopLoading())
      setdata(response.data.requests.map(request => ({
        ...request,
        document: <a href={`${BACKEND_URL}${request.document}`} target="_blank">{request.document.split('/')[3]}</a>
      })))
    })
  }, [])

  return (
    <Container fluid className='full-scr-con'>
      <Row className='pt-28'>
        <Col>
          <h1 className='pl-10'>School Open Request</h1>
        </Col>
        <Col className='justify-center flex'>
          <SearchBar />
          <Button onClick={() => dispatch(openComfirmation({message: "Are you sure do you want to confirm?",action: handleConfirmed}))} className="mx-3" color="success">Confirmed</Button>
          <Button onClick={() => dispatch(openComfirmation({message: "Are you sure do you want to confirm?",action: handleConfirmDoc}))} className="mx-3" color="warning">ConfirmDoc</Button>
          <Button onClick={() => dispatch(openComfirmation({message: "Are you sure do you want to rejected?",action: handleRejected}))} color="danger">Rejected</Button>
        </Col>
      </Row>
      <Row className='pt-12 pl-10'>
        <DataTable
          onSelectedRowsChange={e => setselectRow(e.selectedRows)}
          columns={columns}
          data={data}
          selectableRows
        />
      </Row>
      <SendNoti toggle={() => setisOpen(false)} isOpen={isOpen} label="Feedback" />
    </Container>
  )
}

export default SchoolOpenRequest