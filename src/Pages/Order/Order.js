import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import axiosPrivate from "../../Api/axiosPrivate";
import auth from "../../firebase.init";

const Order = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `https://rocky-sierra-22125.herokuapp.com/order?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setOrders(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          Navigate("/login");
        }
      }
    };
    getOrders();
  }, [user]);
  return (
    <div>
      <h1>Order is placed {orders.length}</h1>
    </div>
  );
};

export default Order;
