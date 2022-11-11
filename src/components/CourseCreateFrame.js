import React from "react";
import '../App.css'
import { Link } from 'react-router-dom'
const CourseCreateFrame = ({schoolId,logoUrl,schoolName}) => {
  return (
    <div className='creat-course'>
      <Link to={`/create-course/${schoolId}`}>
      <div className='frame'>
        <div className='pic'>
          <img src={logoUrl} alt='school-logo'/>
        </div>
        <div className='text1'>
          <h4>{schoolName}</h4>
        </div>
      </div>
      </Link>
    </div>
  )
}
export default CourseCreateFrame