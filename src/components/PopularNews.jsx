import NewsCard from "@/components/NewsCard";
import PlainLayout from "@/components/PlainLayout";
import React from "react";

async function getData(keyword) {
  let News = (
    await (await fetch(`${process.env.HOST}/api/news/type?type=Popular`)).json()
  )["data"];
  return { News: News };
}

const PopularNews = async () => {
  const data = await getData();
  return (
    <>
      <h2 className="mb-5 text-3xl font-bold text-slate-600">Popular News</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {data.News.map((item) => (
          <NewsCard key={item.id} data={item} />
        ))}
      </div>
    </>
  );
};

export default PopularNews;
