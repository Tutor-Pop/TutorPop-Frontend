import React from 'react'
import { Button, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Row } from 'reactstrap'
import SearchBar from '../components/SearchBar'
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

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
        name: 'Document',
        selector: row => row.document,
    },
    {
      name: 'Pay Slip',
      selector: row => row.slip,
    },
    {
      name: 'Date: Latest',
      selector: row => row.date,
      sortable: true,
    },
    {
      name: 'Send feedback',
      selector: row => row.feedback,
    },
];

const data = [
    {
        school: 'KU',
        owner: 'Earth',
        document: <a href='#'>Earth.pdf</a>,
        slip: <a href='#'>Earth.png</a>,
        date: '11/9/2565',
        feedback: <Button><FontAwesomeIcon icon={faPaperPlane}/></Button>
    },
    {
        school: 'CU',
        owner: 'Kanon',
        document: <a href='#'>Kanon.pdf</a>,
        slip: <a href='#'>Kanon.png</a>,
        date: '11/10/2565',
        feedback: <Button><FontAwesomeIcon icon={faPaperPlane}/></Button>
    },
    {
        school: 'BU',
        owner: 'View',
        document: <a href='#'>View.pdf</a>,
        slip: <a href='#'>View.png</a>,
        date: '11/11/2565',
        feedback: <Button><FontAwesomeIcon icon={faPaperPlane}/></Button>
    },
    {
        school: 'RU',
        owner: 'Fai',
        document: <a href='#'>Fai.pdf</a>,
        slip: <a href='#'>Fai.png</a>,
        date: '11/25/2565',
        feedback: <Button><FontAwesomeIcon icon={faPaperPlane}/></Button>
    },
    {
        school: 'TU',
        owner: 'Tul',
        document: <a href='#'>Tul.pdf</a>,
        slip: <a href='#'>Tul.png</a>,
        date: '11/7/2565',
        feedback: <Button><FontAwesomeIcon icon={faPaperPlane}/></Button>
    },
]


const OpenSchoolRequest = () => {
  return (
    <Container fluid className='full-scr-con'>
      <Row className='pt-28'>
        <Col>
          <h1 className='pl-10'>School Open Request</h1>
        </Col>
        <Col className='justify-center flex'>
          <SearchBar/>
        </Col>
      </Row>
      <Row className='pt-12 pl-10'>
        <DataTable
            columns={columns}
            data={data}
            selectableRows
        />
      </Row>
    </Container>
  )
}

export default OpenSchoolRequest