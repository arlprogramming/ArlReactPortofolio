import React from 'react'
import { Link } from "react-router-dom";

const TitleReact = () => {
  return (
    <div className="title_react">
      {/* dan menggunakan ini */}
      {/* <ul>
        <li onClick={() => setActive("strings")}>Home</li>
        <li onClick={() => setActive("numbers")}>About</li>
      </ul>
      <div>{getComponentActive()}</div> */}

    <h3><Link to='/reactjs'>1.State</Link></h3>
    {/* <h3><Link to='/javascript/numbers'>2.Numbers</Link></h3> */}
  </div>
  )
}

export default TitleReact