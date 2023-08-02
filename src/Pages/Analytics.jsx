import React from "react";
import Laptop from "../assets/laptop.jpg";
import Button from "../Layouts/Button";

const Company = () => {
  return (
    <div className="w-full bg-white px-6">
      <div className="max-w-[1240px] grid grid-cols-1 md:grid-cols-2 items-center text-black">
        <img src={Laptop} alt="" className="w-[100%]" />
        <div>
          <p className="uppercase text-green-500 text-xl py-1">Data Analytics dashboard</p>
          <p className="text-bold text-2xl py-1">Manage Data Analytics Centerally</p>
          <p className="my-1 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, officia earum optio fugit necessitatibus assumenda odio
            libero nesciunt officiis, ipsa recusandae quae! Dolore ratione
            blanditiis expedita debitis ipsa, molestias mollitia.
          </p>
          <Button title='Get Started' link='/' />
        </div>
      </div>
    </div>
  );
};

export default Company;
