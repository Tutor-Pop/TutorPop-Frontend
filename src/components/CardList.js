import React from 'react'
import { Button } from 'reactstrap'
import CourseCard from './CourseCard'

const CardList = ({ courseData, isSelectLeft, createCourseOption }) => {
  
  return (
    <div className='card-list-box'>
      {courseData[isSelectLeft].map((course) => <CourseCard courseName={course.course_name}/>)}
      { !isSelectLeft && createCourseOption &&
        <div>
          <Button
                  className="create-course-btn"
                  color="primary"
                  size="md"
                >
                  Create New Course
          </Button>
        </div>
      }
    </div>
  )
}

export default CardList