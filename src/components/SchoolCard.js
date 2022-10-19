import React from 'react'
import { Link } from 'react-router-dom'

const SchoolCard = ({school_id, school_name , logo_url}) => {
  return (
    <span  className='schoolcard' style={{"display": "block"}}>
    <Link to={`/school-manage/${school_id}`}>
            <div className='imgschool'>
                <img src={logo_url} alt='school-logo'/>
            </div>
            <div className='text-center textbox-myschool'>
                <h4>{school_name}</h4>
            </div>
    </Link>
  </span>
  )
}

export default SchoolCard