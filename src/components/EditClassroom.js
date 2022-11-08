import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button, Col, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';

import {ReactComponent as EditIcon} from '../img/edit.svg'
import { getAllRooms, updateRoom } from '../services/room.service';
import { AllClassroomsContext } from '../views/ClassroomManage';

const EditClassroom = ({ room }) => {

  const dispatch = useDispatch()
  const [modal, setModal] = useState(false);

  const [allClassrooms, setAllClassrooms] = useContext(AllClassroomsContext)

  const toggle = () => setModal(!modal);

  const handleSubmit = async (e) => {
    e.preventDefault()

    const classroom_body = {
      room_name: e.target.room_name.value ? e.target.room_name.value : null,
      maximum_seat: e.target.maximum_seat.value ? e.target.maximum_seat.value : null,
      description: e.target.description.value ? e.target.description.value : null
    }

    toggle()
    // console.log(room.school_id_id, room.room_id)
    await updateRoom(room.school_id_id, room.room_id, classroom_body)
    const response = await getAllRooms(room.school_id_id)
    setAllClassrooms([...response.data.result])

  }

  return (
    <div>
      <EditIcon className='classroom-edit-btn' onClick={toggle} style={{ margin:'0 auto', width: '25px'}}/>
      <Modal isOpen={modal} toggle={toggle} centered={true}>
        <ModalHeader toggle={toggle}>Edit Classroom</ModalHeader>
        <Form onSubmit={handleSubmit}>
        <ModalBody>
          <Container>
              <FormGroup>
                <Row>
                  <Label for='room_name'>Room Number</Label>
                  <Col>
                    <Input 
                      id='room_name' 
                      type='txt'
                      defaultValue={room.room_name}
                    />
                  </Col>
                </Row>
                <Row>
                  <Label for='maximum_seat'>Maximum Students</Label>
                  <Col>
                    <Input 
                      id='maximum_seat' 
                      type='number'
                      defaultValue={room.maximum_seat}
                    />
                  </Col>
                </Row>
                <Row>
                  <Label for='description'>Description (ex. floor number, building)</Label>
                    <Col>
                      <Input
                        id='description'
                        type='txt'
                        defaultValue={room.description}
                        required={false}
                      />
                    </Col>
                </Row>
              </FormGroup>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type='submit'>
            Edit Room
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

export default EditClassroom