import React, { useState } from "react";
import { Link } from "react-router-dom";
import SubmitButton from "../components/SubmitButton";

import {
  createFirebaseAuthFromEmailPassword,
  createUserFromFirebaseAuth,
} from "../utils/firebase";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onRegisterFormSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = formFields;

    if (!displayName || !email || !password || !confirmPassword) {
      console.log("All inputs are required!");
      return;
    }
    if (password !== confirmPassword) {
      console.log("Passwords dont match!");
      return;
    }

    try {
      const response = await createFirebaseAuthFromEmailPassword(
        email,
        password
      );

      if (response) {
        await createUserFromFirebaseAuth(response, {
          displayName,
        });
      }
    } catch (e) {
      const errorCode = e.code;
      console.log(errorCode);

      if (errorCode === "auth/email-already-in-use") {
        console.log("This email is already in use!");
        return;
      }
      if (errorCode === "auth/invalid-email") {
        console.log("The provided email is invalid!");
        return;
      }
    }
  };

  return (
    <section className="register min-h-screen pt-14">
      <div className="container mx-auto px-3 text-center sm:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-semibold mb-1">REGISTER</h1>
        <p className="leading-tight text-neutral-500 text-sm mb-6">
          Please enter below your details
        </p>
        <form className="mb-3" onSubmit={onRegisterFormSubmit}>
          <div className="input-group space-y-2">
            <div className="displayName-input relative">
              <input
                required
                type="text"
                onChange={onInputChange}
                name="displayName"
                value={formFields.displayName}
                placeholder="Display Name"
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div className="email-input relative">
              <input
                required
                type="email"
                onChange={onInputChange}
                name="email"
                value={formFields.email}
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
                required
                type="password"
                onChange={onInputChange}
                name="password"
                value={formFields.password}
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
            <div className="confirm-password-input relative">
              <input
                required
                type="password"
                onChange={onInputChange}
                name="confirmPassword"
                value={formFields.confirmPassword}
                placeholder="Confirm password"
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

          <SubmitButton>Sign Up</SubmitButton>
        </form>
        <div className="text-start">
          <p className="font-medium">Already have an account?</p>
          <Link to="/login" className="text-indigo-500 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
