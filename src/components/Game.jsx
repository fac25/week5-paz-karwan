import { useState } from "react";

const Game = () => {
  const [word, setWord] = useState("HELLO");

  return (
    <main>
      <section></section>

      <div className="">
        <section className="letters">
          {word.split("").map((letter) => {
            return <span>_</span>;
          })}
        </section>
        <section className="keyboard-layout">
          <div className="row-1">
            <span>Q</span>
            <span>W</span>
            <span>E</span>
            <span>R</span>
            <span>T</span>
            <span>Y</span>
            <span>U</span>
            <span>I</span>
            <span>O</span>
            <span>P</span>
          </div>
          <div className="row-2">
            <span>A</span>
            <span>S</span>
            <span>D</span>
            <span>F</span>
            <span>G</span>
            <span>H</span>
            <span>J</span>
            <span>K</span>
            <span>L</span>
          </div>
          <div className="row-3">
            <span>Z</span>
            <span>X</span>
            <span>C</span>
            <span>V</span>
            <span>B</span>
            <span>N</span>
            <span>M</span>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Game;
