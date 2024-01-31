'use client'

import {ErrorToast, IsEmail, SuccessToast} from "@/utility/FormHelper";
import React, { useState } from "react";


const Subscribe = () => {
  let [data, setData] = useState({ email: "" });
  let [submit, setSubmit] = useState(false);

  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const formSubmit = async () => {
    if (IsEmail(data.email)) {
      ErrorToast("Valid Email Address Required!");
    } else {
      setSubmit(true);
      const options = { method: "POST", body: JSON.stringify(data) };
      let res = await (await fetch("/api/subscribe", options)).json();
      setSubmit(false);
      setData({ email: "" });

      res["status"] === "success"
        ? SuccessToast("Request Success")
        : ErrorToast("Email Already Used!");
    }
  };
  return (
    <>
      <h2 className="text-center text-3xl font-bold mb-5 capitalize">
        Subscribe to our newsletter
      </h2>
      <form className="max-w-sm mx-auto">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white sr-only"
        >
          Your email
        </label>
        <div className="flex items-center">
          <input
            type="email"
            id="email"
            value={data.email} 
            onChange={(e)=>{inputOnChange('email',e.target.value)}}
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 me-2"
            placeholder="mail@mail.com"
          />
          <button
            type="button"
            onClick={formSubmit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Subscribe
          </button>
        </div>
      </form>
    </>
  );
};

export default Subscribe;
