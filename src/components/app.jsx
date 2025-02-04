import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login"; 
import Dashboard from "./dashboard"; 

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* ✅ Default is Login */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ Dashboard Page */}
      </Routes>
    </Router>
  );
}
