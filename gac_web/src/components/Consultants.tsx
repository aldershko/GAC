import React from "react";
import entrepreneur from "../assets/entrepreneur.jpg";

const Consultants = () => {
  return (
    <>
      <div className="mt-5 w-full p-5 items-center mb-10 flex flex-col">
        <div className="flex flex-col justify-center items-center">
          <span className="text-gacRed">EXPERT CONSULTANTS</span>
          <h1 className="text-gacBlue text-2xl mb-5 font-semibold">
            Meet Out Top Consultants
          </h1>
        </div>
        <div className="flex flex-row">
          <div className="h-44 w-48 bg-gacGrey group mx-3 shadow-xl hover:shadow-2xl rounded-md active:bg-gacRed">
            <div className="shadow-inner object-cover overflow-clip backdrop-blur-md bg-white/30">
              <img src={entrepreneur} className="" alt="consultant.jpeg" />
            </div>
            <div className="flex flex-col group-active:text-white text-gacBlue justify-center p-2 align-middle items-center">
              <span className="text-sm font-semibold">Jessy Mathew</span>
              <span className="text-xs"> Founder & CEO</span>
            </div>
          </div>
          <div className="h-44 w-48 bg-gacGrey group mx-3 shadow-xl hover:shadow-2xl rounded-md active:bg-gacRed">
            <div className="shadow-inner object-cover overflow-clip backdrop-blur-md bg-white/30">
              <img src={entrepreneur} className="" alt="consultant.jpeg" />
            </div>
            <div className="flex flex-col group-active:text-white  text-gacBlue justify-center p-2 align-middle items-center">
              <span className="text-sm font-semibold">Jessy Mathew</span>
              <span className="text-xs"> Founder & CEO</span>
            </div>
          </div>
          <div className="h-44 w-48 bg-gacGrey group mx-3 shadow-xl hover:shadow-2xl rounded-md active:bg-gacRed">
            <div className="shadow-inner object-cover overflow-clip backdrop-blur-md bg-white/30">
              <img src={entrepreneur} className="" alt="consultant.jpeg" />
            </div>
            <div className="flex flex-col group-active:text-white text-gacBlue justify-center p-2 align-middle items-center">
              <span className="text-sm font-semibold">Jessy Mathew</span>
              <span className="text-xs"> Founder & CEO</span>
            </div>
          </div>
          <div className="h-44 w-48 bg-gacGrey group mx-3 shadow-xl hover:shadow-2xl rounded-md active:bg-gacRed">
            <div className="shadow-inner object-cover overflow-clip backdrop-blur-md bg-white/30">
              <img src={entrepreneur} className="" alt="consultant.jpeg" />
            </div>
            <div className="flex flex-col group-active:text-white text-gacBlue justify-center p-2 align-middle items-center">
              <span className="text-sm font-semibold">Jessy Mathew</span>
              <span className="text-xs"> Founder & CEO</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center mt-5 items-center">
          <button className="bg-gacBlue text-gacWhite px-5 py-3 mt-5">
            See More
          </button>
        </div>
      </div>
    </>
  );
};

export default Consultants;
