import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from "./customer";
import Home from "./Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route path="customer" element={<Customer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
