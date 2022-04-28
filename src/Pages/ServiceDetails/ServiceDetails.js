// import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useService from "../../Hooks/useService";

const ServiceDetails = () => {
  const { serviceId } = useParams();

  const [service] = useService(serviceId);

  return (
    <div className=" text-center my-10">
      <h2> You are about to book : {service.name}</h2>
      <Link to={`/checkout/${serviceId}`}>
        <button className=" bg-cyan-800 py-2 px-3 mt-10 text-white">
          {" "}
          Proceed CheckOut
        </button>
      </Link>
    </div>
  );
};

export default ServiceDetails;
