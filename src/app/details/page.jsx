import NewsCard from "@/components/NewsCard";
import PlainLayout from "@/components/PlainLayout";
import Image from "next/image";
import React from "react";

async function getData(id) {
  let Details = (
    await (await fetch(`${process.env.HOST}/api/news/details?id=${id}`)).json()
  )["data"];
  return { Details: Details };
}

const Page = async (props) => {
  let id = props.searchParams["id"];
  const data = await getData(id);
  return (
    <PlainLayout>
      <h2 className="text-2xl font-bold mb-2">{data.Details.title}</h2>
      <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{data.Details.type}</span>
      <p className="capitalize my-5">
        <span className="font-bold">Tags:</span> {data.Details.keywords}
      </p>

      <div className="w-1/3 border border-slate-300 mb-5">
        <Image src="/breaking-news.jpg" alt="" width={1200} height={1200} />
      </div>

      <p>{data.Details.long_des}</p>
    </PlainLayout>
  );
};

export default Page;
