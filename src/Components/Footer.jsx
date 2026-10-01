import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left */}
        <div className="">
          <img
            className="mb-5 w-40 dark:bg-white dark:p-2 dark:rounded-md"
            src={assets.logo}
            alt=""
          />
          <p className="w-full md:w-2/3 text-grey-600 leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
            doloremque amet, vero nam quas voluptatum exercitationem asperiores
            illum corrupti inventore rem nulla nobis tempore ipsam consectetur
            adipisci ratione! Vero, nam!
          </p>
        </div>

        {/* center */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-grey-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact uc</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* right */}
        <div>
          <p className="text-xl font-medium mb-5">Get in Touch</p>
          <ul className="flex flex-col gap-2 text-grey-600">
            <li>+27 785288628</li>
            <li>chakamhembere99@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* copyright text */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2026@ Prescripto - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
