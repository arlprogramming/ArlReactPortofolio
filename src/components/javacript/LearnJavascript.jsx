import React from "react";
import { Routes, Route } from "react-router-dom";
import "./learn_javascript.css";

import Introduction from "./content/introduction/Introduction";
import TitleJavascript from "./TitleJavascript";

const LearnJavascript = () => {
  return (
    <div className="page__javascript">

        <div className="page__left">
          <h2>Hello, in this page</h2>
          <p>i wanna learning about Javascript</p>

          <div className="tittle__learning">
            <TitleJavascript />
            
          </div>
        </div>

        <div className="page__right">
          <div className="content">

              <Introduction />

          </div>
        </div>

    </div>
  );
};

export default LearnJavascript;
