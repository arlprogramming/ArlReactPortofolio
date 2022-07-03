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

import Strings from "./components/javacript/content/strings/Strings";
import Numbers from "./components/javacript/content/numbers/Numbers";



const App = () => {
  return (
  <Router>
    <>
      <Nav />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<Aboutme/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="javascript" element={<LearnJavascript/>}>
            <Route path="/javascript" element={<Strings/>}/>
            <Route path=":numbers" element={<Numbers/>}/>
          </Route>
          <Route path="/reactjs" element={<LearnReact/>}/>
          <Route path="/content" element={<Content/>}/>
      </Routes>
    </>
  </Router>
  );
};

export default App;
