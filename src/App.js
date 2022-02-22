import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Test from "./Test";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <Test /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route element={<Navigate replace to="/" />} />

        {/* <Navigate to="/" /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
