import React from 'react'
import { Link } from 'react-router-dom'



const SchoolEditingBtn = ({school}) => {

  return (
    <span style={{"display": "block"}}>
      <Link to={`/school/${school.school_id}/edit`}>
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