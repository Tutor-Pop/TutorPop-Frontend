import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'
import { AllClassroomsContext } from '../views/ClassroomManage';
import { deleteManyRooms, getAllRooms } from '../services/room.service';

const RemoveClassrooms = ({ schoolid }) => {

  const [modal, setModal] = useState(false);

  const [ allClassrooms, setAllClassrooms, checkedClassrooms, setCheckedClassrooms ] = useContext(AllClassroomsContext)

  const toggle = () => setModal(!modal);

  const handleSubmit = async (e) => {
    e.preventDefault()

    const IdBody = {
      rooms_id : checkedClassrooms
    } 
    setCheckedClassrooms([])
    toggle()
    await deleteManyRooms(schoolid, IdBody)
    const response = await getAllRooms(schoolid)
    setAllClassrooms(response.data.result)
  }
  return (
    <div>
      <Button onClick={toggle} color='danger' className='remove-classroom-btn'>
        <FontAwesomeIcon icon={faTrashCan} /> Remove Classrooms
      </Button>
      <Modal isOpen={modal} toggle={toggle} centered={true}>
        <ModalHeader toggle={toggle}>Confirmation</ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <Container>
              <h5>{checkedClassrooms.length} Classrooms will be delete. Are you sure?</h5>
              {/* {checkedClassrooms.map(roomId => (
                <p>{roomId}</p>
              ))} */}
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button type='submit' color="danger">
              Remove Classrooms
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  )
}

export default RemoveClassrooms