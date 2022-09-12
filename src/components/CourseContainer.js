import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from 'reactstrap'
import CourseCard from './CourseCard'

const CourseContainer = ({courseData}) => {

  const [isSelectLeft, setSelectLeft] = useState(true)

  const btnClickHandler = () => {
    setSelectLeft(!isSelectLeft)
  }

  return (
    <div className='course-container'>
      <div className='course-select-btn'>
        { isSelectLeft &&
        <>
          <h2 className='select-left'>Study</h2>
          <h2 onClick={btnClickHandler} className='not-select-left'>Teaching</h2>
        </>
        }
        { !isSelectLeft &&
        <>
          <h2 onClick={btnClickHandler} className='not-select-left'>Study</h2>
          <h2 className='select-left'>Teaching</h2>
        </>
        }
      </div>
      <div className='container-box'>
        {courseData.map((course) => <CourseCard courseName={course.course_name}/>)}
        { !isSelectLeft &&
          <div className='create-course-btn'>
            <Button
                    className="login-btn"
                    color="primary"
                    size="md"
                    
                  >
                    Create New Course
            </Button>
          </div>
        }
      </div>
    </div>
  )
}

export default CourseContainer