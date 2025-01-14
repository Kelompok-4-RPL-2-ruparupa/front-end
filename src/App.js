import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";  
import Sidebar from "./components/Sidebar";  
function App() {
  return (
    <Router>
      <Sidebar />
      <Home />
    </Router>
  );
}

export default App;