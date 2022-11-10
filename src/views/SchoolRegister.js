import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Address } from '../constants/location.constant'
import { startLoading, stopLoading } from '../redux/loading.reducer'
import { createRequest } from '../services/request.service'

const SchoolRegister = () => {

  const dispatch = useDispatch()

  const [provinceSelect, setProvinceSelect] = useState('');
  const [districtSelect, setDistrictSelect] = useState('');
  const [subdistrictSelect, setSubDistrictSelect] = useState('')

  const [upload,setupload] = useState(null)

  const [disable, setenable] = useState({ district: true, subdistrict: true })

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('account_id', localStorage.getItem("account_id"));
    formData.append('school_id', 1);
    formData.append('document', e.target['school-verify-doc'].files[0]);

    dispatch(startLoading())
    createRequest(formData).then(response => {
      dispatch(stopLoading())
      console.log(response)
    }).catch(err => {
      console.log(err)
      dispatch(stopLoading())
    })

    // for (var pair of formData.entries()) {
    //   console.log('FD',pair[0]+ ', ' + pair[1]);
    // }
    // formData.append("account_id", 8)
    // formData.append("school_id", 1)
    // formData.append("document", e.target['school-verify-doc'])
    // formData.append("payment_pic", e.target['school-verify-doc'])
    
    // axios.post('http://localhost:8000/api/requests', formData, {
    //   headers: {
    //     'content-type': 'multipart/form-data',
    //   }
    // }).then((response) => {
    //   console.log(response.data)
    // }).catch((err) => {
    //   console.log(err)
    // })
  }

  // useEffect(()=>{
  //   console.log("PS",provinceSelect)
  // },[provinceSelect])

  const onChangeProvince = (e) => {
    setProvinceSelect(e.value)
    setenable({ district: false, subdistrict: true })
    setDistrictSelect('')
    setSubDistrictSelect('')
  }

  const onChangeDistrict = (e) => {
    setDistrictSelect(e.value)
    setenable({ district: false, subdistrict: false })
  }

  const onChangeSubdistrict = (e) => {
    setSubDistrictSelect(e.value)
  }

  return (
    <div className='school-register'>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Container className='register'>
          <Row className='register-box'>
            <Row>
              <h1 className='mb-10'>School Registering</h1>
            </Row>
            <Row>
              <FormGroup>
                <Label for='school-name'>
                  Tutoring School Name<span className='required-star'>*</span>
                </Label>
                <Input
                  id='school-name'
                  type='text'
                  required={true}
                />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label for='school-description'>
                  School Description
                </Label>
                <Input
                  id='school-description'
                  type='textarea'
                  rows='5'
                />
              </FormGroup>
            </Row>
            <Row>
              <h5 className='my-3'>School Address</h5>
              <FormGroup>
                <Row>
                  <Col>
                    <Label for='school-province'>
                      Province<span className="required-star">*</span>
                    </Label>
                    <Select
                      id='school-address'
                      value={{value: provinceSelect,label:provinceSelect }}
                      required={true}
                      onChange={e => onChangeProvince(e)}
                      options={
                        Object.keys(Address).map((province) => (
                          { value: province, label: province }
                        ))
                      }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Label for='school-district'>
                      District<span className="required-star">*</span>
                    </Label>
                    <Select
                    value={{value: districtSelect,label:districtSelect }}
                      isDisabled={disable.district}
                      id='school-district'
                      required={true}
                      defaultValue={''}
                      onChange={e => onChangeDistrict(e)}
                      options={disable.district ? [] :
                        Address[provinceSelect].map((el) => (
                          { value: el.district, label: el.district }
                        ))
                      }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Label for='school-subdistrict'>
                      Subdistrict<span className="required-star">*</span>
                    </Label>
                    <Select
                    value={{value: subdistrictSelect,label:subdistrictSelect }}
                      onChange={e => onChangeSubdistrict(e)}
                      isDisabled={disable.subdistrict}
                      id='school-subdistrict'
                      type='select'
                      required={true}
                      defaultValue={''}
                      options={disable.subdistrict ? [] : Address[provinceSelect]
                        .filter((value) => (value.district === districtSelect))[0].subdistrict
                        .map((subdist) => ({ value: subdist, label: subdist }))
                      }
                    />
                    {
                    }
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Label for='school-road'>
                      Road
                    </Label>
                    <Input
                      id='school-road'
                      type='text'
                    />
                  </Col>
                  <Col>
                    <Label for='school-village'>
                      Village
                    </Label>
                    <Input
                      id='school-village'
                      type='text'
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Label for='school-plotnumber'>
                      Plot Number<span className="required-star">*</span>
                    </Label>
                    <Input
                      id='school-plotnumber'
                      type='text'
                      required={true}
                    />
                  </Col>
                  <Col>
                    <Label for='school-postalcode'>
                      Postal Code<span className="required-star">*</span>
                    </Label>
                    <Input
                      id='school-postalcode'
                      type='number'
                      required={true}
                    />
                  </Col>
                </Row>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label for='school-verify-doc'>
                  Upload School Verification Document<span className='required-star'>*</span>
                </Label>
                <Input
                  id='school-verify-doc'
                  type='file'
                  required={true}
                  onChange={e => setupload(e.target.files[0])}
                />
              </FormGroup>
            </Row>
            <Row className="justify-evenly mt-5">
              <Col>
                {/* <Link className='link-btn-text' to={`/search`}> */}
                <Button className="school-register-btn" type="submit" color="primary" size="lg">
                  Register School
                </Button>
                {/* </Link> */}
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

export default SchoolRegister