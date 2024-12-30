import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CreatePostForm from "./components/CreatePostForm";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePostForm />} />
    </Routes>
  </Router>
);

export default App;
