import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductCard from "../product/ProductCard";
import ProductList from "../product/ProductList";
import { db } from "../../configs/firebase.config";
import {
  collection,
  getDoc,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore";

const ProjectHome = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const projectRef = query(
      collection(db, "projects"),
      where("feature", "==", true),
      limit(1)
    );

    getDocs(projectRef).then((res) => {
      res.docs?.length > 0 &&
        // eslint-disable-next-line array-callback-return
        res.docs.map((doc) => {
          const id = doc.id;
          const productRef = query(
            collection(db, "products"),
            where("cateId", "==", id),
            limit(4)
          );

          getDocs(productRef).then((res) => {
            let temp = [];
            const docs = res.docs;
            docs?.length > 0 &&
              docs.map((doc) => temp.push({ id: doc.id, ...doc.data() }));

            setProducts(temp);
          });
        });
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
          {products?.length > 0 &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
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
