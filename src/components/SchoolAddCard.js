import React from 'react'
import { Link } from 'react-router-dom'
 
const SchoolAddCard = () => {
  return (
    <span  className='schoolcard' style={{"display": "block"}}>
    <Link to='/school-register'>
    <div className='imgaddschool'>
                <img src={require("../img/add.png")}/>
            </div>
    </Link>
  </span>
   
  )
}
 
export default SchoolAddCard