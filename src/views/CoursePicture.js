import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Button, Col, Form, Row } from 'reactstrap'
import '../App.css'
import Upload from '../components/Upload'
import { startLoading, stopLoading } from '../redux/loading.reducer'
import { getCourse, uploadCoursePicture } from '../services/course.service'

const CoursePicture = () => {
  
  const dispatch = useDispatch()

  const { courseid } = useParams()

  const [courseName, setCourseName] = useState('');


  useEffect(() => {
    dispatch(startLoading())
    getCourse(courseid)
    .then((response) => { 
      dispatch(stopLoading())
      setCourseName(response.data.result.course_name)
    })
    .catch((err) => dispatch(stopLoading()))
  }, []) 

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(e.target['school-verify-doc'])
    let formData = new FormData()
    formData.append('course_pic', e.target['school-verify-doc'].files[0])
    
    dispatch(startLoading())
    uploadCoursePicture(courseid, formData).then( response => {
      dispatch(stopLoading())
      console.log(response)
    }).catch(err => {
      console.log(err)
      dispatch(stopLoading())
    })
  }

  return (
    <div className='CoursePic'>
      <div className='Header'>Course Picture</div>
      <br></br>
      <div className='text'>Nun tutor (fak algorithm)</div>
      <Upload/>
      <div className="temp">
        <Row>
            <Col>
            </Col>
            <Col>
                <Button type="submit" color="primary" size="lg" className="Pair_Button">
                    Save
                </Button>
            </Col>
            <Col>
                <Button type="submit" color="secondary" size="lg" className="Pair_Button">
                    Cancel
                </Button>
            </Col>
            <Col>
            </Col>
        </Row>
      </div>
    </div>
  )
}

export default CoursePicture