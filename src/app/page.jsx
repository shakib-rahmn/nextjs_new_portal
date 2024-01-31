import LatestNews from "@/components/LatestNews";
import PlainLayout from "@/components/PlainLayout";
import PopularNews from "@/components/PopularNews";
import Subscribe from "@/components/Subscribe";

export default function Home(props) {
  return (
    <>
      <PlainLayout>
        <div className="mb-8">
          <PopularNews />
        </div>

        <LatestNews />

        <div className="my-20">
          <Subscribe />
        </div>
        {props.children}
      </PlainLayout>
    </>
  );
}
