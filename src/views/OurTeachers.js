import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container } from 'reactstrap'
import SchoolBanner from '../img/logo-white.png'
import { getSchool, getTeacher } from '../services/school.service'

const OurTeachers = () => {
  
  const { schoolid } = useParams();
  const [teachers,setTeachers] = useState([]);
  const [school,setSchool] = useState({});

  useEffect(()=>{
    getTeacher(schoolid).then(
      response => setTeachers([...response.data.teachers])
    )
    getSchool(schoolid).then(
      response => setSchool({...response.data.result})
    )
  },[])

  console.log(teachers);

  return (
    <div className='our-teachers'>
      <div className='school-banner-box'>
        <img className='school-banner' src={SchoolBanner} alt='School-Banner'/>
      </div>
      <h1 className='our-teachers-title'>Our Teachers</h1>
      <Container className='teacher-container'>
        <h3>{school.name}</h3>
        <div className='teacher-box'>
          { teachers.map((teacher) => (
              <div className='teacher-card'>
                <Link to={`/teacher/${teacher.user_id}`}>
                  <img 
                    className='user-profile-big'
                    src={teacher.picture_url}
                    alt={`${teacher.firstname}-${teacher.lastname}`}
                    />
                </Link>
                <h5>{`${teacher.firstname} ${teacher.lastname}`}</h5>
              </div>
            )) }
        </div>
      </Container>
    </div>
  )
}

export default OurTeachers