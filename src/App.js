import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Aboutme from "./components/about/Aboutme";
import LearnJavascript from "./components/javacript/LearnJavascript";

const App = () => {
  return (
    <>
      
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/about" element={<Aboutme />} />
             <Route path="/javascript" element={<LearnJavascript />} />
          {/*<Route path="/contact" element={<Contact />}/>
          <Route path="/intro" element={<Intro />}/>
          <Route path="/movie" element={<Movie />}/>
          <Route path="/variable" element={<Variable />}/>
          <Route path="/map" element={<Map />}/>
          <Route path="/usestate" element={<State />}/>
          <Route path="/useeffect" element={<Useeffect />}/>
          <Route path="/filter" element={<Filter />}/> 
          <Route path="*" element={<NotFound />} />*/}
          </Routes>
      
    </>
  );
};

export default App;
