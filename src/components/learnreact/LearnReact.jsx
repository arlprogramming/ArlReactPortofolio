import React from 'react'
import { Outlet } from "react-router-dom";
import TitleReact from './TitleReact'
import './learnreact.css'

const LearnReact = () => {
  return (
    <div className="page__react">

        <div className="page__left">
          <h2 className="title">Hello, in this page</h2>
          <p className="title">i wanna learning about ReactJS</p>
          

          <div className="tittle__learning">
            <TitleReact/>
          </div>
        </div>

        <div className="page__right">
          <div className="content">
              <Outlet />
          </div>
        </div>

    </div>
  )
}

export default LearnReact
