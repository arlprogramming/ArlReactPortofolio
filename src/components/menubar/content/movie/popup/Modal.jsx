import React from 'react'
import './modal.css'

import Movie from '../Movie/Movie'

const Modal = ({open, onClose}) => {
  //jika open bukan true adalah null
  if (!open) return null
  return (
    <div className='modal'>
      <div className="overlay">
      <p onClick={onClose}>X</p>
        <div className="modal__content">
          
            <Movie/>
          
        </div>
      </div>
    </div>
  )
}

export default Modal