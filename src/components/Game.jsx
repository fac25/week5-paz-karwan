import { useState } from "react";

const Game = () => {
  const [word, setWord] = useState("HELLO");
  const [letters, setLetters] = useState(new Array(word.length).fill(""));

  const splitWord = word.split("");

  const handleChange = (e) => {
    e.preventDefault();

    splitWord.map((letter, index) => {
      if (!letters[index] && letter === e.target.textContent ) {
        setLetters([...letters, (letters[index] = e.target.textContent)]);
      } else {
        setLetters([...letters]);
      }
    });
  };

  return (
    <main>
      <section></section>

      <div className="">
        <section className="letters">
          {letters.map((letter, index) => {
            return (
              <span className="test" key={index}>
                {letter}
              </span>
            );
          })}
        </section>
        <section className="keyboard-layout" onClick={handleChange}>
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
