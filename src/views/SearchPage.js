import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { openComfirmation } from '../redux/confirmation.reducer'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import SearchBar from '../components/SearchBar'
import CourseContainer from '../components/CourseContainer'
import CourseCardMiniHorizontal from '../components/CourseCardMiniHorizontal'
import SchoolCardMiniHorizontal from '../components/SchoolCardMiniHorizontal'
import { useEffect } from 'react'
import { getAllCoursePopulate } from '../services/course.service'
import { courseSearchFilter, schoolSearchFilter } from '../services/search.service'
import { startLoading, stopLoading } from '../redux/loading.reducer'

const SearchPage = () => {

    const TYPE = [
        { value: 'GENERAL', label: 'General' },
        { value: 'MATH', label: 'Math' },
        { value: 'SCIENCE', label: 'Science' },
        { value: 'LANGUAGE', label: 'Language' },
        { value: 'MUSIC', label: 'Music' },
        { value: 'COOK', label: 'Cooking' },
        { value: 'FINANCE', label: 'Finance' },]

    const dispatch = useDispatch()
    const [swap, setswap] = useState(0)
    const [allCourse, setallCourse] = useState([])
    const [allSchool, setallSchool] = useState([])

    const [ready,setready] = useState([false,false])

    const toggle = () => {
        setswap(swap == 0 ? 1 : 0)
    }

    const handleClick = () => {
        const payload = {
            message: "Are you sure do you want to proceed?",
            action: () => alert("OK!")
        }
        dispatch(openComfirmation(payload))
    }

    useEffect(() => {
        dispatch(startLoading())
        courseSearchFilter().then(response => {
            setallCourse(response.data.result)
            return schoolSearchFilter()
        })
        .then(response => {
            setallSchool(response.data.result)
            dispatch(stopLoading())
        })
    }, [])

    return (
        <div className='pt-20 mx-20 search-page'>
            <div className='mx-auto w-1/4 my-3'>
                <SearchBar />
            </div>
            <CourseContainer
                leftText="Course"
                rightText="School"
                isSelectRight={swap}
                onClick={toggle}
            >
                {
                    swap == 0 ? <>
                        {/* Course */}
                        {
                            TYPE.map(type => <>
                                <h3>{type.label}</h3>
                                <div className='search-scroll'>
                                    {
                                        allCourse.filter(value => value.type == type.value).map(course =>
                                            <CourseCardMiniHorizontal
                                                id={course.course_id}
                                                courseName={course.course_name}
                                                schoolName={course.school_name}
                                                price={course.course_price}
                                                remSeat={course.maximum_student - course.reserved_student}
                                            />)}

                                </div></>
                            )
                        }

                    </> : <>
                        {/* School */}
                        {
                            allSchool.map(school => <SchoolCardMiniHorizontal 
                                schoolName={school.name}
                                description={school.description}
                                location={`${school.district},${school.province}`}
                            />)
                        }
                        
                    
                    </>
                }
            </CourseContainer>
        </div>
    )
}

export default SearchPage