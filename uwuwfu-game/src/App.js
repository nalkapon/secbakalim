// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tournament from "./pages/Tournament";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      {/* Her sayfada gözükecek Navbar */}
      <Navbar />

      {/* Route tanımları */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* /tournament/cities, /tournament/foods, /tournament/celebrities */}
        <Route path="/tournament/:category" element={<Tournament />} />
        {/* 404 benzeri durumlar için opsiyonel bir Route daha ekleyebilirsin */}
      </Routes>
    </Router>
  );
}

export default App;
