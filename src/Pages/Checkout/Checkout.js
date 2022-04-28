import React from "react";
import { useParams } from "react-router-dom";
import useService from "../../Hooks/useService";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useService(serviceId);
  const [user] = useAuthState(auth);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const order = {
      service: service.name,
      serviceId: serviceId,
      address: e.target.address.value,
      phone: e.target.phone.value,
      name: e.target.name.value,
      email: user.email,
    };
    console.log(order);
    axios
      .post("https://rocky-sierra-22125.herokuapp.com/order", order)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          toast("your order is booked");
          e.target.reset();
        }
      });

    // axios({
    //   method: "post",
    //   url: "https://rocky-sierra-22125.herokuapp.com/order",
    //   data: order,
    // });

    // fetch("https://rocky-sierra-22125.herokuapp.com/order", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(order),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   });
  };

  return (
    <div className="my-20 container mx-auto text-center">
      <h1 className=" text-6xl text-cyan-400 my-5 ">Checkout please</h1>
      <img className="mx-auto my-3" src={service.img} alt="" />
      id : {serviceId}
      <h4 className=" text-3xl my-2">Name : {service.name}</h4>
      <p>Description : {service.description}</p>
      <h2>Price : {service.price}$ </h2>
      <form
        onSubmit={handlePlaceOrder}
        className="mt-5 p-2 w-75 mx-auto bg-cyan-100"
      >
        <input
          className="mt-5 mb-2 w-50"
          type="text"
          name="name"
          placeholder="Your Name"
          required
          id=""
        />
        <br />
        <input
          className=" mb-2 w-50"
          type="email"
          name="email"
          placeholder="Your Email"
          required
          id=""
          value={user.email}
          readOnly
          disabled
        />
        <br />
        <input
          className=" mb-2 w-50"
          type="text"
          name="service"
          placeholder="Service"
          required
          id=""
          value={service.name}
          readOnly
        />
        <br />
        <input
          className=" mb-2 w-50"
          type="text"
          name="address"
          placeholder="Your Address"
          required
          id=""
        />
        <br />
        <input
          className=" mb-2 w-50"
          type="text"
          name="phone"
          placeholder="Phone Number"
          required
          id=""
        />
        <br />
        <input
          className="bg-cyan-800 py-2 px-3 mt-10 text-white"
          type="submit"
          value="Submit"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
