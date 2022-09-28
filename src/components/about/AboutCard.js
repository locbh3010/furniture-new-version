import React from "react";

const AboutCard = ({ member, delay }) => {
  const { avatar, name, position, number } = member;
  const cardDelay = delay * 50;
  return (
    <div
      className="flex flex-col items-stretch flex-1 w-full gap-12 "
      data-aos="fade"
      data-aos-delay={`${cardDelay}`}
    >
      <div className="rounded-[10px] relative flex-1 flex-shrink-0">
        <div className="w-full overflow-hidden rounded-[10px] h-[400px]">
          <img
            src={avatar}
            alt={avatar}
            className="object-cover w-full h-full rounded-[10px]"
          />
        </div>
        <div className="absolute bottom-0 -translate-x-1/2 translate-y-1/2 left-1/2">
          <img src={number} alt="" />
        </div>
      </div>
      <div className="flex flex-col text-center">
        <h4 className="text-2xl font-bold text-33 mb-2.5">{name}</h4>
        <span className="text-lg font-normal block text-[#666666] uppercase">
          {position}
        </span>
      </div>
    </div>
  );
};

export default AboutCard;
