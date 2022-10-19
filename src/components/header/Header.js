/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

const Header = () => {
  const toggleMenu = useRef();
  const menu = useRef();
  const overlay = useRef();

  useEffect(() => {
    const classOverlayOpen =
      "fixed inset-0 z-40 visible duration-300 bg-black bg-opacity-40";
    const classOverlayClose =
      "fixed inset-0 z-40 invisible duration-300 bg-black bg-opacity-0";
    const handleToggleMenu = () => {
      if (menu.current.classList.contains("hidden")) {
        menu.current.classList.remove("hidden");
        menu.current.classList.add("block");
        overlay.current.className = classOverlayOpen;
      } else {
        menu.current.classList.remove("block");
        menu.current.classList.add("hidden");
        overlay.current.className = classOverlayClose;
      }
    };
    const handleClickOutsideMenu = (e) => {
      menu.current.classList.remove("block");
      menu.current.classList.add("hidden");
      overlay.current.className = classOverlayClose;
    };

    overlay.current.addEventListener("click", handleClickOutsideMenu);
    toggleMenu.current.addEventListener("click", handleToggleMenu);

    return () => {
      overlay.current.removeEventListener("click", handleClickOutsideMenu);
      toggleMenu.current.removeEventListener("click", handleToggleMenu);
    };
  });

  return (
    <>
      <div
        className="fixed inset-0 z-40 invisible duration-300 bg-black bg-opacity-40"
        ref={overlay}
      ></div>
      <nav className="sticky top-0 left-0 z-50 w-full duration-300 bg-white border-gray-300 rounded sm:px-4 bg-opacity-80 backdrop-blur-sm">
        <div className="container flex flex-wrap items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="logo" className="object-cover h-24" />
          </NavLink>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded="false"
            ref={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full lg:block lg:w-auto"
            id="navbar-default"
            ref={menu}
          >
            <ul className="flex flex-col p-4 pt-0 mt-4 bg-white rounded-lg lg:p-4 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium">
              <li>
                <NavLink
                  to="/"
                  className="block py-4 pl-3 pr-4 text-sm font-semibold rounded text-33 lg:bg-transparent lg:p-0 "
                  aria-current="page"
                >
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/project"
                  className="block py-4 pl-3 pr-4 text-sm font-semibold rounded text-33 lg:bg-transparent lg:p-0 "
                  aria-current="page"
                >
                  Dự án
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/device"
                  className="block py-4 pl-3 pr-4 text-sm font-semibold rounded text-33 lg:bg-transparent lg:p-0 "
                  aria-current="page"
                >
                  Thiết bị sản xuất
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block py-4 pl-3 pr-4 text-sm font-semibold rounded text-33 lg:bg-transparent lg:p-0 "
                  aria-current="page"
                >
                  Về chúng tôi
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/feedback"
                  className="block py-4 pl-3 pr-4 text-sm font-semibold rounded text-33 lg:bg-transparent lg:p-0 "
                  aria-current="page"
                >
                  Ý kiến khách hàng
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="block py-4 pl-3 pr-4 text-sm font-semibold rounded text-33 lg:bg-transparent lg:p-0 "
                  aria-current="page"
                >
                  Liên hệ
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
