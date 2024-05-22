import { getPost } from "@/app/blog/utils";
import NotFound from "@/app/not-found";

export default function Page(props: { params: { id: string } }) {
  const post = getPost(props.params.id);

  if (!post) {
    return <NotFound />;
  }

  return (
    <main>
      <article className={"mx-auto mt-6 p-4 w-[70%] bg-base-200 rounded-lg"}>
        <h1 className={"text-3xl font-bold"}>{post.metadata.title}</h1>
        <p>
          {post.content}
        </p>
      </article>
    </main>
  );
}