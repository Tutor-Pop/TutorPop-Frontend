import React, { useEffect, useState } from 'react'
import CourseContainer from '../components/CourseContainer'
import CardList from '../components/CardList'
import { getStudyCourses, getTeachingCourses } from '../services/course.service'
import { getTeachings } from '../services/personal.service'
//teaching กับปุ่มหัวใจ  กับปุ่ม create new course
const MyCourse = () => {

  const [isSelectRight, setSelectRight] = useState(0)

  const onClick = () => {
    if (isSelectRight)  
      setSelectRight(0)
    else setSelectRight(1)
  }

  const studyCourse = [
      {
        'course_id' : '1',
        'course_name' : 'High School Mathematics',
        'course_description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet semper mollis. Cras commodo ullamcorper sapien, eget molestie ligula accumsan quis.',
        'course_price' : '2500฿',
        'school_name' : 'School 1',
        'school_address' : '123 Street, Bangkok',
        'course_progress' : '0.5'
      },
      {
        'course_id' : '2',
        'course_name' : 'Gordey Ramson Ultimate Cooking Course',
        'course_description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet semper mollis. Cras commodo ullamcorper sapien, eget molestie ligula accumsan quis.',
        'course_price' : '5000฿',
        'school_name' : 'School 2',
        'school_address' : '123 Street, Bangkok',
        'course_progress' : '0.2'
      },
      {
        'course_id' : '3',
        'course_name' : 'AP Calculus',
        'course_description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet semper mollis. Cras commodo ullamcorper sapien, eget molestie ligula accumsan quis.',
        'course_price' : '3000฿',
        'school_name' : 'School 3',
        'school_address' : '123 Street, Bangkok',
        'course_progress' : '0.35'
      },
      {
        'course_id' : '4',
        'course_name' : 'Basic Baking 101',
        'course_description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet semper mollis. Cras commodo ullamcorper sapien, eget molestie ligula accumsan quis.',
        'course_price' : '5500฿',
        'school_name' : 'School 4',
        'school_address' : '123 Street, Bangkok',
        'course_progress' : '0.35'
      },
      {
        'course_id' : '4',
        'course_name' : 'Calculus I, II, III',
        'course_description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet semper mollis. Cras commodo ullamcorper sapien, eget molestie ligula accumsan quis.',
        'course_price' : '12500฿',
        'school_name' : 'School 5',
        'school_address' : '123 Street, Bangkok',
        'course_progress' : '0.76'
      },
    ]
  const teachCourse = [
      {
        'course_id' : '8',
        'course_name' : 'Calculus I',
        'course_price' : '4000฿',
        'school_name' : 'School 8',
        'school_address' : '123 Street, Bangkok',
        'course_progress' : '0.45'
      },
    ]

  const [courses,setcourses] = useState([])

  useEffect(()=>{
    let account_id = localStorage.getItem('account_id')
    getTeachings(account_id).then(response => {
      console.log('COURSE',response)
      setcourses(response.data.courses.filter(course => !course.is_deleted))
    })
  },[])

  // const [studyCourse, setStudyCourse] = useState([]);
  // const [teachCourse, setTeachCourse] = useState([]);

  // useEffect(() => {
  //   getStudyCourses(localStorage.getItem('account_id')).then((response) => {
  //       setStudyCourse(response.data.courses)
  //       return getTeachingCourses(localStorage.getItem('account_id'))
  //     })
  //     .then((response) => (
  //       setTeachCourse(response.data.courses)
  //       )
  //     )
  // }, [])

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
            cardType='course'
            cardData={studyCourse} 
            createCourseOption={false}
            toggleProgress={true}
            toggleFavorite={true}
          />
        }
        {
          (isSelectRight === 1) &&
          <CardList
            cardType='course'
            isEditable={true} 
            cardData={courses} 
            createCourseOption={true}
            toggleProgress={true}
            toggleFavorite={true}
          />
        }
      </CourseContainer>
    </div>
  )
}

export default MyCourse