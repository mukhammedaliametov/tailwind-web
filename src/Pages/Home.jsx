import React from "react";
import Button from "../Layouts/Button";

const Home = () => {
  return (
    <>
      <div className="max-w-[800px] w-full  mx-auto text-center ">
        <p className="text-green-500 font-bold uppercase p-2 mt-[10rem]">
          Growing With Data Analitycs
        </p>
        <p className="font-bold p-2 text-3xl">Growing With Data</p>
        <p className="font-bold px-2 text-2xl">Fast, flexible financing for</p>
        <p className="font-bold px-2 text-1xl text-black-500 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          laborum iusto ipsam necessitatibus veniam? Ratione distinctio optio
          sed. Earum sequi totam rem dolor in aut ipsa fugiat, voluptatum velit
          eaque.
        </p>
        <Button title={'Get Started'} />
      </div>
    </>
  );
};

export default Home;
