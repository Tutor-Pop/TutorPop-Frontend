import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'reactstrap'
import { openComfirmation } from '../redux/confirmation.reducer'

const SearchPage = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        const payload = {
            message: "Hello",
            action: () => console.log("ASDFGHJKL")
        }
        dispatch(openComfirmation(payload))
    }

    return (
        <div>
            <h1>AAAAA</h1>
            <h1>AAAAA</h1>
            <h1>AAAAA</h1>
            <h1>AAAAA</h1>
            <Button onClick={handleClick}>Cic</Button>
        </div>
    )
}


export default SearchPage