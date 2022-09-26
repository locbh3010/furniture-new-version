import React from "react";

const ProductList = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7.5 grid-flow-row auto-rows-1fr">
      {children}
    </div>
  );
};

export default ProductList;
