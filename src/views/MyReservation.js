import React, { useState } from 'react'
import CourseContainer from '../components/CourseContainer'
import CardList from '../components/CardList'
import { useEffect } from 'react'
import { getAllReservations } from '../services/personal.service'

const MyReservation = () => {

  const account_id = localStorage.getItem('account_id')
  const [isSelectRight, setSelectRight] = useState(0)

  const [reservedCourse, setreservedCourse] = useState([])

  const onClick = () => {
    if (isSelectRight)
      setSelectRight(0)
    else setSelectRight(1)
  }

  useEffect(() => {
    getAllReservations(account_id).then(response => {
      console.log(response.data.reservations)
      response.data.reservations.map(reserve => ({
        'course_id': reserve,
        'course_name': reserve,
        'course_description': reserve,
        'course_price': reserve,
        'school_name': reserve,
        'school_address': reserve
      }))
    })
  }, [])


  const payCourse = [
    {
      'course_id': '8',
      'course_name': 'Calculus I',
      'course_price': '4000฿',
      'school_name': 'School 8',
      'school_address': '123 Street, Bangkok'
    },
  ]
  const courseData = [
    reservedCourse,
    payCourse
  ]

  return (
    <div className='my-course'>
      <h1>My Reservation</h1>
      <CourseContainer
        leftText={'Waiting For Payment'}
        rightText={'Waiting For Confirmation'}
        isSelectRight={isSelectRight}
        onClick={onClick}
      >
        {(isSelectRight === 0) &&
          <CardList
            cardType='course'
            cardData={courseData[0]}
            createCourseOption={false}
            toggleProgress={false}
            toggleFavorite={false}
          />
        }
        {
          (isSelectRight === 1) &&
          <CardList
            cardType='course'
            cardData={courseData[1]}
            createCourseOption={false}
            toggleProgress={false}
            toggleFavorite={false}
          />
        }
      </CourseContainer>
    </div>
  )
}

export default MyReservation