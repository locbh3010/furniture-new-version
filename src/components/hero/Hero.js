import React from "react";
import { NavLink } from "react-router-dom";
import hero from "../../images/hero.jpg";

const Hero = () => {
  return (
    <div className="h-[80vh] relative">
      <img src={hero} alt="banner" className="object-cover w-full h-full" />
      <div className="absolute inset-0 z-30 bg-black bg-opacity-20"></div>
      <div className="container z-40">
        <div className="absolute z-40 w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <div className="text-center">
            <span
              className="block mb-2 text-lg font-semibold text-white sm:text-xl md:text-2xl"
              data-aos="zoom-in"
            >
              Kiến tạo ngôi nhà bạn
            </span>
            <h1 className="text-3xl font-bold text-yellow-300 md:text-4xl lg:text-5xl">
              Nhà bạn Furniture
            </h1>

            <NavLink
              to="/project"
              className="inline-block px-6 py-3 mt-10 text-lg font-medium text-white duration-300 bg-orange-400 border-2 border-orange-400 hover:bg-transparent hover:border-white"
            >
              Xem dự án
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
