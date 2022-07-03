import React from "react";
import "./strings.css";

const Strings = () => {
  return (
    <div className="materi__string">
      <h2 className="tittle__content">JAVASCRIPT STRINGS</h2>
      <div className="materi__content">
        <p>
          In JavaScript, Strings are values made up of text and can contain
          letters, numbers, symbols, punctuation, and even emojis!
        </p>
        <br />
        <h2>Single and Double Quotes in JavaScript Strings</h2>

        <p>Strings in JavaScript are contained within :</p>

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
          Backticks are “advanced functional” quotes. They support us embedding
          variables and expressions into strings by wrapping them in <br/>
          <code>
            `hello $<span>{}</span>`
          </code>
          , for example :
        </p>

        <p>
          {/* let name = "John"; // mengembed satu variabel <br />
          alert( `Hello, ${name}!`); // Hello, John! // mengembed expresi <br />
          alert( `the result is ${1 + 2}` ); // hasilnya 3 <br /> */}
        </p>
      </div>
    </div>
  );
};

export default Strings;
