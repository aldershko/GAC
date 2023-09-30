import background from "../assets/businessman.jpg";
import closeup from "../assets/close-up-people-working-office.jpg";
import calender from "../assets/calender.svg";
import clients from "../assets/clients.svg";
import globe from "../assets/globe.svg";
import medal from "../assets/medal.svg";

const HomePage = () => {
  return (
    <>
      <div className="">
        <img className="" src={background} alt="background_image" />
      </div>
      <div className=" min-h-screen container  mt-16 mx-auto">
        <div className="flex justify-between">
          {/* content div */}
          <div className="flex ml-60 mt-10  w-611 pl-10 py-10 font-bold tracking-widest leading-snug text-5xl flex-col justify-center align-middle">
            <div>
              <h1 className="text-gacRed flex flex-row">
                Innovate <p className="text-black">,</p> Integrate
              </h1>
            </div>
            <h1 className="text-gacRed flex flex-row">
              Elevate<p className="text-black">:</p>
            </h1>
            <div className="flex mt-5 flex-col justify-between w-611">
              <h1 className="text-black text-3xl w-full">
                Your Path to International Standards.
              </h1>
              <h1 className="text-black mt-5 font-medium tracking-normal leading-normal text-lg">
                Technical assistance for design , layout review of Food
                Establishment's like Hotels , Catering Units , Manufacturing
                Units and other organizations coming in food supply chain.
              </h1>
              <button className=" w-44 mt-10 p-4  bg-red-500 text-white text-base font-medium">
                Contact Us
              </button>
            </div>
          </div>
          {/* img div */}
          {/* <div className="w-611 h-611"><img src={home} alt="" /></div> */}
        </div>
        {/* <h1 className="text-gacRed text-center flex font-semibold text-3xl mt-10 tracking-wider justify-center items-center align-middle p-2 w-full">
        GAC ENTERPRISES : Consultancy with a Difference
      </h1> */}
        <div className="flex justify-center w-full h-128 items-center flex-row">
          <div className="p-5  h-96 w-128 m-5">
            <img
              src={closeup}
              alt="close up"
              className="object-cover h-96 w-full"
            />
          </div>
          <div className="p-5 h-96 w-128 m-5 flex flex-col">
            <h1 className="text-gacRed text-base font-medium">ABOUT US</h1>
            <h1 className="text-gacBlue text-2xl font-semibold tracking-wider">
              We Provide Trusted & Best Consultancy
            </h1>
            <h1 className="text-gacBlue my-1 text-base font-light tracking-wider">
              GLOBAL ARABIAN COMPANY
            </h1>
            <h1 className="text-gacBlue text-xs">
              We are a technology company based out of Dubai, United Arab
              Emirates ,Qatar and on India, we have a diverse a workforce that
              collaborate on-premises and remotely to achieve ours and clients
              goals.
            </h1>
            <div className="flex flex-row mt-1 h-32 w-full">
              <div className="flex flex-col">
                <div className="flex justify-center items-center flex-row">
                  <img src={globe} className="h-15 w-15" alt="" />
                  <div className="flex flex-col ml-2">
                    <h1 className="text-gacRed text-2xl font-semibold">2010</h1>
                    <h1 className="text-gacBlue text-sm font-medium">
                      Year Since
                    </h1>
                  </div>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <img src={medal} className="h-15 w-15" alt="" />
                  <div className="flex flex-col ml-2">
                    <h1 className="text-gacRed text-2xl font-semibold">3</h1>
                    <h1 className="text-gacBlue text-sm font-medium">
                      Countries
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5">
                <div className="flex flex-row justify-center mb-2 items-center">
                  <img src={clients} className="h-15 w-15" alt="" />
                  <div className="flex flex-col ml-2">
                    <h1 className="text-gacRed text-2xl font-semibold">480+</h1>
                    <h1 className="text-gacBlue text-sm font-medium">
                      Clients
                    </h1>
                  </div>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <img src={calender} className="h-15 w-15" alt="" />
                  <div className="flex flex-col ml-2 mb-2">
                    <h1 className="text-gacRed text-2xl font-semibold">475+</h1>
                    <h1 className="text-gacBlue text-sm font-medium">
                      Projects
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <button className=" w-32 mt-11 p-2  bg-red-500 text-white text-base font-medium">
              View More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
