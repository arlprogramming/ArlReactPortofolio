import React from "react";
// import { Routes, Route, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./learn_javascript.css";
import TitleJavascript from "./TitleJavascript";

// import Introduction from "./content/introduction/Introduction";
// import TitleJavascript from "./TitleJavascript";

const LearnJavascript = () => {
  // let {Title} = useParams();
  return (
    <div className="page__javascript">

        <div className="page__left">
          <h2 className="title">Hello, in this page</h2>
          <p className="title">i wanna learning about Javascript</p>
          

          <div className="tittle__learning">
            <TitleJavascript/>
            {/* <h3><Link to='/javascript'>1.Strings</Link></h3>
            <h3><Link to='/javascript/numbers'>2.Numbers</Link></h3> */}
          </div>
        </div>

        <div className="page__right">
          <div className="content">
              <Outlet />
          </div>
        </div>

    </div>
  );
};

export default LearnJavascript;
