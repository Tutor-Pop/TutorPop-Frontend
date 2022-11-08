import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'reactstrap'
import RemoveModal from '../components/ConfimationModal'
import { openComfirmation } from '../redux/confirmation.reducer'

const SearchPage = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <h1>AAAAA</h1>
            <h1>AAAAA</h1>
            <h1>AAAAA</h1>
            <h1>AAAAA</h1>
            <RemoveModal/>
            <Button onClick={() => dispatch(openComfirmation("Hello",()=>console.log("asdw")))}>Cic</Button>
        </div>
    )
}


export default SearchPage