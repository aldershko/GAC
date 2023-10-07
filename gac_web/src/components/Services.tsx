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
          <div className="h-40 w-44 bg-gacGrey mx-3 shadow-xl hover:shadow-2xl active:bg-gacRed"></div>
          <div className="h-40 w-44 bg-gacGrey mx-3 shadow-xl hover:shadow-2xl active:bg-gacRed"></div>
          <div className="h-40 w-44 bg-gacGrey mx-3 shadow-xl hover:shadow-2xl active:bg-gacRed"></div>
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
