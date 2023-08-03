import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeNav = () => setClick(false);

  const Items = [
    { name: "Home", link: "/", icon: "fa-solid fa-house" },
    {
      name: "Accaunt",
      link: "/",
      icon: "fa-solid fa-user",
    },
    { name: "Sing In", link: "/", icon: "fa-solid fa-circle-info" },
  ];

  return (
    <>
      <div className="flex max-w-[1330px] h-24 mx-auto justify-between items-center p-4 text-white">
        <span
          to="/"
          className="text-3xl text-green-500 font-bold"
          onClick={closeNav}
        >
          <i class="fa-brands fa-react fa-spin"></i>.React
        </span>
        <ul className="sm:flex hidden items-center">
          {Items.map((link) => (
            <li key={link.name} className="mx-4">
              <Link
                to={link.link}
                className="hover:text-green-500 duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <button className="mx-3 px-6 py-2 rounded-sm bg-gray-500 hover:bg-green-500 hover:text-black ease-out duration-150">Get Started</button>
        </ul>
        <ul
          className={!click ? 'sm:hidden fixed left-[-80%] top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed flex flex-col left-[-0%] top-0 w-[75%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'}
        >
          <span
            className={!click ? "hidden" : "w-full text-3xl text-green-500 font-bold mb-12 mt-8 ml-4"}
            onClick={closeNav}
          >
            <i class="fa-brands fa-react fa-spin"></i>.React
          </span>

          {Items.map((link) => (
            <li key={link.name} className={!click ? "hidden" : "py-4 border-b-[1px] mx-6"}>
              <Link
                to={link.link}
                className="text-white hover:text-white-300 text-1xl "
                onClick={closeNav}
              >
                {link.name}
              </Link>
              <span className="ml-3 text-1xl">
                <i className={link.icon}></i>
              </span>
            </li>
          ))}
        </ul>
        <span className="text-2xl sm:hidden ">
          <i
            onClick={handleClick}
            className={!click ? "fas fa-bars" : "fas fa-xmark"}
          ></i>
        </span>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
