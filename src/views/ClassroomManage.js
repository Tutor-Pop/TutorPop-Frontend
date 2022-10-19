import React, { createContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row, Table } from 'reactstrap';
import AddClassroom from '../components/AddClassroom';
import EditClassroom from '../components/EditClassroom';
import { getAllRooms } from '../services/room.service'
import { getSchool } from '../services/school.service';

export const AllClassroomsContext = createContext();

const ClassroomManage = () => {
  
  const { schoolid } = useParams();

  const [allClassrooms, setAllClassrooms] = useState([]);
  const [school, setSchool] = useState({})


  useEffect(() => {
    getAllRooms(schoolid).then(
      response => setAllClassrooms([...response.data.result]) 
    )
    getSchool(schoolid).then(
      response => setSchool({...response.data.result})
    )
  }, [])

  // useEffect(() => {
  //   console.log(allClassrooms)
  // }, [allClassrooms])


  return (
    <div className='classroom-manage'>
      <Container className='pt-5'>
        <Row>
          <h1>
            Classroom management
          </h1>
          <h4>{school.name}</h4>
          <Col>
            <AllClassroomsContext.Provider value={[ allClassrooms, setAllClassrooms ]}>
              <AddClassroom allClassrooms={allClassrooms} schoolid={schoolid}/>
            </AllClassroomsContext.Provider>
          </Col>
        </Row>
        <Table className='classroom-table mt-3'>
          <thead className='classroom-table-txt classroom-table-head'>
            <tr>
              <th><h5>Room Name</h5></th>
              <th><h5>Description</h5></th>
              <th><h5>Maximum Students</h5></th>
              <th><h5>Editing</h5></th>
            </tr>
          </thead>
          <tbody>
            { 
              allClassrooms.map(
                (room) => (
                <tr className='classroom-table-txt' key={room.room_id}>
                  <td><h5>{room.room_name}</h5></td>
                  <td><h5>{room.description}</h5></td>
                  <td><h5>{room.maximum_seat}</h5></td>
                  <td>
                    <EditClassroom room={room}/>
                  </td>
                </tr>
                )
              )
            }
          </tbody>
        </Table>
      </Container>
      
    </div>
  )
}

export default ClassroomManage