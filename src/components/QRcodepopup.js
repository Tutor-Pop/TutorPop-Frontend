import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

const QRcodepopup = ({course,...args}) => {
  return (
    <Modal {...args} centered>
        <ModalHeader>Scan QR เพื่อชำระเงิน</ModalHeader>
        <ModalBody>
            <img className="Qrcode-popup mx-auto" width="300px" src={require("../img/qrcode.png")}/>
        </ModalBody>
        <ModalFooter className='Qr-footer'>
            <h6>{course.payment_method_text}</h6>
        </ModalFooter>
    </Modal>
  )
}

export default QRcodepopup