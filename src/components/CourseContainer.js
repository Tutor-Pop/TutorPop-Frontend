import React from 'react'

const CourseContainer = (props) => {
  const { leftText, rightText, isSelectRight, onClick } = props

  return (
    <div className='course-container'>
      <div className='course-select-btn'>
        { (isSelectRight === 0) &&
          <>
            <h2 className='select-left'>{leftText}</h2>
            <h2 onClick={onClick} 
                className='not-select-left'>{rightText}</h2>
          </>
        }
        { (isSelectRight === 1) &&
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
                    isSelectRight={isSelectRight}
                    createCourseOption={createCourseOption}
        />   */}
      </div>
    </div>
  )
}

export default CourseContainer