import React from "react";
import { NavLink } from "react-router-dom";
import ChevronLeft from "../components/icon/ChevronLeft";
import ChevronRight from "../components/icon/ChevronRight";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Parallax, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";

const banner = [
  "https://i.pinimg.com/736x/63/bf/0f/63bf0f5195646e5cd8ada16875de4b4b.jpg",
  "https://coolwallpapers.me/picsup/5632628-furniture-wallpapers.jpg",
  "https://rakkahf.com/upload/image/blog_image/1205style-1.png",
  "https://i.pinimg.com/736x/5f/f6/7a/5ff67a869216ac0bc09f6edfd5a81239.jpg",
];

const InteriorHeader = () => {
  return (
    <header className="py-10 select-none h-auto lg:h-[640px]">
      <div className="container h-full">
        <div className="relative grid items-center h-full grid-flow-row grid-cols-1 gap-8 auto-rows-auto lg:grid-cols-2">
          <div className="bg-[#F8F8F8] backdrop-blur-[4.5px] bg-opacity-0 sm:bg-opacity-70 rounded-2xl py-0 sm:py-8 px-0 sm:px-12 relative z-20">
            <h1 className="mb-6 text-xl font-bold capitalize sm:text-2xl lg:text-6xl text-primary">
              Thi công nội thất trọn gói
            </h1>
            <p className="mb-8 text-sm lg:text-2xl font-normal text-[##4B4B4B]">
              We help you to create organize your room to be more cozy, design
              by professional interior designer
            </p>
            <NavLink
              to="/project"
              className="px-6 py-3 text-sm font-semibold text-white lg:text-lg bg-primary"
            >
              Tất Cả Sản Phẩm
            </NavLink>
          </div>
          <div className="relative top-0 right-0 z-10 select-none lg:w-2/3 lg:absolute h-[320px] lg:h-full">
            <div className="w-full h-full overflow-hidden rounded-lg">
              <Swiper
                navigation={{
                  prevEl: ".prevBanner",
                  nextEl: ".nextBanner",
                }}
                pagination={{
                  type: "progressbar",
                }}
                modules={[Navigation, Autoplay, Parallax, Pagination]}
                autoplay={{
                  delay: 3000,
                }}
                parallax={true}
                loop={true}
                className="z-10"
              >
                {banner.map((imgSrc) => (
                  <SwiperSlide className="self-stretch h-auto" key={imgSrc}>
                    <img
                      src={imgSrc}
                      alt={imgSrc}
                      className="object-cover w-full h-full"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="absolute z-20 flex items-center justify-between w-full grid-cols-1 gap-4 px-2 text-orange-500 -translate-y-1/2 top-1/2 lg:justify-center lg:top-full lg:-translate-y-[150%]">
              <button
                className="rounded-lg bg-white bg-opacity-80 backdrop-blur-[2px] h-15 w-15 flex items-center justify-center prevBanner"
                id="prevBanner"
              >
                <ChevronLeft />
              </button>
              <button
                className="rounded-lg bg-white bg-opacity-80 backdrop-blur-[2px] w-15 h-15 flex items-center justify-center nextBanner"
                id="nextBanner"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const InteriorPage = () => {
  return (
    <div>
      <InteriorHeader />
    </div>
  );
};

export default InteriorPage;
