import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import EventDisplayAll from "./pages/EventDisplayAllPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/events" element={<EventDisplayAll />} />
      </Routes>
    </div>
  );
}

export default App;
