import React, { useState } from 'react'
import CourseContainer from '../components/CourseContainer'
import CardList from '../components/CardList'
import { useEffect } from 'react'
import { getAllReservations, getAllReservationsInDetail } from '../services/personal.service'
import { useDispatch } from 'react-redux'
import { startLoading, stopLoading } from '../redux/loading.reducer'

const MyReservation = () => {

  const account_id = localStorage.getItem('account_id')
  const [isSelectRight, setSelectRight] = useState(0)

  const [reservedCourse, setreservedCourse] = useState([])
  const [payCourse,setpayCouse] = useState([])
  const dispatch = useDispatch()

  const onClick = () => {
    if (isSelectRight)
      setSelectRight(0)
    else setSelectRight(1)
  }

  useEffect(() => {
    dispatch(startLoading())
    getAllReservationsInDetail(account_id).then(response => {
      dispatch(stopLoading())
      setreservedCourse(response.data.wait_for_payment.result.map(reserve => ({
        'course_id': reserve.course_id,
        'course_name': reserve.course_detail.course_name,
        'course_description': reserve.course_detail.course_description,
        'course_price': reserve.course_detail.course_price,
        'school_name': reserve.course_detail.school_name,
        'school_address': `${reserve.school_detail.district}, ${reserve.school_detail.province}`,
      })))

      setpayCouse(response.data.wait_for_confirm.result.map(reserve => ({
        'course_id': reserve.course_id,
        'course_name': reserve.course_detail.course_name,
        'course_description': reserve.course_detail.course_description,
        'course_price': reserve.course_detail.course_price,
        'school_name': reserve.course_detail.school_name,
        'school_address': `${reserve.school_detail.district}, ${reserve.school_detail.province}`,
      })))
    })
  }, [])


  // const payCourse = [
  //   {
  //     'course_id': '8',
  //     'course_name': 'Calculus I',
  //     'course_price': '4000฿',
  //     'school_name': 'School 8',
  //     'school_address': '123 Street, Bangkok'
  //   },
  // ]
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