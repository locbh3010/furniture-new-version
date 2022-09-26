import React from "react";
import AboutHome from "../components/section/AboutHome";
import Hero from "../components/hero/Hero";
import Pledge from "../components/section/Pledge";
import ProjectHome from "../components/section/ProjectHome";
import AboutHomeDesign from "../components/section/AboutHomeDesign";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutHome />
      <Pledge />
      <ProjectHome />
      <AboutHomeDesign />
    </div>
  );
};

export default HomePage;
