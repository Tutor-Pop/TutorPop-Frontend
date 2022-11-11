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
                <h3>Any question? Need help?</h3>
            </div>
            
            <div className='bot-text font'>
                <div className='contact-us'>
                    <h5>Contact us:</h5> 
                </div>
                <div className='juabjarb font'>
                    <h5>Juabjarb development</h5>
                </div>
            </div>
            <div className='box d-flex'>   
                <div className='env pr-5' >
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