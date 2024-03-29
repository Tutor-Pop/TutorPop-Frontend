import React, { createContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { Col, Container, Input, Row, Table } from 'reactstrap';
import AddClassroom from '../components/AddClassroom';
import BackButton from '../components/BackButton';
import EditClassroom from '../components/EditClassroom';
import RemoveClassrooms from '../components/RemoveClassrooms';
import { startLoading, stopLoading } from '../redux/loading.reducer';
import { getAllRooms } from '../services/room.service'
import { getSchool } from '../services/school.service';

export const AllClassroomsContext = createContext();

const ClassroomManage = () => {
  
  const { schoolid } = useParams();
  const dispatch = useDispatch();

  const [allClassrooms, setAllClassrooms] = useState([]);
  const [checkedClassrooms, setCheckedClassrooms] = useState([]);
  const [school, setSchool] = useState({});

  useEffect(() => {
    dispatch(startLoading())
    getAllRooms(schoolid).then((response) => {
        setAllClassrooms([...response.data.result])
        return getSchool(schoolid)
      }
    ).then((response) => {
        dispatch(stopLoading())
        setSchool({...response.data.result})
      }
    )
  }, [])

  const handleBoxCheck = (e) => {
    if (e.target.checked) {
      setCheckedClassrooms([...checkedClassrooms, Number(e.target.value)])
      return
    }
    const removed = checkedClassrooms
                      .filter(id => id !== Number(e.target.value))
    setCheckedClassrooms(removed)
  }


  return (
    <AllClassroomsContext.Provider value={[ allClassrooms, 
                                            setAllClassrooms, 
                                            checkedClassrooms,
                                            setCheckedClassrooms ]}>
    <div className='classroom-manage'>
      <Container className='pt-5'>
        <BackButton>Back</BackButton>
        <Row>
          <h1>
            Classroom management
          </h1>
          <h4>{school.name}</h4>
            <div className='classroom-manage-btns'>
              <AddClassroom allClassrooms={allClassrooms} schoolid={schoolid}/>
              <RemoveClassrooms schoolid={schoolid}/>
            </div>
        </Row>
        <Table className='classroom-table mt-3'>
          <thead className='classroom-table-txt classroom-table-head'>
            <tr>
              <th></th>
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
                  <th>
                    <Input 
                      type='checkbox' 
                      defaultChecked={false} 
                      onChange={handleBoxCheck} 
                      value={room.room_id}
                    />
                  </th>
                  <td><h5>{room.room_name}</h5></td>
                  <td><h5>{room.description}</h5></td>
                  <td><h5>{room.maximum_seat}</h5></td>
                  <td>
                    <EditClassroom room={room} schoolid={schoolid}/>
                  </td>
                </tr>
                )
                )
              }
          </tbody>
        </Table>
      </Container>
      
    </div>
    </AllClassroomsContext.Provider>
  )
}

export default ClassroomManage