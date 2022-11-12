import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Select from 'react-select'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Address } from '../constants/location.constant'
import { startLoading, stopLoading } from '../redux/loading.reducer'
import { createRequest } from '../services/request.service'
import { createSchool } from '../services/school.service'

const SchoolRegister = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const [provinceSelect, setProvinceSelect] = useState('');
  const [districtSelect, setDistrictSelect] = useState('');
  const [subdistrictSelect, setSubDistrictSelect] = useState('')

  const [upload,setupload] = useState(null)

  const [disable, setenable] = useState({ district: true, subdistrict: true })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    let schoolFormData = new FormData()
    schoolFormData.append('name', e.target['school-name'].value)
    schoolFormData.append('description', e.target['school-description'].value)
    schoolFormData.append('addr_description', (e.target['school-road'].value + ' ' + e.target['school-village'].value))
    schoolFormData.append('sub_district', subdistrictSelect)
    schoolFormData.append('district', districtSelect)
    schoolFormData.append('province', provinceSelect)
    schoolFormData.append('postal_code', e.target['school-postalcode'].value)
    schoolFormData.append('owner_id', localStorage.getItem('account_id'))
    
    // for (let [key, value] of schoolFormData) {
    //   console.log(`${key}: ${value}`)
    // }
    dispatch(startLoading())
    createSchool(schoolFormData)
    .then(response => {
      const schoolID = response.data.school_id

      let requestFormData = new FormData()
      requestFormData.append('account_id', localStorage.getItem("account_id"));
      requestFormData.append('school_id', schoolID);
      requestFormData.append('document', e.target['school-verify-doc'].files[0]);
      // console.log(response)
      return createRequest(requestFormData) 
    })
    .then((response) => {
      dispatch(stopLoading())
      navigate(`/my-school`)
    })
    .catch(err => {
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
                {/* <Label for='school-verify-doc'>
                  Upload School Verification Document<span className='required-star'>*</span>
                </Label>
                <Input
                  id='school-verify-doc'
                  type='file'
                  required={true}
                  onChange={e => setupload(e.target.files[0])}
                /> */}
                <label for="school-verify-doc">Select a file:</label>
                <input required type="file" id="school-verify-doc" name="school-verify-doc"/>
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