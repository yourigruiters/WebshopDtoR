import React from "react";

interface IProps {}

const Error404: React.FC<IProps> = () => {
  return (
    <div>
      <h1>The page you tried to reach could not be found.</h1>
    </div>
  );
};

export default Error404;
