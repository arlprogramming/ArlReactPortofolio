import React from "react";
import { Link } from "react-router-dom";
import "./titleJavascript.css";

// import { useState } from "react";
// import Strings from "./content/strings/Strings";
// import Numbers from "./content/numbers/Numbers";
// import LearnDom from "./content/dom/LearnDom";

const TitleJavascript = () => {
  //Untuk Link bisa juga menggunakan useState seperti dibawah ini
  // const [active, setActive] = useState("strings");

  // function getComponentActive() {
  //   if (active === "strings") return <Strings />;
  //   if (active === "numbers") return <Numbers />;
  //   if (active === "dom") return <LearnDom />;
  // }

  return (
    <div className="title_javascript">
      {/* dan menggunakan ini 
       <ul>
        <li onClick={() => setActive("strings")}>Home</li>
        <li onClick={() => setActive("numbers")}>About</li>
        <li onClick={() => setActive("dom")}>DOM</li>
      </ul> 
       <div>{getComponentActive()}</div> */}

      <Link to="strings"><h2>1.Strings</h2></Link>
      <Link to="numbers"><h2>2.Numbers</h2></Link>
      <Link to="dom"><h2>3.DOM</h2></Link>
    </div>
  );
};

export default TitleJavascript;
