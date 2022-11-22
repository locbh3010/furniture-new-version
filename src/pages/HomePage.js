import React from "react";
import AboutHome from "../components/section/AboutHome";
import Hero from "../components/hero/Hero";
import Pledge from "../components/section/Pledge";
import ProjectHome from "../components/section/ProjectHome";
import AboutHomeDesign from "../components/section/AboutHomeDesign";
import BlogList from "../components/blog/BlogUi";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutHome />
      <Pledge />
      <ProjectHome />
      <div className="container py-12 mt-12">
        <h2 className="mb-12 text-2xl font-bold text-center md:text-3xl">
          Blog của Chúng tôi
        </h2>
        <BlogList />
      </div>
      <AboutHomeDesign />
    </div>
  );
};

export default HomePage;
