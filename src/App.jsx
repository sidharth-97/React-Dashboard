import React from "react";
import { Routes, Route } from "react-router-dom";
import EventRequests from "./components/pages/EventRequests";
import NewRequest from "./components/pages/NewRequest";
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<EventRequests />} /> 
      <Route path="/new-requests" element={<NewRequest />} />
    </Routes>
  );
}

export default App;
