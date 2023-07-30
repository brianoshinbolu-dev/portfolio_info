import React from "react";
import "./App.css";
import { Dashboard } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Contact, Projects, Skills } from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="dashboard">
          <Dashboard />
        </div>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
