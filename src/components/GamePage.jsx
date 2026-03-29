import React, { useEffect, useRef } from "react";
import dice1 from "../assets/images/dice_1.png";
import dice2 from "../assets/images/dice_2.png";
import dice3 from "../assets/images/dice_3.png";
import dice4 from "../assets/images/dice_4.png";
import dice5 from "../assets/images/dice_5.png";
import dice6 from "../assets/images/dice_6.png";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const GamePage = () => {
  const diceNo = [1, 2, 3, 4, 5, 6];
  const [number, setNumber] = useState(null);
  const [showRule, setShowRule] = useState(false);
  const [btnT, setBtnT] = useState(false);
  const btnRef = useRef(null);
  const [totalScore, setTotalScore] = useState(0);
  const [diceNum, setDiceNum] = useState(6);
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  const navigate = useNavigate()

  useEffect(() => {
    function handleClickOutside(e) {
      if (btnRef.current && !btnRef.current.contains(e.target)) {
        setNumber(null);
        setBtnT(false);
        console.log(number);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function handleScore() {
    setTotalScore(totalScore + number);
  }

  return (
    <>
      <div className="h-screen w-screen bg-[#ffffff] p-10 relative">
        <div className=" w-full h-28 flex justify-between">
          <div className=" flex flex-col justify-center items-center">
            <h1 className="text-7xl  font-bold">{totalScore}</h1>
            <h4 className="text-2xl font-semibold">Total Score</h4>
          </div>
          <div className="">
            <div className="flex flex-col gap-4">
              <div className="flex gap-5" ref={btnRef}>
                {diceNo.map((num, idx) => {
                  return (
                    <div
                      onClick={() => {
                        setNumber(num);
                        setBtnT(true);
                        console.log("num is: ", num);
                      }}
                      key={idx}
                      className={`px-5 py-3 border-2 font-bold  hover:border-bs-gray-3 hover:shadow-xs hover:shadow-black cursor-pointer active:scale-95  border-zinc-950 w-fit ${number == num ? "bg-black text-amber-50" : ""} `}
                    >
                      {num}
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-end">
                <h1 className="text-xl font-bold">Select a number</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <img
              onClick={() => {
                if (btnT) {
                  const random = Math.floor(Math.random() * 6) + 1;
                  setDiceNum(random);
                  console.log("dice Num is: ", random);
                  if (random === number) {
                    return handleScore();
                  } else if (btnT && random) {
                    setTotalScore(totalScore - 2);
                  }
                } else {
                  alert("Please select a no. between 1 to 6");
                }
              }}
              src={diceImages[diceNum - 1]}
              alt=""
              className="w-40 h-40 cursor-pointer hover:scale-105 active:scale-95 "
            />
            <h1 className="font-semibold ">Click on Dice to roll</h1>
          </div>

          <div className="flex flex-col items-center gap-2">
            <h1
              className="cursor-pointer rounded border px-8 py-1 font-semibold hover:shadow-lg hover:shadow-black/30 hover:scale-105 transition-all duration-200 ease-in-out "
              onClick={() => {
                setTotalScore(0);
              }}
            >
              Reset Score
            </h1>
            <h1
              className="cursor-pointer active:scale-95  rounded px-8 py-1 font-semibold bg-black hover:shadow-lg hover;shadow-black/30 hover:scale-105 transition-all duration-200 ease-in-out text-white"
              onClick={() => {
                setShowRule(!showRule);
              }}
            >
              {showRule ? "Hide Rules" : "Show Rules"}
            </h1>
            {showRule && (
              <div className="bg-red-300/30 p-5 flex flex-col  gap-3">
                <div>
                  <h1 className="font-bold ">How to play a Dice game</h1>
                </div>
                <div>
                  <h1>Select a number</h1>
                  <h1>Click on dice image</h1>
                  <h1>
                    After click on dice if selected number is equal to the dice
                    numer you will get same point as dice{" "}
                  </h1>
                  <h1>If you get wrong guess then 2 point will we deducted</h1>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="absolute bottom-30 right-30 px-5 py-2 bg-red-600 rounded font-bold cursor-pointer hover:shadow-lg hover:scale-105 hover:shadow-red-600/30 " onClick={()=>{
            navigate("/")
        }}><h1>QUIT GAME</h1></div>
      </div>
    </>
  );
};

export default GamePage;
