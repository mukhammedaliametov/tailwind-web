import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)

  const Items = [
    { name: "Home", link: "/" },
    { name: "Company", link: "/company" },
    { name: "Product", link: "/product" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
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
        <ul className="md:hidden sm:block absolute top-20 w-full left-0 p-5 bg-cyan-700">
          {Items.map((link) => (
            <li key={link.name} className="py-5 border-b-[1px]">
              <Link to={link.link} className="text-white hover:text-white-300 text-1xl">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <span className="text-2xl sm:hidden ">
          <i onClick={handleClick} className={!click ? 'fas fa-bars' : 'fas fa-times'}></i>
        </span>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
