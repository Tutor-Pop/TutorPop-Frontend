import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from 'reactstrap'

const SchoolPayPending = () => {
  return (
    <Container className='school-pay-pending'>\
      
      <img 
        style={{
          width: '15%',
          margin: 'auto'
        }}
        src={require('../img/hourglass.png')} alt='Pending'
      />
      <div className='mt-5 text-center'>
        <h3>
          Your payment will be accept after recieving confirmation from admin. 
        </h3>
        <h3>
          Typically this takes about 2 days 
        </h3>
        <Link className='link-btn-txt mx-auto' to='/my-school'>
          <Button className='mt-3 px-5' size='lg' color='primary'>
              Back to My Schools
          </Button>
        </Link>
      </div>
    </Container>
  )
}

export default SchoolPayPending