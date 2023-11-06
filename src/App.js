import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Style/Style.css'
import './Style/Responsive.css'
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Franchise from "./Pages/Franchise/Franchise";
import Career from "./Pages/Careers/Career";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/about"  element={<About/>}/>
          <Route path="/franchise"  element={<Franchise/>}/>
          <Route path="/career"  element={<Career/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
