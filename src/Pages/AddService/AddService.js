import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/service`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div>
      <h1>Please add Services</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="m-2 p-2"
          placeholder="First Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="m-2 p-2"
          placeholder="Description"
          {...register("description", { pattern: /^[A-Za-z]+$/i })}
        />
        <input
          className="m-2 p-2"
          type="number"
          {...register("price", { min: 1, max: 99 })}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
