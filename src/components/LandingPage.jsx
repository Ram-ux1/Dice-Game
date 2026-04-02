import React from "react";
import dices from "../assets/images/dices.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white px-6 py-10 md:px-16 lg:px-24 flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center justify-between h-full gap-5">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={dices}
            alt="dices"
            className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[500px]"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
          <div className="text-center md:text-right space-y-4">
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide">
              DICE GAME
            </h1>

            <button
              className="text-lg sm:text-xl md:text-2xl font-bold bg-black text-white 
              hover:shadow-lg hover:shadow-black/30 transition-all 
              hover:scale-105 py-2 px-6 active:scale-95 cursor-pointer"
              onClick={() => navigate("/gamePage")}
            >
              Play Game
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;