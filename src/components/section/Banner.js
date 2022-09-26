import React from "react";

const Banner = ({ banner, title }) => {
  return (
    <header className="relative py-5 my-8">
      <img
        src={banner}
        alt={banner}
        className="absolute top-0 left-0 object-cover w-full h-full -z-20"
      />
      <div className="absolute inset-0 z-10 bg-black bg-opacity-25"></div>
      <div className="container relative z-10 text-center text-white">
        <span className="text-xl opacity-90">Nội thât nhà bạn</span>
        <h1 className="mt-2 text-3xl font-bold uppercase">{title}</h1>
      </div>
    </header>
  );
};

export default Banner;
