import React from 'react'

const CourseContainer = (props) => {
  const { leftText, rightText, isSelectLeft, onClick } = props

  return (
    <div className='course-container'>
      <div className='course-select-btn'>
        { (isSelectLeft === 1) &&
          <>
            <h2 className='select-left'>{leftText}</h2>
            <h2 onClick={onClick} 
                className='not-select-left'>{rightText}</h2>
          </>
        }
        { (isSelectLeft === 0) &&
          <>
            <h2 onClick={onClick} 
                className='not-select-left'>{leftText}</h2>
            <h2 className='select-left'>{rightText}</h2>
          </>
        }
      </div>
      <div className='container-box'>
        {props.children}
        {/* <CourseList courseData={courseData} 
                    isSelectLeft={isSelectLeft}
                    createCourseOption={createCourseOption}
        />   */}
      </div>
    </div>
  )
}

export default CourseContainer