import React from "react";
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const Experts = () => {
  const experts = [
    { id: 1, name: "wil smith", img: expert1 },
    { id: 2, name: "wil smith", img: expert2 },
    { id: 3, name: "wil smith", img: expert3 },
    { id: 4, name: "wil smith", img: expert4 },
    { id: 5, name: "wil smith", img: expert5 },
    { id: 6, name: "wil smith", img: expert6 },
  ];
  return (
    <div id="experts" className="container">
      <h2 className=" text-center font-medium text-4xl my-10">Our Experts</h2>
      <div className="row">
        {experts.map((expert) => (
          <div key={expert.id} className="col-sm-12 col-md-6 col-lg-4">
            <Expert expert={expert}></Expert>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experts;
