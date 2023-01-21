import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "../Page/Header";
import Home from "../Page/Home";
import Partner from "../Page/Partner";

function Routing() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/partner" element={<Partner />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing;
