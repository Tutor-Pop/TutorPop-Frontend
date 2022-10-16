import React, { useState } from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';

import {ReactComponent as EditIcon} from '../img/edit.svg'

const EditClassroom = ({ room }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <EditIcon className='classroom-edit-btn' onClick={toggle} style={{ margin:'0 auto', width: '25px'}}/>
      <Modal isOpen={modal} toggle={toggle} centered={true}>
        <ModalHeader toggle={toggle}>Edit Classroom</ModalHeader>
        <ModalBody>
          <Container>
            <Form>
              <FormGroup>
                <Row>
                  <Label for='max-seat'>Room Number</Label>
                  <Col>
                    <Input 
                      id='room-number' 
                      type='txt'
                      defaultValue={room.room_name}
                    />
                  </Col>
                </Row>
                <Row>
                  <Label for='max-seat'>Maximum Students</Label>
                  <Col>
                    <Input 
                      id='max-seat' 
                      type='number'
                      defaultValue={room.maximum_seat}
                    />
                  </Col>
                </Row>
              </FormGroup>
            </Form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Edit Room
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default EditClassroom