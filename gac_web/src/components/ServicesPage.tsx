import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const ServicesPage = () => {
  return (
    <>
      <Header />
      <div className=" min-h-screen container  mt-16 mx-auto">
        <div className="flex justify-between">
          {/* content div */}
          <div className=" flex ml-30 mt-10 object-cover w-full pl-10 py-10 font-bold tracking-widest leading-snug text-5xl flex-col justify-center align-middle">
            {/* <img
              className="relative h-full w-full container "
              src={background}
              alt="background_image"
            /> */}
            <div className="">
              <div>
                <h1 className="text-gacRed flex flex-row">Our Services.</h1>
              </div>
              <div className="flex flex-col justify-between w-611">
                <h1 className="text-black mt-5 font-medium tracking-normal leading-normal text-lg">
                  At GAC, we're dedicated to delivering top-notch services that
                  exceed your expectations. With years of experience and a
                  commitment to excellence, we've become a trusted partner for
                  individuals and businesses alike. Whether you're looking for
                  Quality Management, Asset Management, Information Security,
                  we've got you covered.
                </h1>
                <button className=" w-44 mt-10 p-4  bg-red-500 text-white text-base font-medium">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          {/* img div */}
          {/* <div className="w-611 h-611"><img src={home} alt="" /></div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
