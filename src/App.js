import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Editor from "./Editor";
import Login from "./LogPage";
import ChatGPT from "./API/ChatGPT";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/editor/:pageID" element={<Editor />} />
      </Routes>
    </Router>
  );
}

export default App;

