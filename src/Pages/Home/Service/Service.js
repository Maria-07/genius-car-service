import React from "react";

const Service = ({ service }) => {
  const { name, price, img, description } = service;

  return (
    <div>
      <h2>this is service : {name}</h2>
      <img src={img}></img>
    </div>
  );
};

export default Service;
