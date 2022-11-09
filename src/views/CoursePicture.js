import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import '../App.css'


const CoursePicture = () => {
  return (
    <div className='CoursePic'>
      <div className='Header'>Course Picture</div>
      <br></br>
      <div className='text'>Nun tutor (fak algorithm)</div>
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