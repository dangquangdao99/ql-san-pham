import React from "react";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Update from "./Pages/Update";
import Delete from "./Pages/Delete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/delete" element={<Delete />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
