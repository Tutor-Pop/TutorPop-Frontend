import { faCloudArrowUp, faPlus, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import '../App.css'

const LogoEdit = () => {
  return (
    <div className='logo-edit'>
        <div className='top'>
            <Row>
                <Col>
                    <div className='logo'>
                        <div className='text header'>
                            LOGO
                        </div>
                        <div className='text'>
                            Nun Fak algorithm
                        </div>
                        <div className='payment'>
                            <div className='upload'>
                                <FontAwesomeIcon icon={faCloudArrowUp} size="6x" color='grey'/>
                            </div>
                            <div className='text'>
                                Browse and chose the files you want to upload from your computer
                            </div>
                            <div className='button'>
                                <Button className="w-1/2 plus" color='primary'>
                                    <FontAwesomeIcon icon={faPlus}/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className='banner'>
                        <div className='text header'>
                            BANNER
                        </div>
                        <div className='text'>
                            Nun Fak algorithm
                        </div>
                        <div className='payment'>
                            <div className='upload'>
                                <FontAwesomeIcon icon={faCloudArrowUp} size="6x" color='grey'/>
                            </div>
                            <div className='text'>
                                Browse and chose the files you want to upload from your computer
                            </div>
                            <div className='button'>
                                <input required type="file" id="school-verify-doc" name="school-verify-doc" className='Hidden'/>
                                <Button className="w-1/2 plus" color='primary'>
                                    <FontAwesomeIcon icon={faPlus}/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
        <div className='bot'>
            <div className="temp">
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <Button type="submit" color="primary" size="lg" className="Pair_Button">
                            Create course
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
    </div>
  )
}

export default LogoEdit