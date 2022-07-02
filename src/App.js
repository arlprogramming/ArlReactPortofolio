import React from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Aboutme from "./components/about/Aboutme";
import Contact from "./components/contact/Contact";
import LearnJavascript from "./components/javacript/LearnJavascript";
import LearnReact from './components/learnreact/LearnReact'
import Content from "./components/content/Content";



const App = () => {
  return (
  <Router>
    <>
      <Nav />
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<Aboutme/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/javascript" element={<LearnJavascript/>}></Route>
          <Route path="/reactjs" element={<LearnReact/>}></Route>
          <Route path="/content" element={<Content/>}></Route>
      </Routes>
    </>
  </Router>
  );
};

export default App;
