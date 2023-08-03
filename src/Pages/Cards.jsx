import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Tripe from "../assets/triple.png";
import Button from "../Layouts/Button";

const Cards = () => {
  const CardItems = [
    {
      img: Single,
      title: "Single User",
      money: "149$",
      firstText: "500 GB storage",
      secondText: "Grated User",
      thirdText: "Send up to 2GB",
    },
    {
      img: Double,
      title: "Partnership",
      money: "199$",
      firstText: "1 TB storage",
      secondText: "3 users allowed",
      thirdText: "Send up to 10 GB",
    },
    {
      img: Tripe,
      title: "Group Accaunt",
      money: "299$",
      firstText: "10 TB storage",
      secondText: "10 users allowed",
      thirdText: "Send up to 20 GB",
    },
  ];
  return (
    <div className="w-full py-[8rem] px-5 bg-white text-black flex justify-center">
      <div className="max-w-[1280px] mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {CardItems.map((card) => (
          <div className="w-full shadow-xl px-[72px] pb-12 text-center shadow-flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500">
            <img
              src={card.img}
              alt=""
              className="w-40 bg-white mt-[-3rem] mx-auto"
            />
            <h2 className="text-2xl font-bold py-7">{card.title}</h2>
            <p className="font-bold text-5xl mb-3">{card.money}</p>
            <div className="font-medium mb-6">
              <p className="py-2 border-b-[1px] text-1xl mt-8">
                {card.firstText}
              </p>
              <p className="py-2 border-b-[1px] text-1xl">{card.secondText}</p>
              <p className="py-2 border-b-[1px] text-1xl">{card.thirdText}</p>
            </div>
            <Button title="Start Trail" link="/" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
