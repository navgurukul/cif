import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "../Page/Footer";
import Header from "../Page/Header";
import Home from "../Page/Home";
import Partner from "../Page/Partner";

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/partner" element={<Partner />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Routing;
