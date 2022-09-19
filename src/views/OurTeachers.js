import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import SchoolBanner from '../img/logo-white.png'

const OurTeachers = () => {

  const schoolTeachers = {
    'teachers': [
      {
        'user_id' : '1',
        'firstname' : 'John',
        'lastname' : 'Doe',
        'picture_url' : 'https://preview.redd.it/9ihwu3ac1g141.jpg?auto=webp&s=3b84341603c04630e236eebfdb15453bf3deb413',
      },
      {
        'user_id' : '2',
        'firstname' : 'Jane',
        'lastname' : 'Doe',
        'picture_url' : 'https://i.pinimg.com/736x/14/1a/11/141a112d04cc0fdde06e58b8bc95ddf6.jpg',
      },
      {
        'user_id' : '3',
        'firstname' : 'Joe',
        'lastname' : 'Doe',
        'picture_url' : 'https://us-fbcloud.net/wb/data/1314/1314666-img.uwfmik.6.jpg',
      },
      {
        'user_id' : '4',
        'firstname' : 'Jean',
        'lastname' : 'Doe',
        'picture_url' : 'https://us-fbcloud.net/wb/data/1314/1314666-img.uwfmik.6.jpg',
      },
      {
        'user_id' : '5',
        'firstname' : 'Joey',
        'lastname' : 'Doe',
        'picture_url' : 'https://us-fbcloud.net/wb/data/1314/1314666-img.uwfmik.6.jpg',
      },
      {
        'user_id' : '6',
        'firstname' : 'Jack',
        'lastname' : 'Doe',
        'picture_url' : 'https://us-fbcloud.net/wb/data/1314/1314666-img.uwfmik.6.jpg',
      },
      
    ]
  }

  const teachersData = schoolTeachers.teachers

  return (
    <div className='our-teachers'>
      <div className='school-banner-box'>
        <img className='school-banner' src={SchoolBanner} alt='School-Banner'/>
      </div>
      <h1 className='our-teachers-title'>Our Teachers</h1>
      <Container className='teacher-container'>
        <h3>School Name</h3>
        <div className='teacher-box'>
          { teachersData.map((teacher) => (
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