import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link className="text-center px-5 max-w-[180px] cursor-pointer py-2 mt-5 text-bold bg-green-500 rounded-2xl">
      {props.title}
    </Link>
  );
};

export default Button;
