import React from "react";

export type ServiceCardItemPropsType = {
  header?: string;
  description?: string;
};

const ServiceCardItem = (props: ServiceCardItemPropsType) => {
  const { header, description } = props;
  return (
    <>
      <div>
        <div className="flex m-5 p-5 flex-row">
          <div className="h-60 group cursor-pointer w-64 flex bg-gacGrey mx-3 flex-col items-center justify-center shadow-xl hover:shadow-2xl active:bg-gacRed">
            <h1 className="py-3 px-3 mx-2 group-active:text-gacWhite text-base font-poppins font-semibold text-gacBlue flex items-center text-center">
              {header}
            </h1>
            <span className="px-3 group-active:text-gacWhite text-gacBlue text-sm mx-2 flex items-center text-center">
              {description}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCardItem;
