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
      <div className={"mx-auto my-6 w-[70%] rounded-lg bg-base-200 p-6 max-lg:w-[90%]"}>
        <h1 className={"text-5xl font-bold"}>{post.metadata.title}</h1>
        <p className={"mt-4 flex gap-4"}>
          <span className={"flex items-center gap-1"}>
            <CircleUserRoundIcon />
            <span className={"text-sm"}>{post.metadata.author}</span>
          </span>
          <span className={"flex items-center gap-1"}>
            <CalendarDaysIcon />
            <span className={"text-sm"}>{formatDate(post.metadata.date)}</span>
          </span>
        </p>
        <div className={"divider"} />
        <article>
          <MdxRender content={post.content} />
        </article>
        <Link className={"btn btn-outline mt-6 w-full"} href={"/blog"}>
          Back to Blog
        </Link>
      </div>
    </main>
  );
}