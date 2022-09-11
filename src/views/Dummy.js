import React from 'react'
import AppNav from '../components/AppNav'
import CourseContainer from '../components/CourseContainer'
import Logo from '../img/logo-color.png'

const Dummy = () => {

  const courseData = [
  {
    'COURSE_ID' : '1',
    'courseName' : 'Calculus for Baby',
  },
  {
    'COURSE_ID' : '2',
    'courseName' : 'Theory of Computation',
  },
  {
    'COURSE_ID' : '3',
    'courseName' : 'Basic Baking',
  },
  {
    'COURSE_ID' : '4',
    'courseName' : 'Calculus II',
  },
  {
    'COURSE_ID' : '5',
    'courseName' : 'Advance Black Magic',
  }
  ]
  
  return (
    <div className='dummy'>
      {/* <h1 className='app-title'>My Course</h1> */}
      <CourseContainer courseData={courseData}/>
    </div>
  )
}

export default Dummy