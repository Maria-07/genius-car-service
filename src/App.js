import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import Cars from "./Pages/Cars/Cars";
import Login from "./Pages/Login/Login";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import NotFound404 from "./Pages/Shared/NotFound404/NotFound404";
import Register from "./Pages/Register/Register";
import Checkout from "./Pages/Checkout/Checkout";
import Requires from "./Pages/Requires/Requires";
import AddService from "./Pages/AddService/AddService";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Order from "./Pages/Order/Order";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/service/:serviceId"
          element={<ServiceDetails></ServiceDetails>}
        ></Route>
        <Route
          path="/checkout/:serviceId"
          element={
            <Requires>
              <Checkout></Checkout>
            </Requires>
          }
        ></Route>
        <Route
          path="/addservice"
          element={
            <Requires>
              <AddService></AddService>
            </Requires>
          }
        ></Route>
        <Route
          path="/orders"
          element={
            <Requires>
              <Order></Order>
            </Requires>
          }
        ></Route>
        <Route path="/cars" element={<Cars></Cars>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Register></Register>}></Route>
        <Route path="/*" element={<NotFound404></NotFound404>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
