import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Landing from "./components/login/Landing";
import RequireAuth from "./components/login/RequireAuth";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer position="bottom-right" hideProgressBar />
      <Router>
        <Routes>
          <Route
            path="/about"
            element={
              <RequireAuth>
                <About />
              </RequireAuth>
            }
          />
          <Route
            path="/products"
            element={
              <RequireAuth>
                <Products />
              </RequireAuth>
            }
          />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Landing isUserLoggedIn={false} />} />
          <Route path="/" element={<Landing isUserLoggedIn={false} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
