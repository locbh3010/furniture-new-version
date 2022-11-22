import React from "react";
import BlogList from "../components/blog/BlogUi";

const Blogs = () => {
  return (
    <div className="py-24">
      <div className="container">
        <BlogList limitQuery={0} />
      </div>
    </div>
  );
};

export default Blogs;
