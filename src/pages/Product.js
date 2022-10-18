import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/section/Banner";
import banner from "../images/living-room-furniture-og.png";
import { api } from "../utils/API";
import Loading from "../components/loading/Loading";
import ProductCard from "../components/product/ProductCard";
import ProductList from "../components/product/ProductList";

const getEndpoint = (params) => {
  const endpoint = `${api}${params}`;

  return endpoint;
};

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

const Section = ({ children, title }) => {
  return (
    <div>
      <h2 className="my-8 text-2xl font-bold">{title}</h2>
      {children}
    </div>
  );
};

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [similarProduct, setSimilarProduct] = useState([]);
  const [nameProject, setNameProject] = useState();
  const [loading, setLoading] = useState(true);
  const [yeuCauThietKe, setYeuCauthietKe] = useState([]);
  const [khongGianNoiThat, setKhongGianNoiThat] = useState([]);
  const [yKienKhachHang, setYKienKhachHang] = useState([]);
  const [camHungThietKe, setCamHungThietKe] = useState([]);

  useEffect(() => {
    const endpoint = getEndpoint(`/product/details/${+id}`);
    setLoading(true);

    axios.get(endpoint).then(async (response) => {
      const data = response.data.data[0];
      await setProduct(data);

      // todo: lấy ra tên dự án
      await axios.get(getEndpoint("/project/list")).then((list) => {
        list.data.data.forEach((item) => {
          if (item.id === data.id_project) {
            setNameProject(item.name);
          }
        });
      });

      // todo: lấy ra sản phẩm liên quan
      await axios
        .get(getEndpoint(`/product/list/${data.id_project}`))
        .then(async (response) => {
          const products = response.data.data;
          let tempProductList = [];

          // todo : thêm sản phầm liên quan vào mảng và push lên state
          // * sản phẩm liên quan không bao gồm sản phẩm đang xem ở trang chi tiết
          (await products?.length) > 0 &&
            products.forEach((item) => {
              if (item.id !== +id) {
                tempProductList.push(item);
              }
            });

          setSimilarProduct(tempProductList);
        });

      let khonggiannoithat = [];
      let yeucauthietke = [];
      let ykienkhachang = [];
      let camhungthietke = [];
      await data.image_list.forEach((img) => {
        if (img.includes("yeu-cau-thiet-ke")) {
          yeucauthietke.push(img);
        } else if (img.includes("khong-gian-noi-that")) {
          khonggiannoithat.push(img);
        } else if (img.includes("y-kien-khach-hang")) {
          ykienkhachang.push(img);
        } else if (img.includes("cam-hung-thiet-ke")) {
          camhungthietke.push(img);
        }
      });

      setYeuCauthietKe(yeucauthietke);
      setKhongGianNoiThat(khonggiannoithat);
      setYKienKhachHang(ykienkhachang);
      setCamHungThietKe(camhungthietke);

      setLoading(false);
    });
  }, [id]);

  return (
    <div>
      <Banner banner={banner} title={product.name} caption={nameProject} />
      {!loading ? (
        <div className="container py-20">
          <div>
            <p className="px-3 py-2 my-3 text-lg font-normal duration-300 border border-gray-200 rounded-lg hover:border-gray-400">
              <span className="font-bold">Dự án: </span>
              {nameProject}
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

          <Section title="1/Yêu cầu thiết kế">
            <p className="text-base font-medium text-dark">
              {product.description_section_1}
            </p>
            <div className="grid grid-flow-row grid-cols-1 gap-6 py-8 auto-rows-fr sm:grid-cols-2">
              {yeuCauThietKe?.length > 0 &&
                yeuCauThietKe.map((img, index) => (
                  <img
                    src={getEndpoint(img)}
                    key={index}
                    alt={img}
                    className="object-cover w-full h-full"
                  />
                ))}
            </div>
          </Section>
          <Section title="2/Không gian nội thất">
            <p className="text-base font-medium text-dark">
              {product.description_section_2}
            </p>
            <div className="grid grid-flow-row grid-cols-1 gap-6 py-8 auto-rows-fr sm:grid-cols-2">
              {khongGianNoiThat?.length > 0 &&
                khongGianNoiThat.map((img, index) => (
                  <img
                    src={getEndpoint(img)}
                    key={index}
                    alt={img}
                    className="object-cover w-full h-full"
                  />
                ))}
            </div>
          </Section>
          <Section title="3/Ý kiến khách hàng">
            <p className="text-base font-medium text-dark">
              {product.description_section_3}
            </p>
            <div className="grid grid-flow-row grid-cols-1 gap-6 py-8 auto-rows-fr">
              {yKienKhachHang?.length > 0 &&
                yKienKhachHang.map((img, index) => (
                  <img
                    src={getEndpoint(img)}
                    key={index}
                    alt={img}
                    className="object-cover w-full h-full"
                  />
                ))}
            </div>
          </Section>
          <div className="grid grid-flow-row grid-cols-1 gap-6 py-8 auto-rows-fr">
            {camHungThietKe?.length > 0 &&
              camHungThietKe.map((img, index) => (
                <img
                  src={getEndpoint(img)}
                  key={index}
                  alt={img}
                  className="object-cover w-full h-full"
                />
              ))}
          </div>

          <Section title="Sản phẩm liên quan">
            <ProductList>
              {similarProduct?.length > 0 &&
                similarProduct.map((product) => {
                  return (
                    <ProductCard
                      key={product.id}
                      product={product}
                      project_name={nameProject}
                    />
                  );
                })}
            </ProductList>
          </Section>
        </div>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
};

export default Product;
