import React, { useEffect, useState } from "react";
import "../Styles/WordDisplay.css";

const WordDisplay = ({
  correctGuess,
  incorrectGuess,
  setCorrectGuess,
  setIncorrectGuess,
  incorrectGuessCount,
  setIncorrectGuessCount,
  setScore,
  setGameOver,
  wordToGuess,
  setWordToGuess,
  ChooseRandomWord,
}) => {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const letters = alphabets.split("");
  function handleLetterChange(letter) {
    console.log(wordToGuess);
    const wordArr = wordToGuess.toUpperCase().split("");
    if (wordArr.includes(letter)) {
      const newestGuess = [...correctGuess, letter];
      setCorrectGuess(newestGuess);

      let isComplete = wordArr.every((l) => newestGuess.includes(l));
      if (isComplete) {
        setTimeout(() => {
          setWordToGuess(ChooseRandomWord());
          setScore((s) => s + 1);
          setCorrectGuess([]);
          setIncorrectGuess([]);
          setIncorrectGuessCount(0);
        }, 1000);
      }
    } else {
      const newIncorrectCount = incorrectGuessCount + 1;
      setIncorrectGuess([...incorrectGuess, letter]);
      setIncorrectGuessCount(newIncorrectCount);

      if (newIncorrectCount >= 8) {
        setTimeout(() => {
          setGameOver(true);  
        }, 1000);
      }
    }
  }

  return (
    <>
      <div className="Word-Container">
        <div className="Blank-Container">
          <span>
            {wordToGuess.split("").map((letter, index) => {
              return (
                <span key={index}>
                  {correctGuess.includes(letter.toUpperCase())
                    ? letter.toUpperCase()
                    : "_"}
                </span>
              );
            })}
          </span>
        </div>

        <div className="letter-btns">
          {letters.map((letter, index) => {
            const uppercasedLetter = letter.toUpperCase();
            return (
              <button
                key={index}
                className={`
                    ${
                      correctGuess.includes(uppercasedLetter)
                        ? "is-correct"
                        : ""
                    } 
                    ${
                      incorrectGuess.includes(uppercasedLetter)
                        ? "is-incorrect"
                        : ""
                    }
                    `}
                disabled={
                  correctGuess.includes(uppercasedLetter) ||
                  incorrectGuess.includes(uppercasedLetter) ||
                  incorrectGuessCount >= 8
                }
                onClick={() => handleLetterChange(letter.toUpperCase())}
              >
                {letter.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WordDisplay;
