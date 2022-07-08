import React from 'react'
import './movie.css'

import Poto__Movie from '../../../content/assets/movie__card.jpg'
import Popup from '../popup/Popup'


const MoviePage = () => {
  return (
    <div className='card__container' style={{ width: '18rem' }}>
      <img className='card__image' src={Poto__Movie} alt="" />
      <div className='body__card'>
        <div className='card__title'><h2>Movie</h2></div>
        <div className='card__text'>
          <p>About Web Movie</p>
        </div>
        <Popup/>
      </div>
    </div>
  )
}

export default MoviePage