import React from 'react'
import { Button } from 'reactstrap'
import CourseCard from './CourseCard'

const CardList = ({ cardType='course',
                    cardData=[], 
                    createCourseOption=false, 
                    toggleProgress=false, 
                    toggleFavorite=false}) => {
  
  return (
    <div className='card-list-box'>
      {cardData.map((card) => 
          <CourseCard 
            cardType={cardType}
            courseDetail={{
              course_id: card.course_id,
              course_name: card.course_name,
              type: card.type,
              course_description: card.course_description,
              course_price: card.course_price,
              school_name: card.school_name,
              school_address: card.school_address,
              teachers: card.teachers,
              course_progress: card.course_progress,
              thumbnail_url: card.thumbnail_url
            }}
            schoolDetail={{
              school_id: card.school_id,
              name: card.name,
              description: card.description,
              address: card.address
            }}
            toggleProgress={toggleProgress}
            toggleFavorite={toggleFavorite} 
          />
        )
      }
      { createCourseOption &&
        <div>
          <Button
                  className="create-course-btn"
                  color="primary"
                  size="md"
                >
                  Create New Course
          </Button>
        </div>
      }
    </div>
  )
}
  
export default CardList