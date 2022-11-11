import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { openComfirmation } from '../redux/confirmation.reducer'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import SearchBar from '../components/SearchBar'
import CourseContainer from '../components/CourseContainer'
import CourseCardMiniHorizontal from '../components/CourseCardMiniHorizontal'

const SearchPage = () => {

    const dispatch = useDispatch()
    const [swap, setswap] = useState(0)

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
                        <h3>Education</h3>
                        <div className='search-scroll'>
                            <CourseCardMiniHorizontal />
                            <CourseCardMiniHorizontal />
                            <CourseCardMiniHorizontal />
                            <CourseCardMiniHorizontal />
                        </div>
                        <h3>Music</h3>
                        <div className='search-scroll'>
                            <CourseCardMiniHorizontal />
                            <CourseCardMiniHorizontal />
                            <CourseCardMiniHorizontal />
                        </div>
                    </> : <>
                        {/* School */}
                        <h3>Education</h3>
                        <div className='search-scroll'>
                            <CourseCardMiniHorizontal />
                            <CourseCardMiniHorizontal />
                            <CourseCardMiniHorizontal />
                            <CourseCardMiniHorizontal />
                        </div>
                        <h3>Music</h3>
                        <div className='search-scroll'>
                        <CourseCardMiniHorizontal />
                        <CourseCardMiniHorizontal />
                        <CourseCardMiniHorizontal />
                        </div>
                    </>
                }
            </CourseContainer>
        </div>
    )
}

export default SearchPage