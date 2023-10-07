import React from "react";
import { MdLocationOn, MdPhone, MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="w-full flex h-96 justify-center items-center align-middle text-white bg-gacBlue">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-between flex-row">
            <div className="flex flex-col mx-10">
              <h1 className="text-xl font-semibold">GAC</h1>
            </div>
            <div className="flex flex-col rounded mx-10">
              <div className="flex items-center border-b-4 border-gacRed flex-row mb-5">
                <MdLocationOn size={24} className="mr-2" />
                <h1 className="text-lg font-semibold">Find Us</h1>
              </div>
              <div className="flex flex-col">
                <span>Reg No: 1022/2019,</span>
                <span>Building No: 06/403,</span>
                <span>Narakkal P O: 682505,</span>
                <span>Ernakulam, Kerala, India</span>
              </div>
            </div>
            <div className="flex flex-col mx-10">
              <div className="flex items-center border-b-4 border-gacRed flex-row mb-5">
                <MdPhone size={24} className="mr-2" />
                <h1 className="text-lg font-semibold">Contact Us</h1>
              </div>
              <span>+974 66121713(Qatar)</span>
              <span>+91 9745441175(India)</span>
              <div className="flex mt-5 items-center border-b-4 border-gacRed flex-row mb-5">
                <MdMail size={24} className="mr-2" />
                <h1 className="text-lg font-semibold">Mail</h1>
              </div>
              <span>info@gacglobal.net</span>
            </div>
            <div className="flex flex-col mx-10">
              <span>GST Registration</span>
              <span>32AATFG6396C1Z5</span>
            </div>
          </div>
          <div className="bg-gray-300 h-16 p-5 mt-5 mb-5 flex justify-between align-middle text-center items-center w-128 rounded-sm">
            <h1 className="text-3xl font-semibold text-gacBlue tracking-wide">
              Want An Enquiry?{" "}
            </h1>
            <button className="bg-gacRed text-white rounded-sm py-2 px-4 mx-2 ">
              Contact Us
            </button>
          </div>
          <span>Copyright by Global Arabian Company.All right reserved</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
