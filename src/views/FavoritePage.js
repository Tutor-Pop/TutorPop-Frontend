import React from 'react'
import { Container } from 'reactstrap'
import CardList from '../components/CardList'

const FavoritePage = () => {

  const favoriteCourse = [
    {
      'course_id' : '1',
      'course_name' : 'High School Mathematics',
      'course_description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet semper mollis. Cras commodo ullamcorper sapien, eget molestie ligula accumsan quis.',
      'course_price' : '2500฿',
      'school_name' : 'School 1',
      'school_address' : '123 Street, Bangkok'
    },
    {
      'course_id' : '2',
      'course_name' : 'Gordey Ramson Ultimate Cooking Course',
      'course_description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet semper mollis. Cras commodo ullamcorper sapien, eget molestie ligula accumsan quis.',
      'course_price' : '5000฿',
      'school_name' : 'School 2',
      'school_address' : '123 Street, Bangkok'
    },
    {
      'course_id' : '3',
      'course_name' : 'AP Calculus',
      'course_description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet semper mollis. Cras commodo ullamcorper sapien, eget molestie ligula accumsan quis.',
      'course_price' : '3000฿',
      'school_name' : 'School 3',
      'school_address' : '123 Street, Bangkok'
    },
    {
      'course_id' : '4',
      'course_name' : 'Basic Baking 101',
      'course_description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet semper mollis. Cras commodo ullamcorper sapien, eget molestie ligula accumsan quis.',
      'course_price' : '5500฿',
      'school_name' : 'School 4',
      'school_address' : '123 Street, Bangkok'
    },
    {
      'course_id' : '4',
      'course_name' : 'Calculus I, II, III',
      'course_description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet semper mollis. Cras commodo ullamcorper sapien, eget molestie ligula accumsan quis.',
      'course_price' : '12500฿',
      'school_name' : 'School 5',
      'school_address' : '123 Street, Bangkok'
    },
  ]

  return (
    <div className='favorite-page'>
      <Container className='favorite-page-container'>
        <h1>Your Favorite Course</h1>
        <CardList
          cardType='course'
          cardData={favoriteCourse}
          toggleFavorite={true}
        />
      </Container> 
    </div>
  )
}

export default FavoritePage