import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Button from "../Layouts/Button";

const Home = () => {
  return (
    <>
      <div className="max-w-[800px] w-full  mx-auto text-center ">
        <p className="text-green-500 font-bold uppercase p-2 mt-[8rem]">
          Growing With Data Analitycs
        </p>
        <h1 className="md:text-6xl sm:text-6xl text-3xl  font-bold px-2 md:py-6">
          Growing With Data
        </h1>
        <p className="md:text-5xl sm:text-4xl text-xl font-bold mb-2">
          Fast, flexible financing for {' '}
          <Typewriter
            words={["BTB", "BTC", "SASS"]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
          />
        </p>
        <p className='text-gray-500 font-bold text-xl md:text-2xl mb-6'>Ipsum, dolor sit consectetur adipisicing elit. In maxime nesciunt, veritatis sint laborum repudiandae.</p>
        <Button title={'Get Started'} />
      </div>
    </>
  );
};

export default Home;
