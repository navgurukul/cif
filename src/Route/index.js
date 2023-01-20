import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "../Page/HomePage";
import Partner from "../Page/Partner";

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/partner" element={<Partner />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing;
