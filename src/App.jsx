import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import db from "./data.json";

import Header from "./components/Header";
import Home from "./components/Home";
import Game from "./components/Game";
import Footer from "./components/Footer";

const App = () => {
  const [username, setUsername] = useState("");
  const data = db.words;
  const [word, setWord] = useState("");
  const random = Math.floor(Math.random() * data.length);

  const handlePlay = (e) => {
    e.preventDefault();
    setUsername(document.getElementById("name").value);
    setWord(data[random].toUpperCase());
  };

  const randomWord = () =>{
    setWord(data[random].toUpperCase());
  }

  return (
    <div className="main-container">
      <Header username={username} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home handlePlay={handlePlay} username={username} />}
          />
          <Route path="/game" element={<Game word={word} randomWord={randomWord}/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
