import React from "react";
import { signInWithGooglePopup } from "../utils/firebase";

const Login = () => {


  return (
    <section className="login min-h-screen pt-14">
      <div className="container mx-auto px-3 text-center sm:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-semibold mb-1">LOGIN</h1>
        <p className="leading-tight text-neutral-500 text-sm mb-6">
          Please enter below account details
        </p>
        <form className="space-y-2 mb-3">
          <div className="login-input relative">
            <input
              type="text"
              placeholder="Email"
              className="w-full border bg-neutral-100 px-3 py-2"
            />
            <i className="bx bx-envelope absolute right-2 bottom-2 text-lg text-slate-500" />
          </div>
          <div className="password-input relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full border bg-neutral-100 px-3 py-2"
            />
            <i className="bx bx-lock-alt absolute right-2 bottom-2 text-lg text-slate-500" />
          </div>
          <div className="btn-group space-y-1">
            <button
              href="#"
              className="block w-full uppercase bg-slate-800 p-3 text-white text-sm hover:bg-slate-700 font-medium"
            >
              Sign In
            </button>
            <button
              className="block w-full uppercase bg-orange-500 p-3 text-white text-sm hover:bg-orange-600 font-medium"
            >
              Sign In with google
            </button>
          </div>
        </form>
        <div className="text-start">
          <p className="font-medium">Don't have an account?</p>
          <button href="#" className="text-indigo-500 underline">
            Create account
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
