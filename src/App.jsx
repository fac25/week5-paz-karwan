import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import db from "./data.json";

import Header from "./components/Header";
import Home from "./components/Home";
import Game from "./components/Game";
import Footer from "./components/Footer";

const App = () => {
  const data = db.words;
  const [username, setUsername] = useState("");
  const [word, setWord] = useState("");

  const random = Math.floor(Math.random() * data.length);

  const randomWord = () => {
    setWord(data[random].toUpperCase());
  };

  const handlePlay = (e) => {
    e.preventDefault();
    setUsername(document.getElementById("name").value);
    setWord(data[random].toUpperCase());
  };

  return (
    <div className="main-container">
      <Header username={username} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home handlePlay={handlePlay} username={username} />}
          />
          <Route
            path="/game"
            element={<Game word={word} randomWord={randomWord} />}
          />
          <Route path="*" element={<div className="error-page">
            <h2>Oops! 404 Error</h2>
            <h3>This page does not exist!</h3>
          </div>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
