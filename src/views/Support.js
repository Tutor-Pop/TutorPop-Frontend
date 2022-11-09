import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const Support = () => {
  return (
    <div className='Support'>
        <h1>Support</h1>
        <div className='frame'>
            <div className='header font'>
                Any question? Need help?
            </div>
            
            <div className='bot-text font'>
                <div className='contact-us'>
                    Contact us: 
                </div>
                <div className='juabjarb font'>
                    Juabjarb developement
                </div>
            </div>
            <div className='box d-flex'>   
                <div className='env' >
                    <FontAwesomeIcon icon={faEnvelope} className='fa-env'/>
                </div>
                <div className='email font'>
                    email: tutorpop.jj@gmail.com
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Support