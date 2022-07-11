import React from "react";
import './learnDom.css'

const LearnDom = () => {

  // const text = document.getElementById("text").innerHTML = 'hello'
  
  return (
    <div className="materi__dom">
      <h2 className="tittle__dom">JAVASCRIPT DOM </h2>
      <div className="materi__dom">
          <h3>To get element in javascript :</h3>
          <ul>
            <li>1. getElementById</li>
            <li>2. getElemenetByClassName</li>
            <li>3. getElemenetByName</li>
            <li>4. getElemenetByClassTaqName</li>
            <li>5. getElemenetByClassTaqNameNS</li>
          </ul>
          <p>Ex : " document.getElemenetById("Text") "</p>
      </div>
    </div>
  );
};

export default LearnDom;
