import NewsCard from "@/components/NewsCard";
import PlainLayout from "@/components/PlainLayout";
import React from "react";

async function getData(id) {
  let News = (
    await (
      await fetch(`${process.env.HOST}/api/news/category?catID=${id}`)
    ).json()
  )["data"];
  return News;
}

const Page = async (props) => {
  let id = props.searchParams["id"];
  const data = await getData(id);
  return (
    <PlainLayout>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {data.map((item) => {
          return <NewsCard key={item.id} data={item} />
        })}
      </div>
    </PlainLayout>
  );
};

export default Page;
