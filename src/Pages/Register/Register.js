import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="mx-auto">
        <form
          //   onSubmit={handleCreateUser}
          className=" border-2 p-11 mt-14 w-full md:w-4/5 lg:w-1/4 mb-4 mx-auto text-center"
        >
          <h1 className=" mb-8 text-3xl">Sign UP</h1>
          <div className=" text-left">
            <p>Email</p>
            <input
              //   onBlur={handleEmailBlur}
              required
              type="email"
              className="form-input px-4 py-3 rounded w-full border-2 my-2"
              placeholder="Enter your email"
            />
          </div>
          <br />
          <div className=" text-left">
            <p>Password</p>
            <input
              //   onBlur={handlePasswordBlur}
              required
              type="password"
              className="form-input px-4 py-3 rounded w-full border-2 my-2"
              placeholder="Enter your password"
            />
          </div>
          <br />
          <div className=" text-left">
            <p>Confirm Password</p>
            <input
              //   onBlur={handleConfirmBlur}
              required
              type="password"
              className="form-input px-4 py-3 rounded w-full border-2 my-2"
              placeholder="confirm password"
            />
          </div>
          <br />
          {/* <p className=" text-red-600">{error}</p> */}
          <input
            type="submit"
            className=" w-full bg-orange-400 rounded mt-6 mb-5 text-white  px-5 py-2 text-xl font-semibold"
            value="Sign UP"
          />
          <p>
            Already have an account?{" "}
            <Link className=" text-orange-400" to={"/login"}>
              Login
            </Link>
          </p>

          <div className="my-5 text-2xl font-semibold">Or</div>

          <button className=" flex items-center justify-center w-full border-2 rounded mt-2 px-5 py-2 text-lg">
            <img src="google.png" className="w-10 h-10" alt="" />
            Continue with Google
          </button>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2022 Emazon shopping. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Register;
