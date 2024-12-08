import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import Contact from "./components/Pages/Contact";
import Career from "./components/Pages/Career";
import SingleServices from "./components/Pages/SingleServices";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/services" element={<Services/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/career" element={<Career/>}/>
          <Route exact path="/SingleServices" element={<SingleServices/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
