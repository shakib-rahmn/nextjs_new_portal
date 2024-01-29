import NewsCard from '@/components/NewsCard';
import PlainLayout from '@/components/PlainLayout'
import React from 'react'

async function getData(keyword){
    let News = (await (await fetch(`${process.env.HOST}/api/news/search?keyword=${keyword}`)).json())['data']
    return {News: News}
}

const Page = async (props) => {
  let keyword = props.searchParams["keyword"];
  const data = await getData(keyword);
  return (
    <PlainLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {data.News.map((item) => (
          <NewsCard key={item.id} data={item} />
        ))}
      </div>
    </PlainLayout>
  );
};

export default Page