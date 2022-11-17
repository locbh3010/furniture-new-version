/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/section/Banner";
import banner from "../images/living-room-furniture-og.png";
import Loading from "../components/loading/Loading";
import ProductCard from "../components/product/ProductCard";
import ProductList from "../components/product/ProductList";
import {
  collection,
  doc,
  documentId,
  getDoc,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore";
import { db } from "../configs/firebase.config";
import { useRef } from "react";

const LoadingComponent = () => {
  return (
    <>
      <div className="container py-20">
        <div className="flex flex-col gap-4">
          <Loading height="40px" radius="4px" width="100%"></Loading>
          <Loading height="40px" radius="4px" width="100%"></Loading>
          <Loading height="40px" radius="4px" width="100%"></Loading>
          <Loading height="40px" radius="4px" width="100%"></Loading>
          <Loading height="40px" radius="4px" width="100%"></Loading>
        </div>

        <div className="py-20">
          <Loading
            height="40px"
            radius="4px"
            width="40%"
            className={"my-8"}
          ></Loading>
          <p className="text-base font-medium text-dark"></p>
          <div className="grid grid-flow-row grid-cols-1 gap-6 py-8 auto-rows-fr sm:grid-cols-2">
            <Loading width="100%" height="400px" radius="8px" />
            <Loading width="100%" height="400px" radius="8px" />
            <Loading width="100%" height="400px" radius="8px" />
            <Loading width="100%" height="400px" radius="8px" />
          </div>
        </div>
        <div>
          <Loading
            height="40px"
            radius="4px"
            width="40%"
            className={"my-8"}
          ></Loading>
          <p className="text-base font-medium text-dark"></p>
          <div className="grid grid-flow-row grid-cols-1 gap-6 py-8 auto-rows-fr sm:grid-cols-2">
            <Loading width="100%" height="400px" radius="8px" />
            <Loading width="100%" height="400px" radius="8px" />
            <Loading width="100%" height="400px" radius="8px" />
            <Loading width="100%" height="400px" radius="8px" />
          </div>
        </div>
      </div>
    </>
  );
};

const Title = ({ title }) => {
  return (
    <h2 className="my-8 text-2xl font-bold first-letter:capitalize">{title}</h2>
  );
};
const ImageList = ({ images }) => {
  return (
    <div className="grid grid-flow-row grid-cols-2 gap-6 auto-rows-fr">
      {images.length > 0 &&
        images.map((img) => (
          <img
            src={img}
            key={img}
            alt=""
            className="object-cover w-full h-full"
          />
        ))}
    </div>
  );
};

const Product = () => {
  const { id } = useParams();
  const colRef = collection(db, "products");
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [similars, setSimilars] = useState([]);

  const yeuCauThietKe = useRef(null);
  const khongGianNoiThat = useRef(null);
  const camHungThietKe = useRef(null);
  const yKienKhachHang = useRef(null);

  useEffect(() => {
    setLoading(true);
    const productRef = doc(colRef, id);

    getDoc(productRef).then((res) => {
      setProduct({ id: res.id, ...res.data() });
      const similarRef = query(
        colRef,
        where("cateId", "==", res.data().cateId),
        where(documentId(), "!=", res.id),
        limit(3)
      );

      getDocs(similarRef).then((res) => {
        let temp = [];
        res.docs.length > 0 &&
          res.docs.map((doc) => temp.push({ id: doc.id, ...doc.data() }));
        setSimilars(temp);
      });
      setLoading(false);
    });
  }, [id]);
  useEffect(() => {
    if (product) {
      yeuCauThietKe.current?.insertAdjacentHTML(
        "beforeend",
        product["yeuCauThietKe"]
      );
      khongGianNoiThat.current?.insertAdjacentHTML(
        "beforeend",
        product["khongGianNoiThat"]
      );
      camHungThietKe.current?.insertAdjacentHTML(
        "beforeend",
        product["camHungThietKe"]
      );
      yKienKhachHang.current?.insertAdjacentHTML(
        "beforeend",
        product["yKienKhachHang"]
      );
    }
  }, [product]);

  return (
    <div>
      <Banner banner={banner} title={product.name} caption={product.cateName} />
      {!loading ? (
        <div className="container py-20">
          <div>
            <p className="px-3 py-2 my-3 text-lg font-normal duration-300 border border-gray-200 rounded-lg hover:border-gray-400">
              <span className="font-bold">Dự án: </span>
              {product.cateName}
            </p>
            <p className="px-3 py-2 my-3 text-lg font-normal duration-300 border border-gray-200 rounded-lg hover:border-gray-400">
              <span className="font-bold">Khách hàng: </span>
              {product.client}
            </p>
            <p className="px-3 py-2 my-3 text-lg font-normal duration-300 border border-gray-200 rounded-lg hover:border-gray-400">
              <span className="font-bold">Designer: </span>
              {product.designer}
            </p>
            <p className="px-3 py-2 my-3 text-lg font-normal duration-300 border border-gray-200 rounded-lg hover:border-gray-400">
              <span className="font-bold">Diện tích: </span>
              {product.area_size} m<sup>2</sup>
            </p>
            <p className="px-3 py-2 my-3 text-lg font-normal duration-300 border border-gray-200 rounded-lg hover:border-gray-400">
              <span className="font-bold">Phong cách: </span>
              {product.style}
            </p>
          </div>
          <section className="py-6">
            <Title title="yêu cầu thiết kế" />
            <p ref={yeuCauThietKe}></p>
            {product.yeuCauThietKeImages?.length > 0 && (
              <ImageList images={product.yeuCauThietKeImages} />
            )}
          </section>
          <section className="py-6">
            <Title title="không gian nội thất" />
            <p ref={khongGianNoiThat}></p>
            {product.khongGianNoiThatImages?.length > 0 && (
              <ImageList images={product.khongGianNoiThatImages} />
            )}
          </section>
          <section className="py-6">
            <Title title="ý kiến khách hàng" />
            <p ref={yKienKhachHang}></p>
            {product.yKienKhachHangImages?.length > 0 && (
              <ImageList images={product.yKienKhachHangImages} />
            )}
          </section>
          <section className="py-6">
            <Title title="cảm hứng thiết kế" />
            <p ref={camHungThietKe}></p>
            {product.camHungThietKeImages?.length > 0 && (
              <ImageList images={product.camHungThietKeImages} />
            )}
          </section>

          <section>
            <Title title="Sản phẩm liên quan" />
            <ProductList>
              {similars?.length > 0 &&
                similars.map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })}
            </ProductList>
          </section>
        </div>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
};

export default Product;
