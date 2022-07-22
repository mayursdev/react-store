import React from "react";
import { Link } from "react-router-dom";
import SubmitButton from "../components/SubmitButton";
import {
  createFirebaseAuthFromGooglePopup,
  createUserFromFirebaseAuth,
} from "../utils/firebase";

const Login = () => {
  const loginWithGoogle = async (e) => {
    e.preventDefault();

    try {
      const authResponse = await createFirebaseAuthFromGooglePopup();
      if (authResponse) {
        const userDocRef = await createUserFromFirebaseAuth(authResponse);
        console.log(userDocRef);
      }
    } catch (e) {
      console.log(e.code);
    }
  };

  return (
    <section className="login min-h-screen pt-14">
      <div className="container mx-auto px-3 text-center sm:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-semibold mb-1">LOGIN</h1>
        <p className="leading-tight text-neutral-500 text-sm mb-6">
          Please enter below account details
        </p>
        <form className="mb-3">
          <div className="input-group space-y-2">
            <div className="login-input relative">
              <input
                type="text"
                placeholder="Email"
                className="w-full border bg-neutral-100 px-3 py-2 border-black"
              />
              <svg
                className="h-6 w-6 absolute right-2 bottom-2 stroke-slate-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </div>
            <div className="password-input relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full border bg-neutral-100 px-3 py-2 border-black"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute right-2 bottom-2 stroke-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>
          <div className="btn-group space-y-1 mt-5">
            <SubmitButton>Sign In</SubmitButton>

            <SubmitButton
              onClick={loginWithGoogle}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-white mr-1"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
                <span>Sign In with google</span>
              </div>
            </SubmitButton>
          </div>
        </form>
        <div className="text-start">
          <p className="font-medium">Don't have an account?</p>
          <Link to="/register" className="text-indigo-500 hover:underline">
            Create account
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
