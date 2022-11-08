import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux';
import { acceptConfirmation, closeConfirmation } from '../redux/confirmation.reducer';

const RemoveClassrooms = ({ }) => {

  const confirmation = useSelector(state => state.confirmation)
  const dispatch = useDispatch()
  
  return (
    <div>
      <Modal isOpen={confirmation.open} centered={true}>
        <ModalHeader>Confirmation</ModalHeader>
        <Form>
          <ModalBody>
            <Container>
              <h5>{confirmation.message}</h5>
              {/* {checkedClassrooms.map(roomId => (
                <p>{roomId}</p>
              ))} */}
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => dispatch(acceptConfirmation())} type='submit' color="primary">
              Yes
            </Button>{' '}
            <Button onClick={() => dispatch(closeConfirmation())} color="danger">
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  )
}

export default RemoveClassrooms