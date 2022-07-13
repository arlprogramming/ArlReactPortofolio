import React from "react";
import './learnDom.css'

import Nintendo1 from '../dom/assets/blue.jpg'
import Nintendo2 from '../dom/assets/green.jpg'
import Nintendo3 from '../dom/assets/red.jpg'



const LearnDom = () => {

  const ChangeText = () =>{
     document.getElementById("text").innerHTML = 'Hello Guys'
  }

  const valueAtrribut1 = () => {
    document.getElementById("nintendo").src = Nintendo1
  }

  const valueAtrribut2 = () => {
    document.getElementById("nintendo").src = Nintendo2
  }

  const valueAtrribut3 = () => {
    document.getElementById("nintendo").src = Nintendo3
  }


  return (
    <div className="materi__dom">
      <h2 className="tittle__dom">JAVASCRIPT DOM </h2>
      <div className="materi__dom">
          <h3>Beberapa contoh getElement di Javascript :</h3>
          <ul>
            <li>1. getElementById</li>
            <li>2. getElemenetByClassName</li>
            <li>3. getElemenetByName</li>
            <li>4. getElemenetByClassTaqName</li>
            <li>5. getElemenetByClassTaqNameNS</li>
          </ul>
          <p>Ex : " document.getElemenetById("Text") "</p>
          <p>Ex untuk merubah value = document.getElemenetById("Text").innerHTML = "value"</p>

          <div className="changeText">
            <h3 id="text">Hello</h3>
            <button className="btn btn-primary" onClick={ChangeText}>
              Change Text
            </button>
          </div>
          

          <h3>Merubah Atribut</h3>
          <p>Ex. document.getElementById("nintendo").src = <i>Attribut baru</i></p>
          <div className="nintendoImg">

            <img id="nintendo" src={Nintendo2} alt="nintendo" />

            <div className="btnDiv">
              <button style={{background : "#3f5da8"}} className="btn btn-primary" onClick={valueAtrribut1}> Blue </button>
              <button style={{background : "#01a5a7"}} className="btn btn-primary" onClick={valueAtrribut2}> Green </button>
              <button style={{background : "#f27a7b"}} className="btn btn-primary" onClick={valueAtrribut3}> Red </button>
            </div>
            
          </div>

          <p>berikut DOM untk merubah css di javascript : <br/>

            document.getElementById("<i>NamaIdelement</i>").style.color = <i>"<u>warna color yang dipilih</u>"</i><br/>
            document.getElementById("<i>NamaIdelement</i>").style.fontSize = <i>"ukuran font</i>
          </p>
          
      </div>
    </div>
  );
};

export default LearnDom;
