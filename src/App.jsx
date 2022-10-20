import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import data from "./data.json";

import Header from "./components/Header";
import Home from "./components/Home";
import Game from "./components/Game";
import Footer from "./components/Footer";

const App = () => {
  const [username, setUsername] = useState("");
  const random = Math.floor(Math.random() * data.words.length);
    const word = data.words[random].toUpperCase();

  const handlePlay = (e) => {
    e.preventDefault();
    setUsername(document.getElementById("name").value);
  };

  return (
    <div className="App">
      <Header username={username} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home handlePlay={handlePlay} username={username} />}
          />
          <Route path="/game" element={<Game word={word} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
