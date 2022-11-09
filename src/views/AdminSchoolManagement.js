import React from 'react'
import { Button, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Row } from 'reactstrap'
import SearchBar from '../components/SearchBar'
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const columns = [
    {
        name: 'School: Name (A-Z)',
        selector: row => row.school,
        sortable: true,
    },
    {
        name: 'School owner: Default',
        selector: row => row.owner,
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

const data = [
    {
        school: 'how to react',
        owner: 'KU',
        date: '11/9/2565',
        active: '11/10/2565',
        feedback: <Button><FontAwesomeIcon icon={faPaperPlane}/></Button>
    },
    {
      school: 'how to unity',
      owner: 'CU',
      date: '10/8/2565',
      active: '10/19/2565',
      feedback: <Button><FontAwesomeIcon icon={faPaperPlane}/></Button>
    },
    {
      school: 'math',
      owner: 'GU',
      date: '9/4/2565',
      active: '9/30/2565',
      feedback: <Button><FontAwesomeIcon icon={faPaperPlane}/></Button>
    },
    {
      school: 'Basic Dota 2',
      owner: 'Top Market',
      date: '10/12/2565',
      active: '10/18/2565',
      feedback: <Button><FontAwesomeIcon icon={faPaperPlane}/></Button>
    },
    {
      school: 'Valorant 101',
      owner: 'Caltex',
      date: '11/19/2565',
      active: '11/23/2565',
      feedback: <Button><FontAwesomeIcon icon={faPaperPlane}/></Button>
    },
]


const AdminSchoolManagement = () => {
  return (
    <Container fluid className='full-scr-con'>
      <Row className='pt-28'>
        <Col>
          <h1 className='pl-10'>School Management</h1>
        </Col>
        <Col className='justify-center flex'>
          <SearchBar/>
        </Col>
      </Row>
      <Row>
        <Col className='justify-end flex mr-20 pt-12'>
          <Button color='danger' className='ban-btn'><p><FontAwesomeIcon icon={faBan}/> ban school </p></Button>
        </Col>
      </Row>
      <Row className='pl-10'>
        <DataTable
            columns={columns}
            data={data}
            selectableRows
        />
      </Row>
    </Container>
  )
}

export default AdminSchoolManagement