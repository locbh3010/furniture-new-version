/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const getEndpoint = (params) => {
  const endpoint = `http://apionhome.noithatnhabanfurniture.com${params}`;

  return endpoint;
};

const FeedbackCard = ({ product }) => {
  const [avatar, setAvatar] = useState();
  const [thumbnail, setThumbnail] = useState();
  const { id, client, description_section_3, image_list } = product;

  useEffect(() => {
    if (image_list?.length > 0) {
      image_list.forEach((img) => {
        if (img.includes("khong-gian-noi-that")) {
          setThumbnail(img);
        } else if (img.includes("avatar-client")) {
          setAvatar(img);
        } else if (img.includes("y-kien-khach-hang") && !avatar) {
          setAvatar(img);
        }
      });
    }
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center w-full gap-4 py-4"
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <div className="w-16 h-16 overflow-hidden rounded-full">
        <img
          src={getEndpoint(avatar)}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="font-semibold text-center">{client}</h3>
      <p className="text-sm font-medium text-justify">
        {description_section_3}
      </p>
      <NavLink
        to={`/product/${id}`}
        className="w-full overflow-hidden aspect-video"
      >
        <img
          src={getEndpoint(thumbnail)}
          alt=""
          className="object-cover w-full h-full"
        />
      </NavLink>
    </div>
  );
};

export default FeedbackCard;
