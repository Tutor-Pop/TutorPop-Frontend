import React from 'react'
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import Select from 'react-select'

const SendNoti = ({...args}) => {

  return (
    <Modal {...args} centered>
        <ModalHeader>{args.label}</ModalHeader>
        <ModalBody className='Noti-body'>
            <div className='send-to flex'>
                <label for='name'>to:</label>
                <Select
                    isMulti
                    name="colors"
                    options={[{ value: 'ocean', label: 'Ocean', isFixed: true },
                    { value: 'blue', label: 'Blue', isDisabled: true },
                    { value: 'purple', label: 'Purple'},
                    { value: 'red', label: 'Red', isFixed: true },
                    ]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                     />
            </div>
            <Input type='textarea' className='noti-body'/>
        </ModalBody>
        <ModalFooter className='Noti-footer'>
            <Button className='save-btn' color="primary">Send</Button>
        </ModalFooter>
    </Modal>
  )
}
export default SendNoti