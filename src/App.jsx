import React, { useState } from "react";
import Header from "./Components/Header.jsx";
import WordDisplay from "./Components/WordDisplay.jsx";
import Hang from "./Components/Hang.jsx";
import GameOver from "./Components/GameOver.jsx";
import { words } from "./Components/words.js";
import "./App.css";

const App = () => {
  const [incorrectGuessCount, setIncorrectGuessCount] = useState(0);
  const [score, setScore] = useState(0);
  const [gameover, setGameOver] = useState(false);
  const [wordToGuess, setWordToGuess] = useState(() => ChooseRandomWord());
  const [correctGuess, setCorrectGuess] = useState([]);
  const [incorrectGuess, setIncorrectGuess] = useState([]);

  function ChooseRandomWord() {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
  }

  function onRestart() {
    setScore(0);
    setIncorrectGuessCount(0);
    setCorrectGuess([]);
    setIncorrectGuess([]);
    setWordToGuess(() => ChooseRandomWord());
    setGameOver(false);
  }

  return (
    <>
      <Header />
      <div className="Game-Stats">
        <span>Score: {score}</span>
        <span>Guess Remaining: {8 - incorrectGuessCount}</span>
      </div>
      {gameover ? (
        <GameOver onRestart={onRestart} score={score} />
      ) : (
        <main className="main-container">
          <WordDisplay
            incorrectGuessCount={incorrectGuessCount}
            setIncorrectGuessCount={setIncorrectGuessCount}
            setScore={setScore}
            setGameOver={setGameOver}
            wordToGuess={wordToGuess}
            setWordToGuess={setWordToGuess}
            correctGuess={correctGuess}
            incorrectGuess={incorrectGuess}
            setCorrectGuess={setCorrectGuess}
            setIncorrectGuess={setIncorrectGuess}
            ChooseRandomWord={ChooseRandomWord}
          />
          <Hang
            incorrectGuessCount={incorrectGuessCount}
            setIncorrectGuessCount={setIncorrectGuessCount}
          />
        </main>
      )}
    </>
  );
};

export default App;
