import React from "react";
import { useState } from "react";
import './learnState.css'


const LearnState = () => {

  //Ini adalah STATE yang bernilai string kosong
  const [value, setValue] = useState(false)
  let title = 'Learning'
  const changeValue = () => {
    setValue(!value)
  }

  // const ClickButton = () => {
  //   // alert("Hallo, Button have click");
  //   setValue('Learning')
  // };

  const [visitor, setVisitor] = useState(0)



  return (
    <div className="materi__react">
      <h2 className="tittle__content">{!value ? "ReactJs State" : title}</h2>
      <div className="materi__content">
        <h2>in this step i will learning about STATE</h2>
        <p>first i will create 'Button', and if button is click will show Alert</p>

        <button className='btn btn-primary' onClick={() => changeValue()}>
          Ubah Navigasi
        </button>

        <p>and now i will create state, first i will import useState</p>
        <p>and here i will call the STATE, when button is click title page change to "Learning"</p>

        <div className="jumlah__pengunjung">
        <h3>Here i want create count visitor with State</h3>
        <p>Total visitor : {visitor} visitors</p>
        <button className="btn btn-primary" onClick={() => setVisitor(visitor+1)}>Count</button>
        </div>
        
      </div>
    </div>
  );
};

export default LearnState;
