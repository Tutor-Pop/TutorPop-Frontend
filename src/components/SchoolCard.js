import React from 'react'
import { Link } from 'react-router-dom'

const SchoolCard = ({school_id, school_name , logo_url, status}) => {
  return (
    <span  className='schoolcard' style={{"display": "block"}}>
    {(status === "Confirmed") &&
    <Link to={`/school-manage/${school_id}`}>
            <div className='imgschool'>
                <img src={logo_url} alt='school-logo'/>
                </div>
            <div className='text-center textbox-myschool'>
                <p>{school_name}</p>
            </div>
    </Link>}
    {(status === "WaitForPayment") &&
    <Link to={`/school/${school_id}/school-payment`}>
      <div className='imgschool'>
        <img src={logo_url} alt='school-logo'/>
      </div>
      <div className='text-center textbox-myschool'>
        <p>{school_name} <span>(Not Paid)</span></p>
      </div>
    </Link>
                }
    {(status === "PaymentPending") &&
    <Link to={`/school-manage/${school_id}/pending`}>
      <div className='imgschool'>
        <img src={logo_url} alt='school-logo'/>
      </div>
      <div className='text-center textbox-myschool'>
        <p>{school_name} <span>(Pending)</span></p>
      </div>
    </Link>
    }
    {(status === "DocsPending") && 
      <>
        <div className='imgschool'>
          <img src={logo_url} alt='school-logo'/>
        </div>
        <div className='text-center textbox-myschool'>
          <p>{school_name} <span>(Docs Pending)</span></p>
        </div>
      </>
    }
    {(status === "SchoolCard") &&
    <Link to={`/school/${school_id}`}>
      <div className='imgschool'>
        <img src={logo_url} alt='school-logo'/>
      </div>
      <div className='text-center textbox-myschool'>
        <p>{school_name}</p>
      </div>
    </Link>
    }
    </span>
  )
}

export default SchoolCard