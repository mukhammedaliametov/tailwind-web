import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link className="text-black md:px-6 text-center px-4 max-w-[180px] cursor-pointer py-3 text-bold bg-green-500 rounded-md hover:bg-green-300" to={props.link}>
      {props.title}
    </Link>
  );
};

export default Button;
