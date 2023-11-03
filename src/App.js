import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Style/Style.css'
import './Style/Responsive.css'
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
