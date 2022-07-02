import React from "react";
import { Link } from "react-router-dom";
import './titleJavascript.css'



const TitleJavascript = () => {

  return (
  <div className="title_javascript">
    <h3><Link to='/javascript'>1.Strings</Link></h3>
      <h3><Link to='/javascript/numbers'>2.Numbers</Link></h3>
  </div>
      
   
  );
};

export default TitleJavascript;
