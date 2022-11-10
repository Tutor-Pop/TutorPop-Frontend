import React, { useState } from 'react'
import SearchTeacherBar from '../components/SearchTeacherBar'
import UserShortChip from '../components/UserShortChip'
import Chip from "@material-ui/core/Chip"
import Avatar from "@material-ui/core/Avatar"
import { Col, Container, Row } from 'reactstrap'

const TeacherManagement = () => {
  const id = localStorage.getItem("account_id");

  const handleDelete = (event) => {
    console.log('gee');
  };

  return (
    <div className='teacher'>
        <div className='teacher-man-title'>
            <h1>Teacher Management</h1>
            <h3 className='mb-10 border-b-2 border-zinc-400 text-right' w>school name</h3>
            <h3 className='invite mb-5'>Invite Teacher</h3>
            <SearchTeacherBar/>
        </div>
        <div className='invite-teacher'>
          <Container>
            <Row xs={1} sm={3} md={5} >
              <Col className='justify-center  pt-8'>
                <Chip className='chip w-30' color="primary" onDelete={handleDelete} avatar={<Avatar  sx={{ width: 100, height: 100 }} src="/static/images/avatar/1.jpg" />} label="tong" size="medium"/>
              </Col>
              <Col className='justify-center  pt-8'>
                <Chip className='chip w-30'color="primary" onDelete={handleDelete} avatar={<Avatar src="/static/images/avatar/1.jpg" />} label="noooooo" />
              </Col>
              <Col className='justify-center  pt-8'>
                <Chip className='chip w-30' color="primary" onDelete={handleDelete} avatar={<Avatar src="/static/images/avatar/1.jpg" />} label="mowhannnn" />
              </Col>
              <Col className='justify-center  pt-8'>
                <Chip className='chip w-30' color="primary" onDelete={handleDelete} avatar={<Avatar src="/static/images/avatar/1.jpg" />} label="tong" />
              </Col>
              <Col className='justify-center  pt-8'>
                <Chip className='chip w-30' color="primary" onDelete={handleDelete} avatar={<Avatar src="/static/images/avatar/1.jpg" />} label="tong" />
              </Col>
            </Row>
          </Container>
        </div>

        <div className='inviteteacher-btn'>
          <button className='save-btn'>Save</button>
          <button className='cancel-btn'>Cancel</button>
        </div>
    </div>
  )
}

export default TeacherManagement