import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import i1 from "../../images/d1.png";
import i4 from "../../images/d4.png";
import i5 from "../../images/d5.png";
import i6 from "../../images/d6.png";

AOS.init({
  duration: 600,
});
const AboutItem = ({ icon, title, description, delay }) => {
  const delayTime = delay * 150;
  return (
    <div className="py-6 xl:py-10 px-4 flex flex-col gap-2.5 rounded group bg-white">
      <img
        src={icon}
        alt=""
        className="object-cover w-8 h-8 md:w-12 md:h-12"
        data-aos="flip-up"
        data-aos-delay={delayTime}
      />
      <h4 className="mb-2 text-sm font-medium text-dark md:text-lg">{title}</h4>
      <p className="text-sm opacity-90 text-dark">{description}</p>
    </div>
  );
};

const AboutHome = () => {
  return (
    <section className="py-20 bg-[#F2F5FF]">
      <div></div>

      <div className="container text-center">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">
          Nhà bạn <span className=" text-primary">Furniture</span>
        </h2>
        <div className="max-w-5xl mx-auto text-sm leading-normal text-justify opacity-80 md:text-center">
          <p className="mb-4">
            Mang đến cho bạn những trải nghiệm tốt nhất mang đậm chất riêng
            trong từng sản phẩm mà chúng tôi đã và đang làm từ đó mang đến sự
            đặc biệt tính cá nhân hoá cho từng dự án mà chúng tôi xây dựng
          </p>
          <p>
            Đối với chúng tôi một sản phẩm tốt là một sản phẩm đáp ứng đầy đủ
            nhu cầu của khánh hàng từ vật liệu giá thành và khả năng lâu bền
            cùng thời gian Với phương châm “KIẾN TẠO NGÔI NHÀ BẠN “ chúng tôi
            mong sẽ làm hài lòng những vị khách khó tính nhất
          </p>
        </div>

        <div className="grid grid-flow-row grid-cols-1 gap-4 mt-20 text-left auto-rows-fr sm:grid-cols-2 lg:grid-cols-4">
          <AboutItem
            description="Luôn đặt chữ tín lên hàng đầu cùng với đó là lợi ích của khách hàng quyền lợi khi đã tin tưởng chọn chúng tôi là điều chúng tôi luôn đặc biệt quan tâm"
            title="Uy tín - chất lượng"
            icon={i1}
            delay="1"
          ></AboutItem>
          <AboutItem
            description="Những chi tiết nhỏ luôn tạo nên những sản phẩm lớn . Những dự án sản phẩm mà chúng tôi tạo ra luôn được chăm chút tỉ mỉ từ nhũng nhân viên có kĩ năng đã được mài dũa"
            icon={i4}
            title="Sản phẩm đa dạng"
            delay="2"
          ></AboutItem>
          <AboutItem
            description="Chúng tôi luôn hướng đến sự tự động trong các khâu quản lý đặt hàng luôn mong muốn đem lại sự thoải mái khi khách hàng sự dụng những dịch vụ của chúng tôi"
            icon={i6}
            title="Ứng dụng công nghệ"
            delay="3"
          ></AboutItem>
          <AboutItem
            description="Chúng tôi sẽ tùy chỉnh dự án của bạn theo nhu cầu cụ thể của bạn mà không tính trước chất lượng và dịch vụ của chúng tôi."
            title="Tùy biến"
            icon={i5}
            delay="4"
          ></AboutItem>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
