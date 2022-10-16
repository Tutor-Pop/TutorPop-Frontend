import React, { useState } from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'

const AddClassroom = ({ school }) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle} color='primary' className='add-classroom-btn'>Add Classroom</Button>
      <Modal isOpen={modal} toggle={toggle} centered={true}>
        <ModalHeader toggle={toggle}>Add New Classroom</ModalHeader>
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
                    />
                  </Col>
                </Row>
                <Row>
                  <Label for='max-seat'>Maximum Students</Label>
                  <Col>
                    <Input 
                      id='max-seat' 
                      type='number'
                    />
                  </Col>
                </Row>
              </FormGroup>
            </Form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Create Room
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default AddClassroom