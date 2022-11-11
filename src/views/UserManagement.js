import { Button, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Row } from 'reactstrap'
import SearchBar from '../components/SearchBar'
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import SendNoti from "../components/SendNoti";
import React, { useState } from "react"

const columns = [
    {
        name: 'User: Name (A-Z)',
        selector: row => row.user,
        sortable: true,
    },
    {
        name: 'Created date: Latest',
        selector: row => row.date,
        sortable: true,
    },
    {
      name: 'Last active: Latest',
      selector: row => row.active,
      sortable: true,
    },
    {
        name: 'Send feedback',
        selector: row => row.feedback,
    },
];

const UserManagement = () => {
  const [isOpen, setisOpen] = useState(false)
  const data = [
    {
        user: 'Kanon',
        date: '11/9/2565',
        active: '11/10/2565',
        feedback: <Button onClick={() => setisOpen(true)}><FontAwesomeIcon icon={faPaperPlane}/></Button>
    },
    {
        user: 'Earth',
        date: '11/9/2565',
        active: '11/15/2565',
        feedback: <Button onClick={() => setisOpen(true)}><FontAwesomeIcon icon={faPaperPlane}/></Button>
    },
    {
        user: 'View',
        date: '10/4/2565',
        active: '10/18/2565',
        feedback: <Button onClick={() => setisOpen(true)}><FontAwesomeIcon icon={faPaperPlane}/></Button>
    },
    {
        user: 'Nina',
        date: '6/13/2565',
        active: '7/10/2565',
        feedback: <Button onClick={() => setisOpen(true)}><FontAwesomeIcon icon={faPaperPlane}/></Button>
    },
    {
        user: 'Nun',
        date: '9/9/2565',
        active: '10/1/2565',
        feedback: <Button onClick={() => setisOpen(true)}><FontAwesomeIcon icon={faPaperPlane}/></Button>
    },
    {
        user: 'Fai',
        date: '1/7/2565',
        active: '11/29/2565',
        feedback: <Button onClick={() => setisOpen(true)}><FontAwesomeIcon icon={faPaperPlane}/></Button>
    },
    {
        user: 'Tong',
        date: '2/7/2565',
        active: '3/10/2565',
        feedback: <Button onClick={() => setisOpen(true)}><FontAwesomeIcon icon={faPaperPlane}/></Button>
    },
  ]
  return (
    <Container fluid className='full-scr-con'>
      <Row className='pt-28'>
        <Col>
          <h1 className='pl-10'>User Management</h1>
        </Col>
        <Col className='justify-center flex'>
          <SearchBar/>
        </Col>
      </Row>
      <Row>
        <Col className='justify-end flex mr-20 pt-12'>
          <Button color='danger' className='ban-btn'><p><FontAwesomeIcon icon={faBan}/> ban user </p></Button>
        </Col>
      </Row>
      <Row className='pl-10'>
        <DataTable
            columns={columns}
            data={data}
            selectableRows
        />
      </Row>
      <SendNoti toggle={() => setisOpen(false)} isOpen={isOpen} label="Feedback"/>
    </Container>
  )
}

export default UserManagement