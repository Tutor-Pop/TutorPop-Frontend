import React , { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Address } from '../constants/location.constant'
import Select from 'react-select'
import { getSchool, updateSchool } from '../services/school.service'

const SchoolEditing = () => {
  const [provinceSelect, setProvinceSelect] = useState('');
  const [districtSelect, setDistrictSelect] = useState('');
  const [subdistrictSelect, setSubDistrictSelect] = useState('')
  const [addressSelect, setAddressSelect] = useState('')
  const [nameSelect, setNameSelect] = useState('')
  const [descriptionSelect, setDescriptionSelect] = useState('')
  const [postSelect, setPostSelect] = useState('')
  const [disable, setenable] = useState({ district: true, subdistrict: true })
  const [details,setDetails] = useState([])
  const [result,setResult] = useState({})
  const { schoolid } = useParams()


  useEffect(()=>{
    getSchool(schoolid).then(
      response => setDetails(response.data.result)
    )
  },[])

  useEffect(()=>{
    console.log(details);
  },[details])

  useEffect(()=>{
    console.log(result);
  },[result])

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

  const handleClick = (e) => {
    e.preventDefault()
    console.log('clicked')
    console.log('schoolid',schoolid)
    console.log('name',nameSelect)
    console.log('description',descriptionSelect)
    console.log('addr_description',addressSelect)
    console.log('sub-des',subdistrictSelect)
    console.log('district',districtSelect)
    console.log('province',provinceSelect)
    console.log('post',postSelect)
    let formData = new FormData()
    formData.append("school_id", schoolid);
    formData.append("name", nameSelect);
    formData.append("description", descriptionSelect);
    formData.append("addr_description", addressSelect);
    formData.append("sub_district", subdistrictSelect);
    formData.append("district", districtSelect);
    formData.append("province", provinceSelect);
    formData.append("postal_code", postSelect);
    updateSchool(schoolid,formData);
  }


  return (
    <div className='school-editing'>
      <Form>
        <Container className='school-editing-container'>
          <Row className='school-editing-box'>
            <Row className='ps-0 pe-0'>
              <h1 className='mb-10'>School Editing</h1>
            </Row>
            <Row className='school-editing-input'>
              <Label for='school-name'>
                Tutoring School Name<span className="required-star">*</span>
              </Label>
              <Input id='school-name'
                      className='mb-3'
                     type='text' 
                     defaultValue={details.name}
                     required={true}
                     onChange = { e => setNameSelect(e.target.value)}
              />
              <Label for='school-description'>
                School Description
              </Label>
              <Input id='school-description' 
                     className='mb-3' 
                     type='textarea'
                     defaultValue={details.description}
                     rows='5'
                     onChange = { e => setDescriptionSelect(e.target.value)}
              />
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
                      defaultValue={{value: details.province, label: details.province}}
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
                      // isDisabled={disable.district}
                      id='school-district'
                      required={true}
                      defaultValue={{value:details.district,label:details.district}}
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
                      // isDisabled={disable.subdistrict}
                      id='school-subdistrict'
                      type='select'
                      required={true}
                      defaultValue={{value:details.sub_district,label:details.sub_district}}
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
                    <Label for='address-description'>
                      Address Description
                    </Label>
                    <Input
                      id='school-road'
                      type='text'
                      defaultValue={details.addr_description}
                      onChange = { e => setAddressSelect(e.target.value)}
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
                        defaultValue={details.postal_code}
                        onChange = { e => setPostSelect(e.target.value)}
                    />
                  </Col>
                </Row>
              </FormGroup>
            </Row>
            </Row>
            <Row className="justify-evenly mt-4">
              <Col>
                <Link className='link-btn-text' to={`/school/${schoolid}/edit`}>
                  <Button className="edit-save-btn" type="submit" color="primary" size="lg" onClick={handleClick}>
                    Save
                  </Button>
                </Link>
              </Col>
              <Col>
                <Link className='link-btn-text' to={`/school-manage/${schoolid}`}>
                  <Button className='edit-cancel-btn' color='secondary' size='lg'>
                    Cancel
                  </Button>
                </Link>
              </Col>
            </Row> 
          </Row>
        </Container>
      </Form>
    </div>
  )
}

export default SchoolEditing