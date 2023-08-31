import React from "react";

const header = () => {
  return (
    <header className="w-full items-center align-middle text-gray-700 bg-white border-gray-100 shadow-sm body-font">
      <div className="container justify-between flex flex-col flex-wrap items-center py-5 mx-auto md:flex-row">
        <div className="flex align-middle justify-center items-center order-first font-medium text-gray-900  title-font ">
          <div className="pr-2 py-2">GAC</div>
        </div>
        <div className="flex gap-24 justify-between flex-row">
          <div className="p-2">HOME</div>
          <div className="p-2">CLIENTS</div>
          <div className="p-2">SERVICES</div>
          <div className="pl-2 py-2">ABOUT US</div>
        </div>
      </div>
    </header>
  );
};

export default header;
