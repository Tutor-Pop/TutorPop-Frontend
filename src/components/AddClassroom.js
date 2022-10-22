import React, { useContext, useState } from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'
import { createRoom, getAllRooms } from '../services/room.service';
import { AllClassroomsContext } from '../views/ClassroomManage';

const AddClassroom = ({ schoolid }) => {

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
    await createRoom(schoolid, classroom_body)
    const response = await getAllRooms(schoolid)
    setAllClassrooms([...response.data.result])
      // window.location.reload()
  }

  return (
    <div>
      <Button onClick={toggle} color='primary' className='add-classroom-btn'>Add Classroom</Button>
      <Modal isOpen={modal} toggle={toggle} centered={true}>
        <ModalHeader toggle={toggle}>Add New Classroom</ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <Container>
                <FormGroup>
                  <Row>
                    <Label for='room_name'>Room Name</Label>
                    <Col>
                      <Input 
                        id='room_name' 
                        type='txt'
                        required={true}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Label for='maximum_seat'>Maximum Students</Label>
                    <Col>
                      <Input 
                        id='maximum_seat' 
                        type='number'
                        required={true}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Label for='description'>Description (ex. floor number, building)</Label>
                    <Col>
                      <Input
                        id='description'
                        type='txt'
                        required={false}
                      />
                    </Col>
                  </Row>
                </FormGroup>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button type='submit' color="primary">
              Create Room
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

export default AddClassroom