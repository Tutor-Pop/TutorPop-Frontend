import React from 'react'
import { Button } from 'reactstrap'

function StudentCard() {
  return (
    <div className='studentCard'>
      <div className='profile-pic-title'>
        <img className='user-profile-icon' src='./img/classroom.png'/>
        <div className='student-title'>
          <h6>Kanonแคนนอน</h6>
          <h7>kanon@dukdui.com</h7>
        </div>
      </div>
      <Button color="link">View Payment Photo</Button>
      <div>
        <Button className='confirm-btn' color="primary">Confirm</Button>
        <Button className='decline-btn' outlined>Decline</Button>
      </div>
    </div>
  )
}

export default StudentCard