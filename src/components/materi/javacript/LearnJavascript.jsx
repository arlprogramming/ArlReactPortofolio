import React from "react";
// import { Routes, Route, useParams } from "react-router-dom";
import "./learn_javascript.css";
import { Outlet } from "react-router-dom";
import TitleJavascript from "./TitleJavascript";

// import { useState } from "react";
// import Strings from "./content/strings/Strings";
// import Numbers from "./content/numbers/Numbers";
// import LearnDom from "./content/dom/LearnDom";


const LearnJavascript = () => {
  // const [active, setActive] = useState("strings");

  // function getComponentActive() {
  //   if (active === "strings") return <Strings />;
  //   if (active === "numbers") return <Numbers />;
  //   if (active === "dom") return <LearnDom />;
  // }
  return (
    <div className="page__javascript">
      <div className="page__left">
        <h2 className="title">Hello, in this page</h2>
        <p className="title">i wanna learning about Javascript</p>

        <div className="tittle__learning">
          <TitleJavascript/>
          {/* <ul>
            <li onClick={() => setActive("strings")}>1. Home</li>
            <li onClick={() => setActive("numbers")}>2. About</li>
            <li onClick={() => setActive("dom")}>3. DOM</li>
          </ul> */}
        </div>
      </div>

      <div className="page__right">
        <div className="content">
          <Outlet />
          {/* {getComponentActive()} */}
        </div>
      </div>
    </div>
  );
};

export default LearnJavascript;
