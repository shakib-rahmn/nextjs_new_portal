import React from "react";
import { Toaster } from "react-hot-toast";
import { cookies } from "next/headers";
import Navbar from "./Navbar";

async function getData() {
  let categories = (
    await (await fetch(`${process.env.HOST}/api/category`)).json()
  )["data"];
  let socials = (await (await fetch(`${process.env.HOST}/api/social`)).json())[
    "data"
  ];
  return { categories: categories, socials: socials };
}

const PlainLayout = async (props) => {
  const data = await getData();
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  let isLogin = false;
  isLogin = typeof token !== "undefined";

  return (
    <>
      <Navbar isLogin={isLogin} data={data} />
      <div className="max-w-screen-xl mx-auto px-4 my-[180px]">
        {props.children}
      </div>
      <Toaster position="bottom-center" />
    </>
  );
};

export default PlainLayout;
