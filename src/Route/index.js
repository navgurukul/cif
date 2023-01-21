import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../Page/Home";
import Partner from "../Page/Partner";
import Faq from "../Page/Faq/Faq";

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/partner" element={<Partner />} />
          <Route exact path="/faqs" element={<Faq />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing;
