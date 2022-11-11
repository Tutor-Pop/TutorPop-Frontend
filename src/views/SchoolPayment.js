import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
import { getRequestID, uploadPaymentSlipForRequest } from '../services/request.service';
import { getSchool } from '../services/school.service';
import { useDispatch } from 'react-redux';
import { startLoading, stopLoading } from '../redux/loading.reducer';

const SchoolPayment = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { schoolid } = useParams()

  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [schoolData, setSchoolData] = useState({})
  const [requestID, setRequestID] = useState('')


  const imageOnchangeHandler = (e) => {
    setImages([...e.target.files]);
  }

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((img) => newImageUrls.push(URL.createObjectURL(img)))
    setImageURLs(newImageUrls)
  }, [images])

  useEffect(() => {
    toast.error('You haven\’t paid the subscription for this school \nPlease pay to gain the access' , {
      position: toast.POSITION.TOP_CENTER,
      theme: "colored",
      hideProgressBar: true,
      closeOnClick: false,
      draggable: false
    })
  }, [])

  useEffect(() => {
    dispatch(startLoading())
    getSchool(schoolid).then((response) => {
      setSchoolData(response.data.result)
      return getRequestID(schoolid)
    }).then(
      (response) => {
        dispatch(stopLoading())
        setRequestID(response.data.request_id)
      }
    ).catch( err => dispatch(stopLoading()))
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault()
    // console.log(e.target['upload-slip'].files[0])
    let formData = new FormData()
    formData.append('payment_pic', e.target['upload-slip'].files[0])
    dispatch(startLoading())   
    await uploadPaymentSlipForRequest(requestID, formData)
    dispatch(stopLoading())
    navigate(`/school/${schoolid}/pending`)
  }

  return (
    <div className='school-payment'>
      <Form onSubmit={submitHandler}>
        <Container className='register'>
          <Row className='register-box'>
            <Row className='mb-5'>
              <h1>School Registering Payment</h1>
              <p>{schoolData.name}</p>
            </Row>
            <Row className='mb-5'>
              <h4>Payment Methods</h4>
              <Col xs={3}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Rickrolling_QR_code.png'></img>
              </Col>
              <Col xs={9}>
                <p>Bank Name</p>
                <p>Account Number: 0-00-000-000-0</p>
                <p>JuabJarb Development</p>
              </Col>
            </Row>
            <Row>
              <FormGroup>
                <Label for='upload-slip'>
                  Upload Payment Slip
                </Label>
                <Input 
                  id='upload-slip'
                  type='file'
                  required={true}
                  onChange={imageOnchangeHandler}
                />
              </FormGroup>
            </Row>
            <Row>
              { imageURLs.map( (url, idx) => <img id={idx} src={url}/>) }
            </Row>
            <Row className="justify-evenly mt-5">
              <Col>
                <Button className="school-register-btn" type="submit" color="primary" size="lg">
                  Register School
                </Button>
              </Col>
              <Col>
                <Link className='link-btn-text' to={`/search`}>
                  <Button className='edit-cancel-btn' color='secondary' size='lg'>
                    Cancel
                  </Button>
                </Link>
              </Col>
            </Row>
            <Row>
              <p className='reply-text mt-2'>We will verify within 48 hours. Please wait for the reply.</p>
            </Row>
          </Row>
        </Container>
      </Form>
    </div>
  )
}

export default SchoolPayment