const header = () => {
  return (
    <header className="w-full sticky top-0 items-center align-middle text-gray-700 bg-gacWhite border-gray-100 shadow-sm body-font">
      <div className="container h-16 justify-between flex flex-col flex-wrap items-center px-5 mx-auto md:flex-row">
        <div className="flex align-middle justify-center items-center order-first font-medium text-gray-900  title-font ">
          <div className="pr-2 py-2">GAC</div>
        </div>
        <div className="flex gap-12 h-full justify-between items-center text-center align-middle flex-row">
          <button className="px-5 active:border-b-gacRed active:bg-gray-100 hover:border-b-gacRed bg-gacWhite h-full border-b-4 border-b-gacWhite">
            HOME
          </button>
          <button className="px-5 active:border-b-gacRed active:bg-gray-100 hover:border-b-gacRed bg-gacWhite border-b-4 border-b-gacWhite h-full">
            CLIENTS
          </button>
          <button className="px-5 active:border-b-gacRed active:bg-gray-100 hover:border-b-gacRed bg-gacWhite border-b-4 border-b-gacWhite h-full">
            SERVICES
          </button>
          <button className="px-5 active:border-b-gacRed active:bg-gray-100 hover:border-b-gacRed bg-gacWhite border-b-4 border-b-gacWhite h-full py-5">
            ABOUT US
          </button>
        </div>
      </div>
    </header>
  );
};

export default header;
