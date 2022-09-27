import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductCard from "../product/ProductCard";
import ProductList from "../product/ProductList";

const getEndpoint = (params) => {
  const endpoint = `http://apionhome.noithatnhabanfurniture.com${params}`;

  return endpoint;
};

const ProjectHome = () => {
  const [productList, setProductList] = useState([]);
  const [nameProject, setNameProject] = useState();

  useEffect(() => {
    const endpoint = getEndpoint("/project/list");

    axios.get(endpoint).then((response) => {
      const data = response.data.data;

      if (data.length > 0) {
        const idProject = data[data.length - 1].id;
        axios
          .get(getEndpoint(`/product/list/${+idProject}`))
          .then((response) => {
            const products = response.data.data;

            setProductList(products);
            setNameProject(data[data.length - 1].name);
          });
      }
    });
  }, []);

  return (
    <section className="py-20 bg-[#F2F5FF]">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-bold uppercase md:text-3xl">
            Sản phẩm <span className=" text-primary"> CỦA CHÚNG TÔI:</span>
          </h2>
        </div>

        <ProductList>
          {productList?.length > 0 &&
            productList
              .slice(-6)
              .map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  project_name={nameProject}
                  index={+index}
                ></ProductCard>
              ))}
        </ProductList>

        <div className="flex items-center justify-center mt-20">
          <NavLink
            className="inline-block px-4 py-2 text-base text-center text-white duration-300 border-2 border-primary bg-primary hover:bg-transparent hover:text-dark hover:border-dark md:text-lg"
            to="/project"
          >
            Xem tất cả
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ProjectHome;
