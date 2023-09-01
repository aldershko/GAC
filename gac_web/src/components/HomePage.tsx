import home from "../assets/home.svg";

const HomePage = () => {
  return (
    <div className=" min-h-screen container mt-16 mx-auto">
      <div className="flex justify-between">
        {/* content div */}
        <div className="flex w-611 font-bold tracking-widest leading-snug text-5xl flex-col justify-center align-middle">
          <div>
            <h1 className="text-paraBlue flex flex-row">
              Innovate <p className="text-black">,</p> Integrate
            </h1>
          </div>
          <h1 className="text-paraBlue flex flex-row">
            Elevate<p className="text-black">:</p>
          </h1>
          <div className="flex flex-col justify-between">
            <h1 className="text-black">
              Your Path to International Standards.
            </h1>
            <h1 className="text-black mt-10 font-medium tracking-normal leading-snug text-lg">
              Technical assistance for design , layout review of Food
              Establishment's like Hotels , Catering Units , Manufacturing Units
              and other organizations coming in food supply chain.
            </h1>
            <button className="rounded-full w-44 mt-10 p-4  bg-red-500 text-white text-base font-medium">
              Contact Us
            </button>
          </div>
        </div>
        {/* img div */}
        <div className="w-611 h-611">
          <img src={home} alt="" />
        </div>
      </div>
      <h1 className="text-red-500 text-center flex font-semibold text-3xl mt-10 tracking-wider justify-center items-center align-middle p-2 w-full">
        GAC ENTERPRISES : Consultancy with a Difference
      </h1>
    </div>
  );
};

export default HomePage;
