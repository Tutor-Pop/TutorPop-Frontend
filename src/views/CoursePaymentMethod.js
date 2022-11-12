import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Container, Form, FormGroup } from 'reactstrap'
import PaymentCard from '../components/PaymentCard'
import QRcodepopup from '../components/QRcodepopup'
import Upload from '../components/Upload'
import { emitSuccess } from '../functions/toastify.function'
import { startLoading, stopLoading } from '../redux/loading.reducer'
import { getCourse } from '../services/course.service'
import { getResevationIdFromAccountCourse, uploadPaymentPicture } from '../services/reserveation.service'
//กด enrolled
const CoursePaymentMethod = () => {
  const [isOpen, setisOpen] = useState(false)
  const { courseid } = useParams()
  const account_id = localStorage.getItem('account_id')
  const [reservation_id,setreservation_id] = useState(0)
  const [course, setcourse] = useState({})
  const dispatch = useDispatch()
  const nevigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('payment_pic',e.target['receipt'].files[0])
    dispatch(startLoading())
    uploadPaymentPicture(reservation_id,formData).then(response => {
      dispatch(stopLoading())
      emitSuccess("Upload success!")
      nevigate('/my-reservation')
    })
  }

  useEffect(() => {
    dispatch(startLoading())
    getResevationIdFromAccountCourse(account_id,courseid).then(response => {
      setreservation_id(response.data.reservation_id)
      return getCourse(courseid)
    }).then(response => {
      dispatch(stopLoading())
      setcourse(response.data.result)
    })
  }, [])

  return (
    <div className='pt-20'>
      <PaymentCard details={course} />
      <Container className='payment-method'>
        <h4>Payment Methods</h4>
        <div className='bank-detail'>
          <img onClick={() => setisOpen(true)} classroom="Qrcode" width="100px" src={require("../img/qrcode.png")} />
          <QRcodepopup course={course} toggle={() => setisOpen(false)} isOpen={isOpen} />
          <div className='bank-account'>
            <h5>{course.payment_method_text}</h5>
          </div>
        </div>

        <Form onSubmit={e => handleSubmit(e)}>
          <FormGroup>

        <div>
          <h4>Upload Payment Receipt</h4>
          <Upload id='receipt'/>
        </div>
          </FormGroup>
        <div className='enrolled-btn-row'>
          <Button type="submit" className='enrolled-btn' color='primary' size='lg'>Enrolled</Button>
        </div>
        </Form>
      </Container>

    </div>
  )
}

export default CoursePaymentMethod