import React, { useState } from 'react'

import FavoriteEmpty from '../img/heart.png'
import FavoriteFilled from '../img/heart-filled.png'

const FavButton = () => {
  
  const [isFavorite, setIsFavorite] = useState(false)

  const onClick = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <div>
      { !isFavorite &&
        <img className='favorite-btn'src={FavoriteEmpty} onClick={onClick} alt='favorite'/>
      }
      {
        isFavorite &&
        <img className='favorite-btn'src={FavoriteFilled} onClick={onClick} alt='favorite'/>
      }
    </div>
  )
}

export default FavButton