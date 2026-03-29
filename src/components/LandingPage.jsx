import React from "react";
import dices from "../assets/images/dices.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen w-screen bg-[#ffffff] p-24">
        <div className=" h-full w-full flex">
          <div className="w-1/2 h-full  ">
            <img src={dices} alt="dices" className="" />
          </div>
          <div className="w-1/2 h-full flex justify-center items-center ">
            <div className="gap-2">
              <h1 className="text-7xl font-extrabold tracking-wider ">
                DICE GAME
              </h1>
              <br />
              <div className="flex justify-end">
                <button
                  className="text-2xl font-bold bg-black text-white hover:shadow-lg hover:shadow-black/30 transition-all ease-in-out hover:scale-105  py-2 px-4 active:scale-95 cursor-pointer"
                  onClick={()=>navigate('/gamePage')}
                >
                  Play game
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
