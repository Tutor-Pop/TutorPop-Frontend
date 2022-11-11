import React from 'react'
import { Link } from 'react-router-dom'
// ยัง search ไม่ได้ , send feedback ยังไม่ได้ คลิ๊กดูเชี่ยอะไรไม่ได้เลย ตรงเสิร์จเเว่นขยายติดช่องเสิร์จมากไป
const AdminCourseManageBtn = () => {
  return (
    <span style={{"display": "block"}}>
    <Link to='/admin/course-manage'>
        <div className='textbox-schoolman text-left'>
            <h3>Course Management</h3>
        </div>
        <div className='imgschooledit'>
            <img src={require("../img/course-management-admin.png")}/>
        </div>
    </Link>
    </span>
  )
}

export default AdminCourseManageBtn