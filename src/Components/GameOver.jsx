import React from "react";
import "../Styles/GameOver.css";

const GameOver = ({ onRestart, score }) => {
  return (
    <div className="game-over-container">
      <h1 className="game-over-title">Game Over</h1>
      <p className="game-over-score">Your Score: {score}</p>
      <button className="restart-btn" onClick={onRestart}>
        Play Again
      </button>
    </div>
  );
};

export default GameOver;
