import { faCloudArrowUp, faPlus, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Col, Form, FormGroup, Row } from 'reactstrap'
import '../App.css'
import { startLoading, stopLoading } from '../redux/loading.reducer'
import { updateSchool } from '../services/school.service'
//แนบไฟร์ไม่ได้
const LogoEdit = () => {
    
    const navigate = useNavigate()
    const { schoolid } = useParams()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        let body = new FormData()
        if(e.target['logo'].files.length > 0){
            body.append('logo_pic',e.target['logo'].files[0])
        }
        if(e.target['banner'].files.length > 0){
            body.append('banner_pic',e.target['banner'].files[0])
        }

        dispatch(startLoading())
        updateSchool(schoolid,body).then(response => {
            dispatch(stopLoading())
            navigate('./../')
        }).catch(err => {
            dispatch(stopLoading())
        })
    }


    return (
        <div className='logo-edit'>
            <Form onSubmit={e => handleSubmit(e)}>
                <div className='top'>
                    <Row>
                        <Col>
                            <FormGroup>
                                <div className='logo'>
                                    <div className='text header'>
                                        LOGO
                                    </div>
                                    <div className='text'>

                                    </div>
                                    <div className='payment'>
                                        <div className='upload'>
                                            <FontAwesomeIcon icon={faCloudArrowUp} size="6x" color='grey' />
                                        </div>
                                        <div className='text'>
                                            Browse and chose the files you want to upload from your computer
                                        </div>
                                        <div className='button'>
                                            <input type="file" id="logo" name="logo" className='Hidden' />
                                            <Button className="w-1/2 plus" color='primary'>
                                                <FontAwesomeIcon icon={faPlus} />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <div className='banner'>
                                    <div className='text header'>
                                        BANNER
                                    </div>
                                    <div className='text'>

                                    </div>
                                    <div className='payment'>
                                        <div className='upload'>
                                            <FontAwesomeIcon icon={faCloudArrowUp} size="6x" color='grey' />
                                        </div>
                                        <div className='text'>
                                            Browse and chose the files you want to upload from your computer
                                        </div>
                                        <div className='button'>
                                            <input type="file" id="banner" name="banner" className='Hidden' />
                                            <Button className="w-1/2 plus" color='primary'>
                                                <FontAwesomeIcon icon={faPlus} />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </FormGroup>
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
                                    Save
                                </Button>
                            </Col>
                            <Col>
                                <Button onClick={() => navigate('./../')} color="secondary" size="lg" className="Pair_Button">
                                    Cancel
                                </Button>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default LogoEdit