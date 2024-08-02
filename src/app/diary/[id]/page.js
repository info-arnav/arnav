import Blog from "./../blog";

export default async function Diary({ params }) {
  return (
    <>
      <Blog gdate={params.id}></Blog>
    </>
  );
}
