const Approach = () => {
  return (
    <>
      <div className="flex mt-2 justify-center p-5 flex-row ">
        <div className=" w-full  items-center mb-10 flex flex-col">
          <div className="flex p-2 rounded-md flex-col bg-gacBlue text-gacWhite h-52 w-52">
            <div className="flex p-2 flex-col justify-start h-16 w-full">
              <h1 className="text-gacWhite tracking-widest">PHASE</h1>
              <h1 className="text-gacWhite tracking-widest">ONE</h1>
            </div>
            <div className="flex text-center flex-col items-center align-middle justify-center h-full w-full">
              <h1 className="text-sm m-2">
                Detailed Review of Existing System
              </h1>
              <h1 className="tracking-widest m-5">(GAP ANALYSIS)</h1>
            </div>
          </div>
          <div className="flex p-2 mt-4 rounded-md flex-col bg-gacBlue text-gacWhite h-52 w-52">
            <div className="flex p-2 flex-col justify-start h-16 w-full">
              <h1 className="text-gacWhite tracking-widest">PHASE</h1>
              <h1 className="text-gacWhite tracking-widest">THREE</h1>
            </div>
            <div className="flex text-center flex-col items-center align-middle justify-center h-full w-full">
              <h1 className="text-sm m-2">
                Readiness Review / Pre-assessment{" "}
              </h1>
              <h1 className="tracking-widest m-5">(MOCK AUDIT)</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-112 rounded-md w-96 bg-gacRed">
          <h1></h1>
        </div>
      </div>
    </>
  );
};

export default Approach;
