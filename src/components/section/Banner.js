import React from "react";

const Banner = ({ banner, title, caption = "Nội thât nhà bạn" }) => {
  return (
    <header className="relative py-5 my-8">
      <img
        src={banner}
        alt={banner}
        className="absolute top-0 left-0 object-cover w-full h-full -z-20"
        loading="lazy"
      />
      <div className="absolute inset-0 z-10 bg-black bg-opacity-25"></div>
      <div className="container relative z-10 text-center text-white">
        <span className="text-base sm:text-xl opacity-90">{caption}</span>
        <h1 className="mt-2 text-2xl font-bold uppercase sm:text-3xl">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Banner;
