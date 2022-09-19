import React, { useState } from 'react'
import CourseContainer from '../components/CourseContainer'
import CardList from '../components/CardList'

const MyCourse = () => {

  const [isSelectRight, setSelectRight] = useState(0)

  const onClick = () => {
    if (isSelectRight)  
      setSelectRight(0)
    else setSelectRight(1)
  }

  const studyCourse = [{
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
    }]
  const teachCourse = [{
        'course_id' : '8',
        'course_name' : 'Calculus I',
      },
      {
        'course_id' : '9',
        'course_name' : 'Calculus II',
      },
      {
        'course_id' : '10',
        'course_name' : 'Calculus III',
      },
      {
        'course_id' : '11',
        'course_name' : 'Linear Algebra',
      },
      {
        'course_id' : '12',
        'course_name' : 'AP Calculus',
      },
      {
        'course_id' : '13',
        'course_name' : 'Physics I',
      },
      {
        'course_id' : '14',
        'course_name' : 'Physics II',
      },
      {
        'course_id' : '15',
        'course_name' : 'Basic Probability',
      },
      {
        'course_id' : '16',
        'course_name' : 'Advance Statistics',
    }]

  const courseData = [
    studyCourse ,
    teachCourse 
  ]

  return (
    <div className='my-course'>
      <h1>My Course</h1>
      <CourseContainer
        leftText={'Study'} 
        rightText={'Teaching'}
        isSelectRight={isSelectRight}
        onClick={onClick}
      > 
        { (isSelectRight === 0) &&
          <CardList 
            courseData={courseData[0]} 
            createCourseOption={false}
          />
        }
        {
          (isSelectRight === 1) &&
          <CardList 
            courseData={courseData[1]} 
            createCourseOption={true}
          />
        }
      </CourseContainer>
    </div>
  )
}

export default MyCourse