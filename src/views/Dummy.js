import React from 'react'
import AppNav from '../components/AppNav'
import CourseContainer from '../components/CourseContainer'
import Logo from '../img/logo-color.png'

const Dummy = () => {

  const courseData = [
  {
    'course_id' : '1',
    'course_name' : 'High School Mathematics',
  },
  {
    'course_id' : '2',
    'course_name' : 'Gordey Ramson Ultimate Cooking Course',
  },
  {
    'course_id' : '3',
    'course_name' : 'Basic Black Magic',
  },
  {
    'course_id' : '4',
    'course_name' : 'Piano for kids',
  },
  {
    'course_id' : '5',
    'course_name' : 'Python for statistics',
  },
  {
    'course_id' : '6',
    'course_name' : 'Create Animation for beginner',
  },
  {
    'course_id' : '7',
    'course_name' : 'Advance Guitar Course',
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