import React from 'react'
import { Link } from 'react-router-dom'

const SchoolCard = ({schoolId, schoolName , logoUrl}) => {
  return (
    <span  className='schoolcard' style={{"display": "block"}}>
    <Link to={`/school/${schoolId}`}>
            <div className='imgschool'>
                <img src={logoUrl} alt='school-logo'/>
            </div>
            <div className='text-center textbox-myschool'>
                <h4>{schoolName}</h4>
            </div>
    </Link>
  </span>
  )
}

export default SchoolCard