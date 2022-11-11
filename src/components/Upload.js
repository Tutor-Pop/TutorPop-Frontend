import { faCloudArrowUp, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "reactstrap";
import '../App.css'


const Upload = () => {
  return (
    <div className='logo-edit'>
        <div className='payment'>
            <div className='upload'>
                <FontAwesomeIcon icon={faCloudArrowUp} size="6x" color='grey'/>
            </div>
            <div className='text'>
                Browse and chose the files you want to upload from your computer
            </div>
            <div className='button'>
                <input required type="file" id="school-verify-doc" name="school-verify-doc" className='Hidden'/>
                <Button className="w-1/2 plus" color='primary'>
                    <FontAwesomeIcon icon={faPlus}/>
                </Button>
            </div>
        </div>
    </div>
  )
}
export default Upload