import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Style/Style.css'
import './Style/Responsive.css'
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Franchise from "./Pages/Franchise/Franchise";
import Career from "./Pages/Careers/Career";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "./Pages/TermsCondition/TermsConditions";
import Blog from "./Pages/Blogs/Blog";
import AdminPortal from "./Pages/AdminPage/AdminPortal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/about"  element={<About/>}/>
          <Route path="/franchise"  element={<Franchise/>}/>
          <Route path="/career"  element={<Career/>}/>
          <Route path="/privacy-policy"  element={<PrivacyPolicy/>}/>
          <Route path="/terms-conditions"  element={<TermsConditions/>}/>
          <Route path="/blog"  element={<Blog/>}/>
          <Route path="/admin-login"  element={<AdminPortal/>}/>

  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
