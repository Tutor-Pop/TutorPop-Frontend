import React from 'react'
import { Col, Row } from 'reactstrap'

const SchoolCardMiniHorizontal = ({schoolName,description,location}) => {
    return (
      // mx-2
      <div className='school-card-mini-horizontal'>
        <div className='pic'>
        </div>
        <div className='description'>
          <div className='top'>
            <div className='font-bold'>
              {schoolName}
            </div>
            <div>
               {description}
            </div>
          </div>
          <div className='bot'>
            <div className='text'>
              {location}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default SchoolCardMiniHorizontal