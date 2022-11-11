import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { openComfirmation } from '../redux/confirmation.reducer'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import SearchBar from '../components/SearchBar'
import CourseContainer from '../components/CourseContainer'
import CourseCardMiniHorizontal from '../components/CourseCardMiniHorizontal'

const SearchPage = () => {

    const dispatch = useDispatch()
    const [isSelectRight,setisSelectRight] = useState(0)

    const handleClick = () => {
        const payload = {
            message: "Are you sure do you want to proceed?",
            action: () => alert("OK!")
        }
        dispatch(openComfirmation(payload))
    }

    return (
        <div className='pt-20'>
            <div>
                <SearchBar />
            </div>
            
        </div>
    )
}

export default SearchPage