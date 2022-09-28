import React from "react";
import { NavLink } from "react-router-dom";
import { api } from "../../utils/API";

const getEndpoint = (params) => {
  const endpoint = `${api}${params}`;

  return endpoint;
};

const ProductCard = ({ project_name, product, index = 1 }) => {
  const delay = 50 * index;

  return (
    <NavLink
      className="w-full h-[400px ] group overflow-hidden"
      to={`/product/${+product.id}`}
      data-aos="fade-up"
      data-aos-delay={`${delay}`}
    >
      <div className="flex aspect-[4/3]">
        <img
          src={getEndpoint(product?.image_list[0])}
          alt={product?.name}
          className="flex-shrink-0 object-cover h-full duration-300 basis-full group-hover:-translate-x-full"
        />
        <img
          src={getEndpoint(product?.image_list[1])}
          className="flex-shrink-0 object-cover h-full duration-300 basis-full group-hover:-translate-x-full"
          alt={product?.name}
        />
      </div>

      <div className="mt-6">
        <h4 className="py-1 text-xl font-bold uppercase text-33">
          {product?.name}
        </h4>
        <div className="mt-2.5">
          <b>Dự án: </b>
          <span>{project_name}</span>
        </div>
        <div className="mt-2.5">
          <b>Khách hàng: </b>
          <span>{product?.client}</span>
        </div>
        <div className="mt-2.5">
          <b>Diện tích: </b>
          <span>
            {product?.area_size} m<sup>2</sup>
          </span>
        </div>
        <div className="mt-2.5">
          <b>Phong cách thiết kế: </b>
          <span>{product?.style}</span>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;
