import React, { useEffect, useState } from 'react'
import { Button, Container } from 'reactstrap'
import PaymentCard from '../components/PaymentCard'
import QRcodepopup from '../components/QRcodepopup'
import Upload from '../components/Upload'
//กด enrolled
const CoursePaymentMethod = () => {
  const [isOpen, setisOpen] = useState(false)

  return (
    <div className='pt-20'>
      {/* <PaymentCard /> */}
      <Container className='payment-method'>
        <h4>Payment Methods</h4>
        <div className='bank-detail'>
          <img onClick={() => setisOpen(true)} classroom="Qrcode" width="100px" src={require("../img/qrcode.png")} />
          <QRcodepopup toggle={() => setisOpen(false)} isOpen={isOpen} />
          <div className='bank-account'>
            <h5>Bank SCB</h5>
            <h5>เลขบัญชี XXX-XXXXXX-XX</h5>
            <h5>นางสาวสวยจัง ฮู้</h5>
          </div>
        </div>
        <div>
          <h4>Upload Payment Receipt</h4>
          <Upload />
        </div>
      </Container>
      <div className='enrolled-btn-row'>
        <Button className='enrolled-btn' color='primary' size='lg'>Enrolled</Button>
      </div>
    </div>
  )
}

export default CoursePaymentMethod