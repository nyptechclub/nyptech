import { getPost } from "@/app/blog/utils";
import NotFound from "@/app/not-found";
import MdxRender from "@/components/mdx-render";
import { formatDate } from "@/lib/utils";

export default function Page(props: { params: { id: string } }) {
  const post = getPost(props.params.id);

  if (!post) {
    return <NotFound />;
  }

  return (
    <main>
      <div className={"mx-auto mt-6 p-6 w-[70%] bg-base-200 rounded-lg"}>
        <h1 className={"text-4xl font-bold"}>{post.metadata.title}</h1>
        <p className={"mt-1 text-sm"}>{formatDate(post.metadata.date)}</p>
        <div className={"divider"} />
        <article>
          <MdxRender content={post.content} />
        </article>
      </div>
    </main>
  );
}