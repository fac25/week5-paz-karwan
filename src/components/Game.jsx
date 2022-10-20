import { useEffect, useState } from "react";

const Game = ({word}) => {

  // generate random word
  const [letters, setLetters] = useState(Array(word.length).fill(null));
  const [chance, setChance] = useState(8);
  const [isWinner, setIsWinner] = useState(false);
  const [isLoser, setIsLooser] = useState(false);
  const [playAgain, setPlayAgain] = useState(false);

  let checkLetters = letters;

  const splitWord = word.split("");
  console.log(splitWord)

  const handleChange = (e) => {
    e.preventDefault();
    e.target.disabled = true;

    if (!word.includes(e.target.textContent) && chance > 0) {
      setChance(chance - 1);
    }

    splitWord.filter((letter, index) => {
      if (letter === e.target.textContent) {
        checkLetters[index] = letter;
        return setLetters([...checkLetters]);
      }
    });
  };

  const disabledAllButtons = (bool) => {
    const allButtons = document
      .getElementById("keyboard")
      .querySelectorAll("button");
    allButtons.forEach((button) => {
      button.disabled = bool;
    });
    bool ? setPlayAgain(true) : setPlayAgain(false);
  };
  const handlePlayAgain = (e) => {
    e.preventDefault();
    setChance(8);
    setLetters([""]);
    setIsLooser(false);
    setIsWinner(false);
    disabledAllButtons(false);
  };
  useEffect(() => {
    if (letters.every((letter) => letter)) {
      setIsWinner(true);
      disabledAllButtons(true);
    }

    if (chance === 0) {
      setIsLooser(true);
      disabledAllButtons(true);
    }
  }, [letters, chance]);

  return (
    <main>
      <p>{word}</p>
      <section>
        {isWinner ? (
          <h3>You won!</h3>
        ) : isLoser ? (
          <h3>You lost!</h3>
        ) : (
          <p>You have {chance} tries left </p>
        )}
      </section>

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
        <section
          className="keyboard-layout"
          id="keyboard"
          onClick={handleChange}
        >
          <div className="row-1">
            <button>Q</button>
            <button>W</button>
            <button>E</button>
            <button>R</button>
            <button>T</button>
            <button>Y</button>
            <button>U</button>
            <button>I</button>
            <button>O</button>
            <button>P</button>
          </div>
          <div className="row-2">
            <button>A</button>
            <button>S</button>
            <button>D</button>
            <button>F</button>
            <button>G</button>
            <button>H</button>
            <button>J</button>
            <button>K</button>
            <button>L</button>
          </div>
          <div className="row-3">
            <button>Z</button>
            <button>X</button>
            <button>C</button>
            <button>V</button>
            <button>B</button>
            <button>N</button>
            <button>M</button>
          </div>
        </section>
      </div>
      {playAgain ? (
        <div className="modal">
          <h3>Want to play more?</h3>
          <button onClick={handlePlayAgain}>Play Again</button>
        </div>
      ) : (
        ""
      )}
    </main>
  );
};

export default Game;
