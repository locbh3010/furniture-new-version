import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-40 text-center text-white pb-15 md:text-left">
      <div className="container">
        <div className="grid-cols-2 gap-8 lg:grid">
          <div>
            <span className="text-3xl font-bold block mb-7.5">
              Nội thất nhà bạn, kiến tạo ngôi nhà bạn
            </span>
            <h2 className="uppercaes text-[40px] font-bold mb-40">
              Start By{" "}
              <span className="underline text-primary">Saying Hi!</span>
            </h2>
          </div>

          <div className="grid-cols-2 text-base md:grid">
            <div className="flex flex-col gap-12 mb-20 md:mb-0">
              <h4 className="text-3xl font-bold">Menu</h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <NavLink to={"/"}>Trang chủ</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>Về chúng tôi</NavLink>
                </li>
                <li>
                  <NavLink to={"/feedback"}>Ý kiến khách hàng</NavLink>
                </li>
                <li>
                  <NavLink to={"/"}>Thi công</NavLink>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-12">
              <h4 className="text-3xl font-bold">Useful Links</h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <NavLink to={"/contact"}>Liên lạc với chúng tôi</NavLink>
                </li>
                <li>
                  <NavLink to={"/project"}>Dự án của chúng tôi</NavLink>
                </li>
                <li>
                  <NavLink to={"/device"}>Thiết bị sản xuất</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[#c9c9c9] text-sm text-justify sm:text-center mt-10">
            construction company, construction company in bangalore,
            construction company near me, construction company mysore,
            construction company bangalore, construction company at bangalore,
            design and construction company in bangalore, best construction
            company in bangalore, best house construction company in bangalore,
            construction companies in bangalore, construction consultancy
            companies in bangalore, good construction companies in bangalore,
            best construction company, best construction company in mysore, best
            construction company near me, best construction company bangalore,
            top construction companies in bangalore, top construction companies
            in india, top construction firms in bangalore, house construction
            company, best construction company, house renovation in bangalore
          </p>
          <p className="mt-20 text-base text-center">
            © 2022 by Nhà bạn furniture
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
