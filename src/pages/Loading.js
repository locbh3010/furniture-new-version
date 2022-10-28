import React from "react";

const Loading = () => {
  return (
    <div className="bg-gray-900 fixed inset-0 z-[100]">
      <div className="loader">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
    </div>
  );
};

export default Loading;
