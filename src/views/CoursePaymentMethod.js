import React, { useState } from 'react'
import { Button, Container } from 'reactstrap'
import PaymentCardstatic from '../components/PaymentCardstatic'
import QRcodepopup from '../components/QRcodepopup'

const CoursePaymentMethod = () => {
  const [isOpen, setisOpen] = useState(false)
  return (
    <div className='pt-20'>
        <PaymentCardstatic/>
        <Container className='payment-method'>
            <h4>Payment Methods</h4>
            <div className='bank-detail'>
                <img onClick={() => setisOpen(true)} classroom="Qrcode" width="100px" src={require("../img/qrcode.png")}/>
                <QRcodepopup toggle={() => setisOpen(false)} isOpen={isOpen}/>
                <div className='bank-account'>
                  <h5>Bank SCB</h5>
                  <h5>เลขบัญชี XXX-XXXXXX-XX</h5>
                  <h5>นางสาวสวยจัง ฮู้</h5>
                </div>
            </div>
            <div>
                <h4>Upload Payment Receipt</h4>
            </div>
        </Container>
        <div className='enrolled-btn-row'>
          <Button className='enrolled-btn' color='primary' size='lg'>Enrolled</Button>
        </div>
    </div>
  )
}

export default CoursePaymentMethod