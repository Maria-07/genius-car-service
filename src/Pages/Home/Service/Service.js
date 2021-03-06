import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, name, price, img, description } = service;
  const navigate = useNavigate();

  const handleNavigateToServviceDetails = (id) => {
    navigate(`/service/${_id}`);
  };

  return (
    <div className="border mx-auto w-full md:w-9/12 p-2">
      <img className="w-full" src={img} alt=""></img>
      <div className=" p-4 my-5 text-center">
        <h2 className="mb-2 text-lg font-semibold">{name}</h2>
        <p>Price : {price} $</p>
        <p>
          <small>{description}</small>
        </p>
      </div>

      <button
        onClick={() => handleNavigateToServviceDetails(_id)}
        className="w-full bg-sky-800 text-white py-2 "
      >
        Book : {name}
      </button>
    </div>
  );
};

export default Service;
