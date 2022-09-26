import React from "react";
import { NavLink } from "react-router-dom";

const ProductCard = ({ product, index }) => {
  const { id, name, project, client, image_list, style, area_size } = product;
  const delay = 50 * index;
  return (
    <NavLink
      className="w-full h-[400px ] group overflow-hidden"
      to={`/product/${id}`}
      data-aos="fade-up"
      data-aos-delay={`${delay}`}
    >
      <div className="flex aspect-[4/3]">
        <img
          src={image_list[0]}
          alt={name}
          className="flex-shrink-0 object-cover h-full duration-300 basis-full group-hover:-translate-x-full"
        />
        <img
          src={image_list[1]}
          className="flex-shrink-0 object-cover h-full duration-300 basis-full group-hover:-translate-x-full"
          alt={name}
        />
      </div>

      <div className="mt-6">
        <h4 className="py-1 text-xl font-bold uppercase text-33">{name}</h4>
        <div className="mt-2.5">
          <b>Dự án: </b>
          <span>{project}</span>
        </div>
        <div className="mt-2.5">
          <b>Khách hàng: </b>
          <span>{client}</span>
        </div>
        <div className="mt-2.5">
          <b>Diện tích: </b>
          <span>
            {area_size} m<sup>2</sup>
          </span>
        </div>
        <div className="mt-2.5">
          <b>Phong cách thiết kế: </b>
          <span>{style}</span>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;
