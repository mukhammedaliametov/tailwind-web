import React from "react";
import Button from "../Layouts/Button";
import { Link } from "react-router-dom";

const NewsLetter = () => {
  return (
    <div className="w-full py-16 text-white flex justify-center px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1280px] gap-9">
        <div>
          <h1 className="text-3xl font-bold mb-1">
            Want tips & trics to optimize your flow?
          </h1>
          <p className="mb-3">Sing up to newsletter and stady up to date</p>
        </div>
        <div>
          <input type="email" placeholder="Enter Your Email" className="py-[12px] px-3 text-black rounded-s-sm mb-3"/>
          <Link to='/' className="bg-green-500 px-3 py-[13px] text-black rounded-e-sm">Notify Me</Link>
          <p>We care bout the protection of your data. Read Our</p>
          <a href="javascript:void(0)" className="text-[#8000ff] underline">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
