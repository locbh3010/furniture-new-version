import React, { useRef } from "react";
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

// images
import { LazyLoadImage } from "react-lazy-load-image-component";
import slide1 from "../images/interior/slide-1.jpg";
import slide2 from "../images/interior/slide-2.jpg";
import slide4 from "../images/interior/slide-4.jpg";
import section1Image from "../images/interior/section1.jpg";
import { fullBrowserVersion } from "react-device-detect";

const getEndpoint = (params) => {
  const endpoint = `${api}${params}`;

  return endpoint;
};

const banner = [slide1, slide2, slide4];

const services = [
  {
    title: "THI CÔNG NỘI THẤT CĂN HỘ CHUNG CƯ",
    description:
      "Với một căn hộ với diện tích vừa và nhỏ cho một gia đình trẻ, thì <bold>thi công nội thất chung cư</bold> là một nhu cầu rất lớn của nhiều gia đình.Việc lựa chọn một đơn vị thi công cho căn nhà yêu quý của gia đình là một điều nan giải .Chính vì vậy chúng tôi ở đây để giải quyết vấn đề này.<bold>Thi công nội thất</bold> theo phong cách hiện đại, Luxury, tân cổ điển,… là những mẫu thiết kế được nhiều khách hàng lựa chọn để thiết kế và thi công nội thất.<br/>Với phương châm tiết kiệm chi phí của khách hàng đem đến sự hài lòng cho anh chị..",
    images: [
      "https://i.ibb.co/4FzFZ22/chung-cu-1.jpg",
      "https://i.ibb.co/7Wc1jvH/chung-cu-2.jpg",
      "https://i.ibb.co/JkRfmTp/chung-cu-3.jpg",
    ],
  },
  {
    title: "THI CÔNG NỘI THẤT NHÀ PHỐ HIỆN ĐẠI",
    description:
      "Với </bold>kinh nghiệm nhiều năm trong lĩnh vực thiết kế</bold> nhà phố cùng với đó là thấu hiểu được tâm lý khách hàng qua những năm hoạt động.Thi công nội thất nhà ở đem đến sự thoáng đãng , không gian tiện nghi , tiết kiệm diện tích nhưng vẫn đem lại những yếu tố tốt nhất của căn nhà anh chị",
    images: [
      "https://i.ibb.co/fXjDP3R/nha-pho-1.jpg",
      "https://i.ibb.co/3SQ8Ytv/nha-pho-2.jpg",
      "https://i.ibb.co/ZVmQ412/nha-pho-3.jpg",
      "https://i.ibb.co/X5wztb3/nha-pho-4.jpg",
    ],
  },
  {
    title: "THI CÔNG NỘI THẤT BIỆT THỰ CAO CẤP",
    description:
      "Nhu cầu <bold>thiết kế nội thất</bold> biệt thự chưa bao giờ là hết nóng với những khách hàng có nhu cầu một tổ ấm sang trọng , tinh tế , thể hiện đẳng cấp của gia chủ.<br/><bold>NỘI THẤT NHÀ BẠN FURNITURE</bold> đã thiết kế rất nhiều công trình tại Bình Dương tự tin đem lại cho anh chị những sản phẩm tốt nhất ",
    images: [
      "https://i.ibb.co/2h0GyMp/biet-thu-2.jpg",
      "https://i.ibb.co/whZq8nS/biet-thu-1.jpg",
      "https://i.ibb.co/h91GHTs/biet-thu-3.jpg",
      "https://i.ibb.co/FKRnZMP/biet-thu-4.jpg",
    ],
  },
  {
    title: "THI CÔNG NỘI THẤT VĂN PHÒNG TRỌN GÓI",
    description:
      "<bold>Thiết kế nội thất</bold> văn phòng với những mẫu thiết kế đẹp rộng rãi toát lên sự chuyên nghiệp cho công ty , kiến trúc sư giàu kinh nghiệm.<br/> Bố trí những sản phẩm nội thất theo phong thuỷ cũng là một thế mạnh của chúng tôi <bold>NỘI THẤT NHÀ BẠN FURNITURE</bold> Đối với việc <bold>thi công nội thất phòng giám đốc</bold>, phòng các trưởng bộ phận, các phòng ban,… hợp phong thủy, phù hợp với nhân sự cũng là điều mà <bold>NỘI THẤT NHÀ BẠN</bold> quan tâm khi thi công nội thất văn phòng trọn gói Bình Dương.",
    images: [
      "https://i.ibb.co/jJVZYdm/van-phong-3.jpg",
      "https://i.ibb.co/kmRmHWT/van-phong-2.jpg",
      "https://i.ibb.co/9W42mFR/van-phong-1.jpg",
      "https://i.ibb.co/6vkfRpq/van-phong-5.jpg",
      "https://i.ibb.co/XZ3sYxh/van-phong-4.jpg",
    ],
  },
  {
    title: "THI CÔNG CÁC DỊCH VỤ KHÁC",
    description:
      "<bold>NỘI THẤT NHÀ BẠN FURNITURE</bold> cũng đem đến cho khách hàng những dịch vụ theo nhu cầu như : thi công nội thất <bold>Showroom</bold>, thi công nội <bold>Karaoke</bold>, thi công nội thất <bold>Spa</bold>,thi công nội thất <bold>nhà hàng</bold>, thi công nội thất <bold>cafe</bold>, thi công nội thất <bold>khách sạn</bold>, thi công nội thất <bold>cửa hàng</bold>, thi công nội thất <bold>shop thời trang</bold>,… <br/>Đem đến cho khách hàng sự thoải mái trong thi công là sự vinh hạnh của chúng tôi",
  },
];

const ranks = [
  {
    title: "THI CÔNG NỘI THẤT PHÒNG KHÁCH",
    description:
      "Nơi tiếp đón những khách đến thăm căn nhà của anh chị nên cần được thiết kế đẹp thoáng toát lên sự sang trọng của gia chủ cũng là nơi để các thành viên quây quần sau ngày làm việc mệt mỏi . Chính vì vậy việc thi công phòng khách là việc tối quan trọng",
    images: [
      "https://i.ibb.co/c1ZBzqp/phong-khach-1.jpg",
      "https://i.ibb.co/bF2vTd8/phong-khach-3.jpg",
      "https://i.ibb.co/NnHrprx/phong-khach-2.jpg",
      "https://i.ibb.co/s2VYbNY/phong-khach-4.jpg",
      "https://i.ibb.co/sqmsXk3/phong-khach-5.jpg",
      "https://i.ibb.co/YT955mb/phong-khach-6.jpg",
      "https://i.ibb.co/WDSF06K/phong-khach-7.jpg",
      "https://i.ibb.co/KjNMT6t/phong-khach-8.jpg",
      "https://i.ibb.co/j6SQf1c/phong-khach-9.jpg",
      "https://i.ibb.co/wL9Tr27/phong-khach-10.jpg",
      "https://i.ibb.co/5BHKR6b/phong-khach-11.jpg",
    ],
  },
  {
    title: "THI CÔNG NỘI THẤT NHÀ BẾP",
    description:
      "Nhà bếp là nơi nấu nướng nên thường xuyên tiếp xúc với lửa và nước. Vì vậy, cần lựa chọn <bold>vật liệu thi công nội thất</bold> nhà bếp làm sao để đảm bảo được tính an toàn và đảm bảo chất lượng để tạo nên không gian bếp hoàn hảo.",
    images: [
      "https://i.ibb.co/jzV0Tfc/nha-bep-1.jpg",
      "https://i.ibb.co/wL9Tr27/phong-khach-10.jpg",
    ],
  },
  {
    title: "THI CÔNG NỘI THẤT PHÒNG NGỦ TRỌN GÓI",
    description:
      "Phòng ngủ là không gian sinh hoạt riêng tư không thể thiếu dành cho mỗi thành viên trong gia đình. Một phòng ngủ tiện nghi sẽ đảm bảo được chất lượng giấc ngủ, giúp tái tạo năng lượng sau một ngày làm việc mệt mỏi. <br/> Một số phòng ngủ được xây dựng sẽ có phòng tắm riêng cho căn phòng đó, vì vậy anh chị có thể chọn dịch vụ thi công nội thất phòng ngủ trọn gói sẽ giúp anh chị tiết kiệm được khoảng chi phí trong việc <bold>thi công nội thất phòng tắm</bold>.",
    images: [
      "https://i.ibb.co/z4vgmSc/phong-ngu-1.jpg",
      "https://i.ibb.co/qNtv2DJ/phong-ngu-2.jpg",
      "https://i.ibb.co/LCThDRG/phong-ngu-3.jpg",

      "https://i.ibb.co/JRZ0BpM/phong-ngu-4.jpg",
      "https://i.ibb.co/Lzm1MYm/phong-ngu-5.jpg",
    ],
  },
  {
    title: "THI CÔNG NỘI THẤT PHÒNG THỜ.",
    description:
      "Với đất nước quan trọng việc thờ cúng tổ tiên phòng thờ là một phong không thể thiếu. Chính vì vậy việc <bold>thi công nội thất phòng thờ</bold> theo phong thuỷ là điều quan trọng",
    images: [
      "https://i.ibb.co/c1ZBzqp/phong-khach-1.jpg",
      "https://i.ibb.co/GtCbqbw/phong-tho-3.jpg",
      "https://i.ibb.co/kGDj8QZ/phong-tho-2.jpg",
      "https://i.ibb.co/CwyNJ8H/phong-tho-1.jpg",
    ],
  },
];

const Title = ({ title, color }) => {
  return (
    <h2
      className="py-4 text-xl font-semibold uppercase sm:text-2xl md:text-4xl text-dark"
      data-aos="fade"
      data-aos-duration="700"
    >
      {title} <span className="font-bold text-primary">{color}</span>
    </h2>
  );
};

const ImageItem = ({ src, alt }) => {
  return (
    <LazyLoadImage
      src={src}
      height="100%"
      width="100%"
      effect="blur"
      alt={alt}
      className="object-cover w-full h-full"
    />
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

const BlockItem = ({ title, description, images }) => {
  const descEle = useRef(null);

  useEffect(() => {
    descEle.current.textContent = "";
    descEle.current.insertAdjacentHTML("beforeend", description);
  }, [description]);

  return (
    <div className="py-6">
      <h3
        className="py-4 text-xl font-semibold uppercase sm:text-2xl text-dark"
        data-aos="fade-right"
        data-aos-duration="700"
      >
        {title}
      </h3>
      <p
        ref={descEle}
        data-aos="fade"
        data-aos-duration="800"
        className="text-sm text-justify sm:text-left sm:text-base"
      ></p>
      <div className="py-4">
        <div className="grid grid-flow-row grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 auto-rows-auto">
          {images?.length > 0 &&
            images.map((img) => <ImageItem src={img} alt={img} key={img} />)}
        </div>
      </div>
    </div>
  );
};

const InteriorHeader = () => {
  return (
    <header className="py-10 select-none h-auto lg:h-[640px]">
      <div className="container h-full">
        <div className="relative grid items-center h-full grid-flow-row grid-cols-1 gap-8 auto-rows-auto lg:grid-cols-2">
          <div className="bg-[#F8F8F8] backdrop-blur-[4.5px] bg-opacity-0 sm:bg-opacity-70 rounded-2xl py-0 sm:py-8 px-0 sm:px-12 relative z-20">
            <h1
              className="mb-6 text-3xl font-bold capitalize lg:text-6xl text-primary"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              Thi công nội thất
            </h1>
            <p
              className="mb-8 text-sm lg:text-2xl font-normal text-[##4B4B4B]"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              chúng tôi giúp căn phòng của bạn trở nên ấm cúng hơn, thiết kế bởi
              nhà thiết kế nội thất chuyên nghiệp
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
                className="z-10 overflow-hidden"
              >
                {banner.map((imgSrc) => (
                  <SwiperSlide className="self-stretch h-auto" key={imgSrc}>
                    <LazyLoadImage
                      height="100%"
                      width="100%"
                      effect="blur"
                      src={imgSrc}
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
            <LazyLoadImage
              src={section1Image}
              alt="thi cong noi that tron goi"
              height="100%"
              width="100%"
              className="object-cover w-full h-full"
            ></LazyLoadImage>
          </div>
        </div>
      </div>
    </section>
  );
};

const Section2 = () => {
  return (
    <section className="py-20 pt-16 bg-[#F2F5FF]">
      <div className="container">
        <div className="text-center">
          <Title title="LÍ DO VÌ SAO CHỌN" color="nội thất nhà bạn furniture" />
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
        <div className="-my-3 text-center -mb-7">
          <Title
            title="dịch vụ của công ty"
            color="nội thất nhà bạn furniture"
          />
        </div>

        <div className="py-10">
          {services?.length > 0 &&
            services.map((serivce) => (
              <BlockItem
                key={serivce.title}
                title={serivce.title}
                description={serivce.description}
                images={serivce.images}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

const Section5 = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center">
          <Title title="Hạnh mục trong" color="thi công nội thất" />
        </div>

        {ranks?.length > 0 &&
          ranks.map((rank) => (
            <BlockItem
              key={rank.title}
              title={rank.title}
              description={rank.description}
              images={rank.images}
            />
          ))}
      </div>
    </section>
  );
};

const Section6 = () => {
  return (
    <section className="py-20 bg-[#F2F5FF]">
      <div className="container">
        <div className="text-center">
          <Title title="quy trình" color="thi công nội thất" />
        </div>

        <div className="py-6">
          <ul className="text-sm text-justify list-disc sm:text-base sm:text-left">
            <li
              className="py-2"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="50"
            >
              <bold>Bước 1:</bold> Sau khi có bản vẽ 3D, 2 bên thống nhất thiết
              kế, NỘI THẤT NHÀ BẠNsẽ báo giá chính xác chi tiết hạng mục sẽ thi
              công
            </li>
            <li
              className="py-2"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="70"
            >
              <bold>Bước 2:</bold> Quý khách ký hợp đồng thi công, ứng 50% tổng
              hợp đồng cho bên <bold>nội thất nhà bạn furniture</bold> để đặt
              đóng đồ nội thất.
            </li>
            <li
              className="py-2"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <bold>Bước 3:</bold> Sau đó, các KTS và kĩ thuật sẽ tiến hành ra
              bản vẽ thi công chi tiết nhất và tiến hành đo đạc lại hiện trạng,
              nhằm tránh sai sót trong quá trình thi công
            </li>
            <li
              className="py-2"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="120"
            >
              <bold>Bước 4:</bold> Nội thất sẽ được đóng tại xưởng, song song
              các hạng mục như điện, sơn nước, thô sẽ làm trực tiếp tại công
              trình
            </li>
            <li
              className="py-2"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="150"
            >
              <bold>Bước 5:</bold> Sau khi 2 bên thống nhất thời gian bàn giao,
              Khách hàng nghiệm thu khối lượng thực tế và tiến hành thanh toán
              cuối cùng
            </li>
          </ul>
          <p
            className="py-5 text-sm leading-relaxed text-justify sm:text-base sm:text-left"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            Với đội ngũ có kinh nghiệm trong thiết kế thi công nội thất Bình
            Dương, NỘI THẤT NHÀ BẠN FURNITURE tin chắc sẽ mang đến sự hoàn hảo
            cho ngôi nhà của khách hàng từ việc lên bản vẽ cho đến thi công nội
            thất.
          </p>
          <div
            className="text-sm not-italic leading-relaxed sm:text-base"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <span className="font-bold">
              NỘI THẤT NHÀ BẠN FURNITURE{" "}
              <address className="not-italic font-normal">
                Địa chỉ: 790, MỸ PHƯỚC TÂN VẠN, PHÚ MỸ, THỦ DẦU MỘT, BÌNH DƯƠNG
              </address>
            </span>
            Mọi chi tiết xin liên hệ:
            <span className="block">
              Hotline:{" "}
              <a href="tel:0933355538" className="underline">
                09 333 555 48
              </a>
            </span>
            <span>Mail: congtynoithatnhaban@gmail.com</span>
            <span className="block">
              Website:{" "}
              <a
                href="https://noithatnhabanfurniture.com"
                className="underline"
              >
                https://noithatnhabanfurniture.com
              </a>
            </span>
          </div>
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
      <Section5 />
      <Section6 />
    </div>
  );
};

export default InteriorPage;
