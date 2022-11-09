import React from 'react'
import SearchTeacherBar from '../components/SearchTeacherBar'
import UserShortChip from '../components/UserShortChip'

const TeacherManagement = () => {
  return (
    <div className='teacher'>
        <div className='teacher-man-title'>
            <h1>Teacher Management</h1>
            <h5>school name</h5>
            <h6>Invite Teacher</h6>
            <SearchTeacherBar/>
        </div>
        
        <div className='inviting-teacher'>
            <UserShortChip/>
        </div>

    </div>
  )
}

export default TeacherManagement