import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "../Page/Footer";
import Header from "../Page/header/index";
import Home from "../Page/Home";
import Partner from "../Page/Partner";
import Faq from "../Page/Faq/Faq";
import JoinUs from "../Page/JoinUs/JoinUs";

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/partner" element={<Partner />} />
          <Route exact path="/faqs" element={<Faq />} />
          <Route exact path="/join" element={<JoinUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Routing;
