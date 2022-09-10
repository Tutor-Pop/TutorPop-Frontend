import React, { useState } from 'react'

const CourseContainer = () => {

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
      <div className='container-box'></div>
    </div>
  )
}

export default CourseContainer