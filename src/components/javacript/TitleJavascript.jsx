import React from "react";
import { Link } from "react-router-dom";
import './titleJavascript.css'

// import { useState } from 'react'
// import Introduction from "../../components/javacript/content/introduction/Introduction";
// import Numbers from "../../components/javacript/content/numbers/Numbers";



const TitleJavascript = () => {
  //Untuk Link bisa juga menggunakan useState seperti dibawah ini
  // const [active, setActive] = useState("strings");

  // function getComponentActive() {
  //   if (active === "strings") return <Introduction />;
  //   if (active === "numbers") return <Numbers />;
  // }

  return (
  <div className="title_javascript">
      {/* dan menggunakan ini */}
      {/* <ul>
        <li onClick={() => setActive("strings")}>Home</li>
        <li onClick={() => setActive("numbers")}>About</li>
      </ul>
      <div>{getComponentActive()}</div> */}

    <h3><Link to='/javascript'>1.Strings</Link></h3>
    <h3><Link to='/javascript/numbers'>2.Numbers</Link></h3>
  </div>
      
   
  );
};

export default TitleJavascript;
