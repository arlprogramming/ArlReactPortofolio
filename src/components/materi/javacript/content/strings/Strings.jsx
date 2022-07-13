import React from "react";
import "./strings.css";

const Strings = () => {

  return (
    <div className="materi__string">
      <h2 className="tittle__content">JAVASCRIPT STRINGS</h2>
      <div className="materi__content">
        <p>Di JavaScript, ada 3 tipe petik.</p>
        <ul>
          <li>
            <p>let str = "Hello";</p>
          </li>
          <li>
            <p>let str = 'Hello';</p>
          </li>
          <li>
            <p>let str = `Hello`; //bactick</p>
          </li>
        </ul>

        <p>
        Petik tunggal dan ganda merupakan petik “simpel”. Tak ada perbedaan antara mereka di JavaScript.
        Backtick merupakan petik “fungsional lanjutan”. Mereka memungkinkan kita mengembed variabel dan expresi ke dalam string dengan membungkus mereka.
        </p>
        
      </div>
    </div>
  );
};

export default Strings;
