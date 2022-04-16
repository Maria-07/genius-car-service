import React, { useEffect, useState } from "react";
import Experts from "../Experts/Experts";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services" className="services-title container mx-auto ">
      <h1 className="head text-center my-20 text-4xl font-semibold">
        This is Services
      </h1>
      <div className="services-container">
        {services.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
