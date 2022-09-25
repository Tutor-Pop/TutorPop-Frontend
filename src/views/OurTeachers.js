import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import SchoolBanner from '../img/logo-white.png'

const OurTeachers = () => {

  const schoolTeachers = {
    'teachers': [
      {
        'user_id' : '1',
        'firstname' : 'Jean',
        'lastname' : 'Doe',
        'picture_url' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVl9oeHxsqdBZ-0lJKKSM0NEIcac0bJtN7GA&usqp=CAU',
      },
      {
        'user_id' : '2',
        'firstname' : 'Jane',
        'lastname' : 'Doe',
        'picture_url' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29woM2pCbrauRfpGBg_AnFUuHFKQIwovD-Xz8vQ58PNQl6idY72L53gngFAvhLYXy0b4&usqp=CAU',
      },
      {
        'user_id' : '3',
        'firstname' : 'Joe',
        'lastname' : 'Doe',
        'picture_url' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzy41Se0MDkOHC8ZiMqFoqbDpm9MkcW6Hlia_ClnEwhf9pJqF09gBByQllTVjKUV7YdJo&usqp=CAU',
      },
      {
        'user_id' : '4',
        'firstname' : 'Jean',
        'lastname' : 'Doe',
        'picture_url' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVl9oeHxsqdBZ-0lJKKSM0NEIcac0bJtN7GA&usqp=CAU',
      },
      {
        'user_id' : '5',
        'firstname' : 'Joey',
        'lastname' : 'Doe',
        'picture_url' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29woM2pCbrauRfpGBg_AnFUuHFKQIwovD-Xz8vQ58PNQl6idY72L53gngFAvhLYXy0b4&usqp=CAU',
      },
      {
        'user_id' : '6',
        'firstname' : 'Jack',
        'lastname' : 'Doe',
        'picture_url' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzy41Se0MDkOHC8ZiMqFoqbDpm9MkcW6Hlia_ClnEwhf9pJqF09gBByQllTVjKUV7YdJo&usqp=CAU',
      },
      {
        'user_id' : '7',
        'firstname' : 'Jean',
        'lastname' : 'Doe',
        'picture_url' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzy41Se0MDkOHC8ZiMqFoqbDpm9MkcW6Hlia_ClnEwhf9pJqF09gBByQllTVjKUV7YdJo&usqp=CAU',
      },
      {
        'user_id' : '8',
        'firstname' : 'Joey',
        'lastname' : 'Doe',
        'picture_url' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVl9oeHxsqdBZ-0lJKKSM0NEIcac0bJtN7GA&usqp=CAU',
      },
      {
        'user_id' : '9',
        'firstname' : 'Jack',
        'lastname' : 'Doe',
        'picture_url' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29woM2pCbrauRfpGBg_AnFUuHFKQIwovD-Xz8vQ58PNQl6idY72L53gngFAvhLYXy0b4&usqp=CAU',
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