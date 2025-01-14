import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import QualityCheck from "./pages/QualityCheck";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quality-check" element={<QualityCheck />} />
      </Routes>
    </Router>
  );
}

export default App;
