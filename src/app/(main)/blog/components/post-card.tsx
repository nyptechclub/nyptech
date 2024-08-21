import { PostMetadata } from "@/blog";
import { formatDate } from "@/utils";
import { CalendarDaysIcon, CircleUserRoundIcon } from "lucide-react";
import Link from "next/link";

export default function PostCard(props: { post: PostMetadata }) {
  return (
    <article className={"p-4 w-full bg-base-200 rounded-lg shadow-lg cursor-pointer transition hover:bg-base-300"}>
      <Link href={`/blog/${props.post.slug}`}>
        <h1 className={"text-xl font-bold"}>{props.post.title}</h1>
        <p className={"mt-1 mb-3 text-gray-600 dark:text-gray-400"}>{props.post.summary}</p>
        <div className={"flex gap-4"}>
          <span className={"flex gap-1 items-center"}>
            <CircleUserRoundIcon />
            <span className={"text-sm"}>{props.post.author}</span>
          </span>
          <span className={"flex gap-1 items-center"}>
            <CalendarDaysIcon />
            <span className={"text-sm"}>{formatDate(props.post.date)}</span>
          </span>
        </div>
      </Link>
    </article>
  );
}