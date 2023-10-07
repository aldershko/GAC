import React from "react";

const Services = () => {
  return (
    <>
      <div className="mt-5 w-full p-5 items-center mb-10 flex flex-col">
        <div className="flex flex-col justify-center items-center">
          <span className="text-gacRed">Services</span>
          <h1 className="text-gacBlue text-2xl mb-5 font-semibold">
            The Services We Provide
          </h1>
        </div>
        <div className="flex flex-row">
          <div className="h-60 group cursor-pointer w-64 flex bg-gacGrey mx-3 flex-col items-center justify-center shadow-xl hover:shadow-2xl active:bg-gacRed">
            <h1 className="py-3 px-3 mx-2 group-active:text-gacWhite text-base font-poppins font-semibold text-gacBlue flex items-center text-center">
              Quality Management System
            </h1>
            <span className="px-3 group-active:text-gacWhite text-gacBlue text-sm mx-2 flex items-center text-center">
              ISO 9001; ISO 17025; ISO 17020; TS 16949; ISO 13485; AS 9100; ISO
              15189; ISO 17024
            </span>
          </div>
        </div>
        <div className="flex flex-row mt-5">
          <div className="h-40 w-44 bg-gacGrey mx-3 shadow-xl hover:shadow-2xl active:bg-gacRed"></div>
          <div className="h-40 w-44 bg-gacGrey mx-3 shadow-xl hover:shadow-2xl active:bg-gacRed"></div>
          <div className="h-40 w-44 bg-gacGrey mx-3 shadow-xl hover:shadow-2xl active:bg-gacRed"></div>
        </div>
        <div className="flex flex-row justify-center mt-5 items-center">
          <div className="h-40 w-44 bg-gacGrey mx-3 shadow-xl hover:shadow-2xl active:bg-gacRed"></div>
        </div>
      </div>
    </>
  );
};

export default Services;
