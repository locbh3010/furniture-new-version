/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import { Header } from "../components/header";
import Phone from "../components/icon/Phone";

const Main = () => {
  return (
    <>
      <a
        href="tel:0933355548"
        className="fixed z-50 p-4 rounded-full bottom-10 right-3 bg-primary"
      >
        <Phone />
      </a>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default Main;
