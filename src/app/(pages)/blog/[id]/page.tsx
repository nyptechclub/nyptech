import NotFound from "@/app/not-found";
import MdxRender from "@/components/mdx-render";
import { getPost } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { CalendarDaysIcon, CircleUserRoundIcon } from "lucide-react";
import Link from "next/link";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const post = getPost((await props.params).id);

  if (!post) {
    return <NotFound />;
  }

  return (
    <main>
      <div className={"mx-auto my-6 p-6 w-[70%] max-lg:w-[90%] bg-base-200 rounded-lg"}>
        <h1 className={"text-5xl font-bold"}>{post.metadata.title}</h1>
        <p className={"mt-4 flex gap-4"}>
          <span className={"flex gap-1 items-center"}>
            <CircleUserRoundIcon />
            <span className={"text-sm"}>{post.metadata.author}</span>
          </span>
          <span className={"flex gap-1 items-center"}>
            <CalendarDaysIcon />
            <span className={"text-sm"}>{formatDate(post.metadata.date)}</span>
          </span>
        </p>
        <div className={"divider"} />
        <article>
          <MdxRender content={post.content} />
        </article>
        <Link className={"mt-6 w-full btn btn-outline"} href={"/blog"}>
          Back to Blog
        </Link>
      </div>
    </main>
  );
}