import React from 'react'
import { Link } from 'react-router-dom'
// ยัง search ไม่ได้ , send feedback ยังไม่ได้ คลิ๊กดูเชี่ยอะไรไม่ได้เลย ตรงเสิร์จเเว่นขยายติดช่องเสิร์จมากไป
const AdminSchoolRequestBtn = () => {
  return (
    <span style={{"display": "block"}}>
    <Link to='/admin/open-school-request'>
        <div className='textbox-schoolman text-left'>
            <h3>School Open Request</h3>
        </div>
        <div className='imgschooledit'>
            <img src={require("../img/school-open-request-admin.png")}/>
        </div>
    </Link>
    </span>
  )
}

export default AdminSchoolRequestBtn