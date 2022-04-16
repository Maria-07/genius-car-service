import React from "react";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="card my-6 mx-auto" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="" />
      <div className="card-body">
        <h2 className="mb-2 text-lg font-semibold">{name}</h2>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button className="w-full bg-sky-800 text-white py-2 mt-6 ">
          Book : {name}
        </button>
      </div>
    </div>
  );
};

export default Expert;
