import React, { useEffect, useRef, useState } from "react";
import dice1 from "../assets/images/dice_1.png";
import dice2 from "../assets/images/dice_2.png";
import dice3 from "../assets/images/dice_3.png";
import dice4 from "../assets/images/dice_4.png";
import dice5 from "../assets/images/dice_5.png";
import dice6 from "../assets/images/dice_6.png";
import { useNavigate } from "react-router-dom";

const GamePage = () => {
  const diceNo = [1, 2, 3, 4, 5, 6];
  const [number, setNumber] = useState(null);
  const [showRule, setShowRule] = useState(false);
  const [btnT, setBtnT] = useState(false);
  const btnRef = useRef(null);
  const [totalScore, setTotalScore] = useState(0);
  const [diceNum, setDiceNum] = useState(6);
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(e) {
      if (btnRef.current && !btnRef.current.contains(e.target)) {
        setNumber(null);
        setBtnT(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  function handleScore() {
    setTotalScore(totalScore + number);
  }

  return (
    <div className="min-h-screen w-full bg-white px-4 py-6 md:px-10 relative">

      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Score */}
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            {totalScore}
          </h1>
          <h4 className="text-lg sm:text-xl font-semibold">Total Score</h4>
        </div>

        {/* Number Selector */}
        <div className="flex flex-col gap-3 items-center md:items-end">
          <div className="flex flex-wrap justify-center md:justify-end gap-3" ref={btnRef}>
            {diceNo.map((num, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setNumber(num);
                  setBtnT(true);
                }}
                className={`px-4 py-2 border-2 font-bold cursor-pointer active:scale-95 
                ${number == num ? "bg-black text-white" : "border-black"}
                hover:shadow-md`}
              >
                {num}
              </div>
            ))}
          </div>
          <h1 className="text-sm sm:text-base font-bold">
            Select a number
          </h1>
        </div>
      </div>

      {/* CENTER SECTION */}
      <div className="flex flex-col items-center justify-center mt-10 gap-6">

        {/* Dice */}
        <div className="flex flex-col items-center gap-3">
          <img
            onClick={() => {
              if (btnT) {
                const random = Math.floor(Math.random() * 6) + 1;
                setDiceNum(random);

                if (random === number) {
                  handleScore();
                } else {
                  setTotalScore(totalScore - 2);
                }
              } else {
                alert("Please select a number first");
              }
            }}
            src={diceImages[diceNum - 1]}
            alt="dice"
            className="w-28 sm:w-32 md:w-40 cursor-pointer hover:scale-105 active:scale-95 transition"
          />
          <h1 className="text-sm sm:text-base font-semibold">
            Click on Dice to roll
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-3">
          <button
            className="border px-6 py-2 font-semibold hover:shadow-lg hover:scale-105 transition"
            onClick={() => setTotalScore(0)}
          >
            Reset Score
          </button>

          <button
            className="bg-black text-white px-6 py-2 font-semibold hover:shadow-lg hover:scale-105 transition"
            onClick={() => setShowRule(!showRule)}
          >
            {showRule ? "Hide Rules" : "Show Rules"}
          </button>

          {showRule && (
            <div className="bg-red-300/30 p-4 rounded max-w-md text-sm sm:text-base">
              <h1 className="font-bold mb-2">How to play</h1>
              <p>Select a number</p>
              <p>Click on dice</p>
              <p>If correct → you gain points</p>
              <p>If wrong → 2 points deducted</p>
            </div>
          )}
        </div>
      </div>

      {/* QUIT BUTTON */}
      <div className="fixed bottom-5 right-5">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-red-600 text-white rounded font-bold hover:scale-105 transition"
        >
          QUIT GAME
        </button>
      </div>
    </div>
  );
};

export default GamePage;