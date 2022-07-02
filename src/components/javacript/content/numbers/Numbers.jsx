import React from 'react'
import { useParams } from 'react-router-dom'

const Numbers = () => {
  const {numbers} = useParams();
  return (
    <div>
        <h2 className="tittle__content">JAVASCRIPT NUMBERS</h2>
        <div className="materi__content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur debitis aut aperiam minus tempora et in nemo atque quas voluptas, rem accusamus quod reprehenderit nisi pariatur deleniti non ratione? Molestias?
          </p>
        </div>
      </div>
  )
}

export default Numbers