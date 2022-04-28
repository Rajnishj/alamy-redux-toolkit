import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ImageCollection from "./components/ImageCollection/ImageCollection";
import ImageDetail from "./components/imagedetail/ImageDetail";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/image" element={<ImageCollection />} />
        <Route path="/image/:id" element={<ImageDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
