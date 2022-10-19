import React from "react";
import truongPhongThietKe from "../../images/truong-phong-thiet-ke.jpg";
import kienTrucSu1 from "../../images/kien-truc-su-1.jpg";
import kienTrucSu2 from "../../images/kien-truc-su-2.jpg";
import number1 from "../../images/number (1).png";
import number2 from "../../images/number (2).png";
import number3 from "../../images/number (3).png";
import AboutCard from "../about/AboutCard";

const aboutMember = [
  {
    id: 1,
    name: "nguyễn thành công",
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

const AboutHomeDesign = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-bold uppercase md:text-3xl">
            Bộ phận thiết kế
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {aboutMember?.length > 0 &&
            aboutMember.map((member, index) => (
              <AboutCard
                key={member.id}
                member={member}
                delay={index}
              ></AboutCard>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHomeDesign;
