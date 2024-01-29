import PlainLayout from "@/components/PlainLayout";

export default function Home(props) {
  return (
    <>
      <PlainLayout>{props.children}</PlainLayout>
    </>
  );
}
