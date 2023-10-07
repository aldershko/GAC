import React from "react";
import entrepreneur from "../assets/entrepreneur.jpg";

export type CardItemPropsType = {
  header: string;
  description: string;
};

const CardItem = (props: CardItemPropsType) => {
  const { header, description } = props;
  return (
    <>
      <div>
        <div className="h-44 w-48 bg-gacGrey group mx-3 shadow-xl hover:shadow-2xl rounded-md active:bg-gacRed">
          <div className="shadow-inner object-cover overflow-clip backdrop-blur-md bg-white/30">
            <img src={entrepreneur} className="" alt="consultant.jpeg" />
          </div>
          <div className="flex flex-col group-active:text-white text-gacBlue justify-center p-2 align-middle items-center">
            <span className="text-sm font-semibold">{header}</span>
            <span className="text-xs">{description}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
