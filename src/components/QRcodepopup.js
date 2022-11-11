import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

const QRcodepopup = ({...args}) => {
  return (
    <Modal {...args} centered>
        <ModalHeader>Scan QR เพื่อชำระเงิน</ModalHeader>
        <ModalBody>
            <img className="Qrcode-popup mx-auto" width="300px" src={require("../img/qrcode.png")}/>
        </ModalBody>
        <ModalFooter className='Qr-footer'>
            <h6>บัญชี: นางสาวสวยจัง ฮู้</h6>
            <h6>จำนวนเงิน ฿XXXXX</h6>
            <h5>ชำระเงินภายใน 0000 นาที</h5>
        </ModalFooter>
    </Modal>
  )
}

export default QRcodepopup