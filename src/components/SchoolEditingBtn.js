import React from 'react'
import { Link } from 'react-router-dom'



const SchoolEditingBtn = () => {

  return (
    <span style={{"display": "block"}}>
      <Link to='/:schoolid/school-edit'>
        <div className='textbox-schoolman text-left'>
            <h3>School Editing</h3>
        </div>
        <div className='imgschooledit'>
            <img src={require("../img/SchoolEditing.png")}/>
        </div>  
      </Link>
    </span>
  )
}

export default SchoolEditingBtn