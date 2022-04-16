import React from "react";
import sleep from "../../../images/404.jpg";

const NotFound404 = () => {
  return (
    <div className="container mx-auto my-20 text-center">
      <h2 className=" font-semibold text-3xl">Mechanic is sleepy</h2>
      <img src={sleep} className=" h-40 mx-auto" alt="" />
    </div>
  );
};

export default NotFound404;
