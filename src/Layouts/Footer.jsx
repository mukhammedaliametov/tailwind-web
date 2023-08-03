import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-200">
      <div className="mr-7">
        <span to="/" className="w-full text-3xl text-green-500 font-bold">
          <i class="fa-brands fa-react fa-spin"></i>.React
        </span>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          fuga, qui ab dignissimos fugit sunt!
        </p>
        <div className="flex justify-between my-5">
          <i className="fa-brands fa-instagram text-[20px]"></i>
          <i className="fa-brands fa-telegram text-[20px]"></i>
          <i className="fa-brands fa-facebook text-[20px]"></i>
          <i className="fa-brands fa-github text-[20px]"></i>
          <i className="fa-brands fa-linkedin text-[20px]"></i>
        </div>
      </div>
      <div className="flex justify-between lg:col-span-2">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="text-1xl py-2">Analytics</li>
            <li className="text-1xl py-2">Marketing</li>
            <li className="text-1xl py-2">Commarce</li>
            <li className="text-1xl py-2">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="text-1xl py-2">Pricing</li>
            <li className="text-1xl py-2">Documentation</li>
            <li className="text-1xl py-2">Guides</li>
            <li className="text-1xl py-2">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="text-1xl py-2">About</li>
            <li className="text-1xl py-2">Blog</li>
            <li className="text-1xl py-2">Jobs</li>
            <li className="text-1xl py-2">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="text-1xl py-2">Analytics</li>
            <li className="text-1xl py-2">Marketing</li>
            <li className="text-1xl py-2">Commarce</li>
            <li className="text-1xl py-2">Insights</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
