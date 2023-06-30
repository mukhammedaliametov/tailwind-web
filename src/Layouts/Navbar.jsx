import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeNav = () => setClick(false);

  const Items = [
    { name: "Home", link: "/", icon: "fa-solid fa-house" },
    { name: "Company", link: "/company", icon: "fa-solid fa-building" },
    {
      name: "Product",
      link: "/product",
      icon: "fa-sharp fa-solid fa-basket-shopping",
    },
    { name: "About Us", link: "/about", icon: "fa-solid fa-circle-info" },
    { name: "Contact", link: "/contact", icon: "fa-solid fa-address-book" },
  ];

  return (
    <>
      <div className="flex justify-between items-center p-4 px-5 md:p-6 2xl:p-10 2xl:px-20 bg-cyan-700 text-white">
        <Link to="/" className="text-3xl text-white font-bold">
          M.Logo
        </Link>
        <ul className="sm:flex hidden">
          {Items.map((link) => (
            <li key={link.name} className="px-4">
              <Link to={link.link} className="text-white hover:text-white-300">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul
          className={
            !click
              ? "hidden"
              : "sm:hidden absolute top-16 left-0 p-5 bg-cyan-700 w-full ease-out duration-700 border-t-2 border-white"
          }
        >
          {Items.map((link) => (
            <li key={link.name} className="py-4">
              <Link
                to={link.link}
                className="text-white hover:text-white-300 text-1xl"
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
            className={!click ? "fas fa-bars" : "fas fa-times"}
          ></i>
        </span>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
