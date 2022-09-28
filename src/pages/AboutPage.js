import React from "react";
import Banner from "../components/section/Banner";
import banner from "../images/living-room-furniture-og.png";
import CEO from "../images/CEO.jpg";
import CFO from "../images/CFO.jpg";
import truongPhongThietKe from "../images/truong-phong-thiet-ke.jpg";
import kienTrucSu1 from "../images/kien-truc-su-1.jpg";
import kienTrucSu2 from "../images/kien-truc-su-2.jpg";
import number1 from "../images/number (1).png";
import number2 from "../images/number (2).png";
import number3 from "../images/number (3).png";
import accountantImg from "../images/ke-toan.jpg";
import AboutCard from "../components/about/AboutCard";

const leadership = [
  {
    id: 1,
    name: "nguyễn thành đông",
    position: "CEO",
    avatar: CEO,
    number: number1,
  },
  {
    id: 2,
    name: "VŨ THỊ THANH LÀI",
    position: "CFO",
    avatar: CFO,
    number: number2,
  },
];

const designers = [
  {
    id: 1,
    name: "ngô thanh lâm",
    position: "trưởng phòng thiết kế",
    avatar: truongPhongThietKe,
    number: number1,
  },
  {
    id: 2,
    name: "PHẠM THÀNH NAM",
    position: "KIẾN TRÚC SƯ",
    avatar: kienTrucSu1,
    number: number2,
  },
  {
    id: 3,
    name: "NGUYỄN HOÀNG SƠN",
    position: "KIẾN TRÚC SƯ",
    avatar: kienTrucSu2,
    number: number3,
  },
];

const accountant = {
  id: 1,
  name: "NGUYỄN THỊ NHỊ NHUNG",
  position: "KẾ TOÁN",
  avatar: accountantImg,
  number: number1,
};
const AboutPage = () => {
  return (
    <div>
      <Banner banner={banner} title="Về chúng tôi"></Banner>
      <div className="container">
        <p className="mb-10 text-xl text-center">
          Hiện tại, mô hình hoạt động của Công ty được chia làm 3 nhóm chính với
          lực lượng nhân sự chuyên biệt và chuyên nghiệp:
        </p>

        <div className="py-20 pt-5">
          <div className="py-10">
            <h2 className="mb-10 text-3xl font-medium text-center">
              Ban lãnh đạo
            </h2>
            <div className="grid max-w-4xl grid-flow-row grid-cols-1 gap-6 mx-auto auto-rows-fr sm:grid-cols-2">
              {leadership?.length > 0 &&
                leadership.map((leader, index) => {
                  return (
                    <AboutCard
                      member={leader}
                      key={leader.id}
                      delay={index}
                    ></AboutCard>
                  );
                })}
            </div>
          </div>

          <div className="py-10">
            <h2 className="mb-10 text-3xl font-medium text-center">
              Ban lãnh đạo
            </h2>
            <div className="grid grid-flow-row grid-cols-1 gap-6 mx-auto auto-rows-fr md:grid-cols-3">
              {designers?.length > 0 &&
                designers.map((leader) => {
                  return (
                    <AboutCard
                      member={leader}
                      key={leader.id}
                      delay="0"
                    ></AboutCard>
                  );
                })}
            </div>
          </div>

          <div className="py-10">
            <h2 className="mb-10 text-3xl font-medium text-center">
              Bộ phận kế toán
            </h2>

            <div className="grid grid-flow-row grid-cols-1 gap-6 mx-auto auto-rows-auto md:grid-cols-3">
              <div className="hidden md:block"></div>
              <AboutCard member={accountant} delay="0"></AboutCard>
              <div className="hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
