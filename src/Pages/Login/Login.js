import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let errorElement;
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  if (error1) {
    errorElement = <p className="text-red-500">Error: {error1.message}</p>;
  }

  const handleEmailBlur = (e) => setEmail(e.target.value);
  const handlePasswordBlur = (e) => setPassword(e.target.value);

  if (user) {
    navigate(from, { replace: true });
  }

  const handleUserSignIn = async (event) => {
    event.preventDefault();
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://rocky-sierra-22125.herokuapp.com/login",
      { email }
    );
    localStorage.setItem("accesstoken", data.accessToken);
    navigate(from, { replace: true });
    console.log(data);
  };

  return (
    <div className="mx-auto">
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <form
        onSubmit={handleUserSignIn}
        className=" border-2 p-11 mt-36 w-full md:w-4/5 lg:w-1/4 mb-4 mx-auto text-center"
      >
        <h1 className=" mb-8 text-3xl">Login</h1>
        <div className=" text-left">
          <p>Email</p>
          <input
            onBlur={handleEmailBlur}
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
            onBlur={handlePasswordBlur}
            required
            type="password"
            className="form-input px-4 py-3 rounded w-full border-2 my-2"
            placeholder="Enter your password"
          />
        </div>
        <br />
        <p>{error?.message}</p>
        {loading && <p>Loading .. .. </p>}
        <input
          type="submit"
          className=" w-full bg-orange-400 rounded mt-6 mb-5 text-white  px-5 py-2 text-xl font-semibold"
          value="login"
        />

        <p>
          New to Ema-john?{" "}
          <Link className=" text-orange-400" to={"/signup"}>
            Create New Account
          </Link>
        </p>
        <div className="my-5 text-2xl font-semibold">Or</div>
        <button
          onClick={() => signInWithGoogle()}
          className=" flex items-center justify-center w-full border-2 rounded mt-2 px-5 py-2 text-lg"
        >
          <img src="google.png" className="w-10 h-10" alt="" />
          Continue with Google
        </button>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2022 Emazon shopping. All rights reserved.
      </p>
    </div>
  );
};

export default Login;
