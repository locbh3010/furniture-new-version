import React from "react";
import Banner from "../components/section/Banner";
import banner from "../images/living-room-furniture-og.png";

const ProductList = ({ children, title, ...props }) => {
  return (
    <div className="py-20">
      <div className="mb-16 text-center">
        <h2 className="text-2xl font-bold uppercase md:text-3xl">{title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7.5 grid-flow-row auto-rows-1fr">
        {children}
      </div>
    </div>
  );
};

const ProjectPage = () => {
  return (
    <div>
      <Banner banner={banner} title="Dự án của chúng tôi" />
    </div>
  );
};

export default ProjectPage;
