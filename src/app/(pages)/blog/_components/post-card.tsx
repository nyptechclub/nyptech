import { PostMetadata } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { CalendarDaysIcon, CircleUserRoundIcon } from "lucide-react";
import Link from "next/link";

export default function PostCard(props: { post: PostMetadata }) {
  return (
    <article className={"w-full cursor-pointer rounded-lg bg-base-200 p-4 shadow-lg transition hover:bg-base-300"}>
      <Link href={`/blog/${props.post.slug}`}>
        <h1 className={"text-xl font-bold"}>{props.post.title}</h1>
        <p className={"mb-3 mt-1 text-gray-600 dark:text-gray-400"}>{props.post.summary}</p>
        <div className={"flex gap-4"}>
          <span className={"flex items-center gap-1"}>
            <CircleUserRoundIcon />
            <span className={"text-sm"}>{props.post.author}</span>
          </span>
          <span className={"flex items-center gap-1"}>
            <CalendarDaysIcon />
            <span className={"text-sm"}>{formatDate(props.post.date)}</span>
          </span>
        </div>
      </Link>
    </article>
  );
}