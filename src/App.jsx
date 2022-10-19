import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import Game from "./components/Game";
import Footer from "./components/Footer";

const App = () => {
  const [username, setUsername] = useState("");
  function handleNameChange(e) {
    e.preventDefault();
    setUsername(e.target.value);
  }
  return (
    <div className="App">
      <Header username={username} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home handleNameChange={handleNameChange} />}
          />
          <Route path="/game" username={username} element={<Game />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
