import React from 'react'
import '../App.css'
import CourseCreateFrame from '../components/CourseCreateFrame'

const CreatCourse = () => {
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
        <CourseCreateFrame/>
        <CourseCreateFrame/>
        <CourseCreateFrame/>
        <CourseCreateFrame/>
        <CourseCreateFrame/>
        <CourseCreateFrame/>
        <CourseCreateFrame/>
        <CourseCreateFrame/>
      </div>
    </div>
  )
}

export default CreatCourse