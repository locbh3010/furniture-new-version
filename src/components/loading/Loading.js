import React from "react";

const Loading = ({ className, ...props }) => {
  return (
    <div
      className={className ? `skeleton ${className}` : "skeleton"}
      style={{
        height: props.height || "100%",
        width: props.width || "100%",
        borderRadius: props.radius || "0px",
      }}
    ></div>
  );
};

export default Loading;
