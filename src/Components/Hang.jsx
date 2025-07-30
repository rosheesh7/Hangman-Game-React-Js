import React, { useState } from "react";
import "../Styles/Hang.css";
import Gallow from "./Gallow";
import GameOver from "./GameOver.jsx";
const Hang = ({ incorrectGuessCount }) => {
  const isDead = incorrectGuessCount >= 8;

  return (
    <>
      <div className="hang-container">
        <Gallow />
        <div className={`body-container ${isDead ? "dead" : ""}`}>
          {incorrectGuessCount >= 1 && <div className="head"></div>}
          {incorrectGuessCount >= 2 && <div className="Neck"></div>}
          {incorrectGuessCount >= 3 && <div className="leftArm"></div>}
          {incorrectGuessCount >= 4 && <div className="rightArm"></div>}
          {incorrectGuessCount >= 5 && <div className="waist"></div>}
          {incorrectGuessCount >= 6 && <div className="leftLeg"></div>}
          {incorrectGuessCount >= 7 && <div className="rightLeg"></div>}
        </div>
      </div>
    </>
  );
};

export default Hang;
