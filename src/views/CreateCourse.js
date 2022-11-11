import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import '../App.css'
import CourseCreateFrame from '../components/CourseCreateFrame'
import { getSchoolOwner } from '../services/personal.service'

const CreatCourse = () => {
  const dispatch = useDispatch();
  const [myallSchool,setmyAllSchool] = useState([]);

  useEffect(() => {
    getSchoolOwner(localStorage.getItem("account_id")).then((res)=>{
      console.log(res.data);
      setmyAllSchool(...res.data.schools)
    })
  },[]);

  return (
    <div className='creat-course'>
      <div className='top'>
        <div className='header'>
          Course creation
        </div>
        <div className='text'>
          Choose a school to create a new course
        </div>
      </div>
      <div className='bot grid grid-cols-5'>
        {myallSchool.map((owner) => (
          <CourseCreateFrame
          schoolId={owner.school_id}
          logoUrl={owner.logo_pic}
          schoolName={owner.name}/>

        ))}
        
      </div>
    </div>
  )
}

export default CreatCourse