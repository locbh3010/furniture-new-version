import React from "react";
import banner from "../../images/what.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

AOS.init({
  duration: 500,
});

const Pledge = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-8 text-2xl font-bold uppercase md:text-3xl">
            LỜI CAM KẾT <span className=" text-primary"> CỦA CHÚNG TÔI:</span>
          </h2>
        </div>

        <div className="grid grid-flow-row grid-cols-1 gap-8 auto-rows-auto lg:grid-cols-2">
          <div className="overflow-hidden aspect-square md:aspect-auto h-[320px] lg:h-auto w-full">
            <img
              src={banner}
              alt="Pledge images"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-sm text-justify md:text-base lg:text-left">
            <p className="mb-6 leading-loose break-words">
              Luôn mong muốn khách hàng có những trải nghiệm tốt nhất mang đến
              cho khách hàng khả tính đặc trưng và những ý tưởng độc lạ
            </p>
            <p className="mb-6 leading-loose break-words">
              Chúng tôi luôn mong muốn sẽ làm hài lòng tất cả các vị khách đã
              đến chúng tôi
            </p>
            <p className="mb-6 leading-loose break-words">
              Chúng tôi cũng đang từng bước chuyển mình để ngày càng phát triển
              hơn để trở thành lựa chọn hàng đầu trong lĩnh lực thiết kế và thi
              công nội thất tại Bình Dương
            </p>
            <p className="leading-loose text-left break-words">
              790, Mỹ Phước Tân Vạn, Phú Mỹ, Thủ Dầu Một, Bình Dương
              <br />
              0933355548
              <br />
              congtynoithatnhaban@gmail.com
            </p>
            <NavLink
              to="/device"
              className="inline-block px-2 py-4 mt-10 text-xs text-center text-white md:text-sm bg-primary"
            >
              Xem thêm về thiết bị của chúng tôi
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pledge;
