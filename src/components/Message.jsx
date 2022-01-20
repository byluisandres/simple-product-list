import React from "react";

const Message = ({ children }) => {
  return (
    <div className="d-flex justify-content-center">
      <span className="mt-4"> {children}</span>
    </div>
  );
};

export default Message;
