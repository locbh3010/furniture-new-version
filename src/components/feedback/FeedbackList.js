import React from "react";

const FeedbackList = ({ children }) => {
  return (
    <div className="grid md:grid-cols-2 gap-7.5 gird-flow-row auto-rows-fr grid-cols-1">
      {children}
    </div>
  );
};

export default FeedbackList;
