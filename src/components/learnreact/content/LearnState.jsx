import React from "react";
import { useState } from "react";
import './learnState.css'


const LearnState = () => {

  //Ini adalah STATE yang bernilai string kosong
  const [value, setValue] = useState("")

  const ClickButton = () => {
    // alert("Hallo, Button have click");
    setValue('Learning')
  };

  return (
    <div className="materi__react">
      <h2 className="tittle__content">{!value ? "ReactJs State" : value}</h2>
      <div className="materi__content">
        <h2>in this step i will learning about STATE</h2>
        <p>first i will create 'Button', and if button is click will show Alert</p>

        <button className='btn btn-primary' onClick={() => ClickButton()}>
          Ubah Navigasi
        </button>

        <p>and now i will create state, first i will import useState</p>
        <p>and here i will call the STATE, when button is click title page change to "Learning"</p>
      </div>
    </div>
  );
};

export default LearnState;
