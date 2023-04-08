import React from "react";
import "./App.css";
import Header from "../Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Podcasts from "../Podcasts";
import Home from "../Home";
import MovieList from "../movie/MovieList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Podcasts" element={<Podcasts />} />
          <Route path="/movie/MovieList" element={<MovieList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
