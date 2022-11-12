import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import { updateReservationStatus } from '../services/reserveation.service'

const StudentCard = ({ username, email, payment_pic, reservation_id, noSelect }) => {

  const [disableConfirm, setdisableConfirm] = useState(false)
  const [disableReject, setdisableReject] = useState(false)

  const handleConfirm = () => {
    updateReservationStatus(reservation_id, "Confirmed")
    setdisableConfirm(true)
  }

  const handleReject = () => {
    updateReservationStatus(reservation_id, "Rejected")
    setdisableReject(true)
  }

  useEffect(() => {
    console.log(username, email, payment_pic)
  }, [username, email, payment_pic])
  return (
    <div className='studentCard'>
      <div className='profile-pic-title'>
        <img className='user-profile-icon' src={require("../img/user_icon.jpg")} />
        <div className='student-title'>
          <h6>{username}</h6>
          <h7>{email}</h7>
        </div>
      </div>
      <Button disabled={!payment_pic} onClick={() => console.log(payment_pic)} color="link">View Payment Photo</Button>
      <div>
        {
          !noSelect && <>
            {!disableReject && <Button disabled={disableConfirm} onClick={handleConfirm} className='confirm-btn' color="primary">Confirm</Button>}
            {!disableConfirm && <Button disabled={disableReject} onClick={handleReject} className='decline-btn' outlined>Decline</Button>}
          </>
        }

      </div>
    </div>
  )
}

export default StudentCard