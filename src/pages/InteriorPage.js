import React from "react";
import { NavLink } from "react-router-dom";

// slider
import ChevronLeft from "../components/icon/ChevronLeft";
import ChevronRight from "../components/icon/ChevronRight";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Parallax, Pagination } from "swiper";

// styles
import "swiper/css/navigation";
import "swiper/css/pagination";

// icon
import i1 from "../images/d1.png";
import i4 from "../images/d4.png";
import i6 from "../images/d6.png";
import { useState } from "react";
import { useEffect } from "react";

// api
import axios from "axios";
import { api } from "../utils/API";
import ProductCard from "../components/product/ProductCard";

const getEndpoint = (params) => {
  const endpoint = `${api}${params}`;

  return endpoint;
};

const banner = [
  "https://i.pinimg.com/736x/63/bf/0f/63bf0f5195646e5cd8ada16875de4b4b.jpg",
  "https://coolwallpapers.me/picsup/5632628-furniture-wallpapers.jpg",
  "https://rakkahf.com/upload/image/blog_image/1205style-1.png",
  "https://i.pinimg.com/736x/5f/f6/7a/5ff67a869216ac0bc09f6edfd5a81239.jpg",
];

const services = [
  {
    title: "THI CÔNG NỘI THẤT CĂN HỘ CHUNG CƯ",
    description:
      "Với một căn hộ với diện tích vừa và nhỏ cho một gia đình trẻ, thì thi công nội thất chung cư là một nhu cầu rất lớn của nhiều gia đình.Việc lựa chọn một đơn vị thi công cho căn nhà yêu quý của gia đình là một điều nan giải .Chính vì vậy chúng tôi ở đây để giải quyết vấn đề này.Thi công nội thất theo phong cách hiện đại, Luxury, tân cổ điển,… là những mẫu thiết kế được nhiều khách hàng lựa chọn để thiết kế và thi công nội thất.<br/>Với phương châm tiết kiệm chi phí của khách hàng đem đến sự hài lòng cho anh chị..",
    images: [],
  },
  {
    title: "THI CÔNG NỘI THẤT NHÀ PHỐ HIỆN ĐẠI",
    description:
      "Với kinh nghiệm nhiều năm trong lĩnh vực thiết kế nhà phố cùng với đó là thấu hiểu được tâm lý khách hàng qua những năm hoạt động.Thi công nội thất nhà ở đem đến sự thoáng đãng , không gian tiện nghi , tiết kiệm diện tích nhưng vẫn đem lại những yếu tố tốt nhất của căn nhà anh chị",
    images: [],
  },
  {
    title: "THI CÔNG NỘI THẤT BIỆT THỰ CAO CẤP",
    description:
      "Nhu cầu thiết kế nội thất biệt thực chưa bao giờ là hết nóng với những khách hàng có nhu cầu một tổ ấm sang trọng , tinh tế , thể hiện đẳng cấp của gia chủ.<br/>NỘI THẤT NHÀ BẠN FURNITURE đã thiết kế rất nhiều công trình tại Bình Dương tự tin đem lại cho anh chị những sản phẩm tốt nhất ",
    images: [],
  },
];

const Title = (props) => {
  return (
    <h2
      className="py-4 text-xl font-semibold uppercase sm:text-2xl md:text-4xl text-dark"
      data-aos="fade"
      data-aos-duration="700"
    >
      {props.title} <span className="text-primary">{props.color}</span>
    </h2>
  );
};

const InteriorHeader = () => {
  return (
    <header className="py-10 select-none h-auto lg:h-[640px]">
      <div className="container h-full">
        <div className="relative grid items-center h-full grid-flow-row grid-cols-1 gap-8 auto-rows-auto lg:grid-cols-2">
          <div className="bg-[#F8F8F8] backdrop-blur-[4.5px] bg-opacity-0 sm:bg-opacity-70 rounded-2xl py-0 sm:py-8 px-0 sm:px-12 relative z-20">
            <h1 className="mb-6 text-2xl font-bold capitalize sm:text-3xl lg:text-6xl text-primary">
              Thi công nội thất
            </h1>
            <p className="mb-8 text-sm lg:text-2xl font-normal text-[##4B4B4B]">
              We help you to create organize your room to be more cozy, design
              by professional interior designer
            </p>
            <NavLink
              to="/contact"
              className="px-6 py-3 text-sm font-semibold text-white lg:text-lg bg-primary"
            >
              Liên hệ ngay
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

const Section1 = () => {
  return (
    <section className="py-20">
      <div className="container overflow-x-hidden">
        <div className="grid items-start grid-flow-row gap-10 auto-rows-auto md:grid-cols-2">
          <div>
            <Title title="thi công nội thất" color="trọn gói" />
            <p
              className="leading-relaxed text-justify"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Anh chị mong muốn điều gì khi chọn NỘI THẤT NHÀ BẠN FURNITURE để
              thi công nội thất tại Bình Dương ? Thi công nội thất giống như bản
              vẽ và cam kết ban đầu. Thời gian thi công hợp lý và thực hiện đúng
              tiến độ Sử dụng nội thất chất lượng với giá thành phù hợp, tối ưu
              được chi phí. Có dịch vụ bảo hành, bảo trì sau khi thi công. Với
              việc cam kết đưa khách hàng lên làm nòng cốt phát triển chúng tôi
              mong sẽ đem đến cho khách hàng những trải nghiệm tốt nhất khi tin
              tưởng chọn NỘI THẤT NHÀ BẠN FURNITURE cho các công trình tại BÌNH
              DƯƠNG.
            </p>
          </div>
          <div
            className="w-full md:h-[480px] overflow-hidden bg-gray-700 rounded-md aspect-video md:aspect-auto"
            data-aos="fade-left"
            data-duration="1000"
          >
            <img
              src=""
              alt="thi cong noi that tron goi"
              className="object-cover w-full h-full bg-slate-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutItem = ({ icon, title, description }) => {
  return (
    <div className="py-6 xl:py-10 px-4 flex flex-col gap-2.5 rounded group bg-white">
      <img
        src={icon}
        alt=""
        className="object-cover w-8 h-8 md:w-12 md:h-12"
        data-aos="flip-up"
      />
      <h4 className="mb-2 text-sm font-medium text-dark md:text-lg">{title}</h4>
      <p className="text-sm opacity-90 text-dark">{description}</p>
    </div>
  );
};

const Section2 = () => {
  return (
    <section className="py-20 pt-16 bg-[#F2F5FF]">
      <div className="container">
        <div className="text-center">
          <Title
            title="LÍ DO VÌ SAO CHỌN Ô VUÔNG"
            color="THI CÔNG NỘI THẤT TRỌN GÓI"
          />
        </div>
        <div className="grid grid-flow-row grid-cols-1 gap-4 mt-20 text-left auto-rows-fr sm:grid-cols-2 lg:grid-cols-3">
          <AboutItem
            title="Đội ngủ tay nghề cao"
            icon={i1}
            description="NỘI THẤT NHÀ BẠN có xưởng sản xuất trực tiếp với quy mô hơn 500m2, với đội ngũ thợ tay nghề cao"
          />
          <AboutItem
            title="Đội ngủ sáng tạo"
            icon={i6}
            description="NỘI THẤT NHÀ BẠN có đội ngũ thiết kế sáng tạo cao với founder là Kiến Trúc Sư tâm huyết"
          />
          <AboutItem
            title="Hạn chế sai sót"
            icon={i4}
            description="Thiết kế thi công trọn gói, tiêu chí là thiết kế để thi công, hạn chế sai sót từ thiết kế ra thi công"
          />
        </div>
      </div>
    </section>
  );
};

const ProductList = ({ productList, project_name }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7.5 grid-flow-row auto-rows-1fr">
      {productList?.length > 0 &&
        productList.map((product) => (
          <ProductCard
            key={product.id}
            project_name={project_name}
            product={product}
          />
        ))}
    </div>
  );
};

const CongTrinhTaiBinhDuong = () => {
  const [productList, setProductList] = useState([]);
  const IDProject = 139;
  const endpoint = getEndpoint(`/product/list/${IDProject}`);
  useEffect(() => {
    let productListTemp = [];
    axios.get(endpoint).then(async (response) => {
      const data = await response.data.data;
      (await data?.length) > 0 &&
        data.forEach((product) => {
          productListTemp.push(product);
        });
      setProductList(productListTemp);
    });
  }, []);
  return (
    <div>
      <div className="container">
        <h2
          className="py-4 text-xl font-semibold uppercase sm:text-2xl text-dark"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          Công trình tại bình dương
        </h2>
        <div className="py-8">
          <ProductList
            productList={productList}
            project_name="Công trình tại bình dương"
          />
        </div>
      </div>
    </div>
  );
};

const MauThietKeDep = () => {
  const [productList, setProductList] = useState([]);
  const IDProject = 140;
  const endpoint = getEndpoint(`/product/list/${IDProject}`);
  useEffect(() => {
    let productListTemp = [];
    axios.get(endpoint).then(async (response) => {
      const data = await response.data.data;
      (await data?.length) > 0 &&
        data.forEach((product) => {
          productListTemp.push(product);
        });
      setProductList(productListTemp);
    });
  }, []);
  return (
    <div>
      <div className="container">
        <h2
          className="py-4 text-xl font-semibold uppercase sm:text-2xl text-dark"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          Mẫu thiết kế đẹp
        </h2>
        <div className="py-8">
          <ProductList
            productList={productList}
            project_name="Mẫu thiết kế đẹp"
          />
        </div>
      </div>
    </div>
  );
};

const Section3 = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="py-6 text-center">
          <Title title="Thi công nội thất" />
          <p
            className="mx-auto text-sm text-justify md:max-w-2xl sm:text-center sm:text-base lg:max-w-6xl"
            data-aos="fade"
            data-aos-duration="800"
          >
            Thi công nội thất chính là phần vô cùng quan trọng để hoàn thiện bản
            thiết kế nội thất. Đội ngũ của NỘI THẤT NHÀ BẠN với nhiều năm kinh
            nghiệm trong lĩnh vực thi công nội thất sẽ mang đến cho quý khách
            hàng dịch vụ trọn gói giúp tiết kiệm thời gian, công sức, chi phí và
            đảm bảo hoàn thiện nội thất ngôi nhà của anh chị đúng như bản thiết
            kế 3D. Chúng tôi có chuyên môn cao trong thực hiện các dự án như thi
            công nội thất biệt thự, thi công nội thất nhà phố, thi công nội thất
            căn hộ chung cư,…
          </p>
        </div>
      </div>
      <CongTrinhTaiBinhDuong />
      <MauThietKeDep />
    </section>
  );
};

const Section4 = () => {
  return (
    <section className="py-20 bg-[#F2F5FF]">
      <div className="container">
        <div className="text-center">
          <Title
            title="dịch vụ của công ty"
            color="nội thất nhà bạn furniture"
          />
        </div>
      </div>
    </section>
  );
};

const InteriorPage = () => {
  return (
    <div>
      <InteriorHeader />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default InteriorPage;
