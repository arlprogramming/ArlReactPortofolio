import React from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Nav from "./components/menubar/nav/Nav";
import Home from "./components/menubar/home/Home";
import Aboutme from "./components/menubar/about/Aboutme";
import Contact from "./components/menubar/contact/Contact";
import LearnJavascript from "./components/materi/javacript/LearnJavascript";
import LearnReact from './components/materi/learnreact/LearnReact'
import Content from "./components/menubar/content/Content";


import Strings from "./components/materi/javacript/content/strings/Strings";
import Numbers from "./components/materi/javacript/content/numbers/Numbers";
import LearnState from "./components/materi/learnreact/content/LearnState";
import LearnDom from "./components/materi/javacript/content/dom/LearnDom";
import LearnVariable from "./components/materi/javacript/content/variable/LearnVariable";



const App = () => {
  return (
  <Router>
    <>
      <Nav />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<Aboutme/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="javascript/" element={<LearnJavascript/>}>
            <Route path="strings" element={<Strings/>}/>
            <Route path="numbers" element={<Numbers/>}/>
            <Route path="dom" element={<LearnDom/>}/>
            <Route path="variable" element={<LearnVariable/>}/>
          </Route>
          <Route path="reactjs" element={<LearnReact/>}>
            <Route path="/reactjs" element={<LearnState/>}/>
          </Route>
          <Route path="/content" element={<Content/>}/>
      </Routes>
    </>
  </Router>
  );
};

export default App;
